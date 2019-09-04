const { log } = require('../../modules/logger');

const LANGUAGES = {
  es: 'es',
};

const DEFAULT_LANGUAGE = LANGUAGES.es;

const getLanguage = req => {
  const [language] = req.acceptsLanguages();
  return Object.values(LANGUAGES).includes(language)
    ? language
    : DEFAULT_LANGUAGE;
};

const languageMiddleware = (req, res, next) => {
  const lang = getLanguage(req);
  res.locals.language = lang;
  log.info(`middleware:language language set: ${lang}`);
  next();
};

module.exports = { languageMiddleware };
