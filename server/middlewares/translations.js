const { translations } = require('../../modules/translations');

const translationsMiddleware = (req, res, next) => {
  res.locals.translations = translations[res.locals.language];
  /*
   * TODO: Uncomment this when we have multiple dictionaries available

  log.info(
    `middleware:translations: selected ${res.locals.language} dictionary`,
  );
  */
  next();
};

module.exports = { translationsMiddleware };
