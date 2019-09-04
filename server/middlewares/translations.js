const { translations } = require('../../modules/translations');
const { log } = require('../../modules/logger');

const translationsMiddleware = (req, res, next) => {
  res.locals.translations = translations[res.locals.language];
  log.info(
    `middleware:translations: selected ${res.locals.language} dictionary`,
  );
  next();
};

module.exports = { translationsMiddleware };
