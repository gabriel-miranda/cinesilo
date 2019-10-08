require('dotenv').config();
const path = require('path');
const next = require('next');
const cors = require('cors');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
const { api } = require('./api');
const { log } = require('../modules/logger');
const { initInvalidatorSocket } = require('../modules/cache/invalidator');
const { contentfulMiddleware } = require('./middlewares/contentful');
const { languageMiddleware } = require('./middlewares/language');
const { translationsMiddleware } = require('./middlewares/translations');
const { slashesMiddleware } = require('./middlewares/slashes');
const { passportSetup } = require('./middlewares/passport');
const { ContentfulWrapper } = require('../modules/contentful');
const { translations } = require('../modules/translations');
const {
  PORT,
  SPACE,
  ACCESS_TOKEN,
  BASE_URL,
  DEV,
  CATEGORIES,
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

  server.use(
    cors({
      origin: BASE_URL,
    }),
  );

  server.disable('x-powered-by');

  server.use(compression());

  server.use(favicon(path.join(__dirname, '../static', 'favicon.ico')));

  server.get('/manifest.json', (req, res, n) => {
    res.sendFile(
      'manifest.json',
      { root: path.join(__dirname, '../static') },
      err => {
        if (err) {
          log.error(
            '💥 An error ocurred when trying to retrieve the manifest.json',
            err,
          );
          n(err);
        }
      },
    );
  });

  server.get('/_next/*', (req, res) => handle(req, res));

  server.use(contentfulMiddleware({ contentful }));

  server.use('/api', api);

  server.use(languageMiddleware);

  server.use(translationsMiddleware);

  server.use(slashesMiddleware());

  ['search', ...Object.keys(CATEGORIES)].forEach(category => {
    // This routes apply only to spanish because at this moment is the only
    // language we support, do a forEach with more languages to make it work
    const current = `/${translations.es[category].toLowerCase()}`;
    server.get(current, (req, res) => app.render(req, res, current));
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(PORT, err => {
    if (err) {
      log.error('> 💥 An error ocurred when starting up the server: ', err);
      throw err;
    }
    log.info(`> 🎉 Ready on ${BASE_URL}`);
  });
})();
