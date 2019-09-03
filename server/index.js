require('dotenv').config();
const path = require('path');
const next = require('next');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
const { api } = require('./api');
const { log } = require('../modules/logger');
const { initInvalidatorSocket } = require('../modules/cache/invalidator');
const { contentfulMiddleware } = require('./middlewares/contentful');
const { slashesMiddleware } = require('./middlewares/slashes');
const { handleMiddleware } = require('./middlewares/handle');
const { passportSetup } = require('./middlewares/passport');
const { ContentfulWrapper } = require('../modules/contentful');
const {
  PORT,
  SPACE,
  ACCESS_TOKEN,
  BASE_URL,
  DEV,
} = require('../config/server');

const dev = DEV;
const app = next({ dev });
const handle = app.getRequestHandler();
passportSetup();

const contentful = new ContentfulWrapper({
  space: SPACE,
  accessToken: ACCESS_TOKEN,
});

(async () => {
  await app.prepare();
  const server = express();

  initInvalidatorSocket();

  server.disable('x-powered-by');

  server.use(favicon(path.join(__dirname, '../static', 'favicon.ico')));

  server.use(compression());

  server.use(handleMiddleware(handle));

  server.use(slashesMiddleware());

  server.use(contentfulMiddleware({ contentful }));

  server.use('/api', api);

  server.get('*', (req, res) => handle(req, res));

  server.listen(PORT, err => {
    if (err) {
      log.error('Error: ', err);
      throw err;
    }
    log.info(`> Ready on ${BASE_URL}`);
  });
})();
