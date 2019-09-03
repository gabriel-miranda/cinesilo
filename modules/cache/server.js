const { SSRCache } = require('./index');
const { log } = require('../logger');

const ssrCache = new SSRCache();

const renderAndCache = app => async (req, res) => {
  const key = SSRCache.key(req);

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    log.info(`server:cache: serving from cache ${key}`);
    res.setHeader('x-cache', 'HIT');
    res.send(ssrCache.get(key));
    return;
  }

  try {
    log.info(`server:cache: key ${key} not found, rendering`);
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, req.path, req.query);

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
    app.renderError(e, req, res, req.path, req.query);
  }
};

module.exports = { renderAndCache };
