const debugLogger = require('debug-logger');
const { APP_NAME } = require('../../config');

const log = debugLogger(APP_NAME);

module.exports = { log };
