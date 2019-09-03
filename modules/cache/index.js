const client = require('socket.io-client');
const querystring = require('querystring');
const LRUCache = require('lru-cache');
const { log } = require('../logger');
const {
  CLEAR_CACHE_EVENT,
  CACHE_MAX_AGE,
  IO_HOST,
} = require('../../config/server');

class BaseCache {
  constructor({
    max = 100 * 1024 * 1024,
    length = n => n.length,
    maxAge = CACHE_MAX_AGE,
  } = {}) {
    this.name = this.constructor.name.toLowerCase();
    this.max = max;
    this.maxAge = maxAge;
    this.length = length;
    this.socket = client.connect(IO_HOST);
    this.socket.on(CLEAR_CACHE_EVENT, () => {
      log.info(
        `cache:${this.name} receiving ${CLEAR_CACHE_EVENT}, deleting cache.`,
      );
      this.createNewInstance();
    });
    this.createNewInstance();
  }

  createNewInstance() {
    this.store = new LRUCache({
      maxAge: this.maxAge,
      max: this.max,
      length: this.length,
    });
  }

  has(key) {
    return this.store.has(key);
  }

  get(key) {
    return this.store.get(key);
  }

  getAllKeys() {
    return this.store.keys();
  }

  set(key, value) {
    this.store.set(key, value);
  }

  del(keys) {
    try {
      keys.forEach(this.store.del);
    } catch (e) {
      log.log(e);
    }
  }
}

class SSRCache extends BaseCache {
  static key(req) {
    return `${req.path}-${req.language}`;
  }
}

class ContentfulCache extends BaseCache {
  static key(key, query) {
    return `${key}-${querystring.stringify(query)}`;
  }
}

module.exports = {
  SSRCache,
  ContentfulCache,
};
