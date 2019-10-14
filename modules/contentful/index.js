const { createClient } = require('contentful');
const { log } = require('../logger');
const { ContentfulCache } = require('../../modules/cache');

const CDN_CONTENTFUL = 'cdn.contentful.com';
const CDN_PREVIEW = 'preview.contentful.com';
const SEVEN_DAYS = 1000 * 60 * 60 * 24 * 7;

class ContentfulWrapper {
  constructor({
    space,
    accessToken,
    cacheMaxAge = SEVEN_DAYS,
    Store = ContentfulCache,
    removeUnresolved = true,
    preview = false,
  }) {
    if (!space || !accessToken) {
      throw new Error(`Missing parameters for ${this.constructor.name}`);
    }
    this.space = space;
    this.client = createClient({
      space,
      accessToken,
      removeUnresolved,
      host: preview ? CDN_PREVIEW : CDN_CONTENTFUL,
    });
    this.cache = new Store({ maxAge: cacheMaxAge });
  }

  clearCache(keys) {
    this.cache.del(keys);
  }

  clearAllCache() {
    this.cache.createNewInstance();
  }

  async get(query) {
    try {
      const cachename = ContentfulCache.key(
        query.content_type || 'common',
        query,
      );
      const cached = await this.cache.get(cachename);
      if (cached) {
        log.info(`contentful-wrapper:cache: key ${cachename} cached`);
        return cached;
      }
      log.info(`key ${cachename} not cached`);
      const { items, total } = await this.client.getEntries(query);
      const results = items.map(item => ({
        id: item.sys.id,
        created: item.sys.createdAt,
        ...item.fields,
      }));
      const response = {
        total,
        items: results,
      };
      this.cache.set(cachename, response);
      return response;
    } catch (e) {
      log.error(`contentful:wrapper: 💥 an error ocurred ${e}`);
      return [];
    }
  }
}

module.exports = { ContentfulWrapper };
