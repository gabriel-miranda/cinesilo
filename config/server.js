const CLIENT = require('./index');

const IO_PORT = parseInt(process.env.IO_PORT, 10) || 2327;
const IO_BASE_URL = 'http://localhost';

const CACHE_MAX_AGE = CLIENT.DEV
  ? 0
  : parseInt(process.env.CACHE_MAX_AGE, 10) || 1000 * 60 * 60 * 24 * 7;

module.exports = {
  ...CLIENT,
  SPACE: process.env.SPACE || '',
  ACCESS_TOKEN: process.env.ACCESS_TOKEN || '',
  PREVIEW: process.env.PREVIEW === 'true',
  CACHE_MAX_AGE,
  SSR_CACHE: process.env.SSR_CACHE || !CLIENT.DEV,
  API_KEY_CACHE: process.env.API_KEY_CACHE || 'cinesilo-key-cache',
  IO_PORT,
  IO_HOST: `${IO_BASE_URL}:${IO_PORT}`,
  CONNECTION_EVENT: 'connection',
  DISCONNECT_EVENT: 'disconnect',
  CLEAR_CACHE_EVENT: process.env.CLEAR_CACHE_EVENT || 'clear-cache-event',
  INVALIDATE_CACHE_EVENT:
    process.env.INVALIDATE_CACHE_EVENT || 'invalidate-cache-event',
};
