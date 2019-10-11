const debugLogger = require('debug-logger');
const axios = require('axios');
const { APP_NAME } = require('../../config');

function toClient(obj) {
  const _obj = {};
  const keys = Object.keys(obj);
  keys.forEach(k => {
    _obj[k] = (...args) => axios.post('/_/log', { data: args, type: k });
  });
  return _obj;
}

const server = debugLogger(APP_NAME);
const client = toClient(server);

const log = typeof window !== 'undefined' ? client : server;

module.exports = { log };
