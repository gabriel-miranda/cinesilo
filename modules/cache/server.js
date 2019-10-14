const { SSRCache } = require('./index');
const { log } = require('../logger');
const { DEV } = require('../../config/server');

const ssrCache = new SSRCache();

const renderAndCache = async ({ app, req, res, pagePath, query }) => {
  const q = query || req.query;
  const key = SSRCache.key(req, res);

  // If we have a page in the cache and we're not in DEV, let's serve it
  if (ssrCache.has(key) && !DEV) {
    log.info(`server:cache: serving from cache ${key}`);
    res.setHeader('x-cache', 'HIT');
    res.send(ssrCache.get(key));
    return;
  }

  try {
    log.info(`server:cache: key ${key} not found, rendering`);
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, pagePath, q);

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html);
      return;
    }

    // Let's cache this page
    ssrCache.set(key, html);

    res.setHeader('x-cache', 'MISS');
    res.send(html);
  } catch (e) {
    log.error(`server:cache: 💥 an error ocurred: ${e}`);
    app.renderError(e, req, res, req.path, q);
  }
};

module.exports = { renderAndCache };
