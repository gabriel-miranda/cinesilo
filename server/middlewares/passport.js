const passport = require('passport');
const { Strategy } = require('passport-http-bearer');
const { API_KEY_CACHE } = require('../../config');
const { log } = require('../../modules/logger');

function passportSetup() {
  passport.use(
    new Strategy((token, cb) => {
      if (token === API_KEY_CACHE) {
        return cb(null, true);
      }
      log.error(`Invalid credentials: ${token}`);
      return cb(null, false);
    }),
  );
}

function passportMiddleware(req, res, next) {
  return passport.authenticate('bearer', { session: false })(req, res, next);
}

module.exports = {
  passportSetup,
  passportMiddleware,
};
