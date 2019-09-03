const io = require('socket.io');
const client = require('socket.io-client');
const { log } = require('../logger');
const {
  IO_PORT,
  IO_HOST,
  CONNECTION_EVENT,
  DISCONNECT_EVENT,
  CLEAR_CACHE_EVENT,
  INVALIDATE_CACHE_EVENT,
} = require('../../config/server');

class Invalidator {
  constructor({ url = IO_HOST, event = INVALIDATE_CACHE_EVENT } = {}) {
    this.url = url;
    this.event = event;
    this.socket = client.connect(this.url);
  }

  cast() {
    this.socket.emit(this.event);
  }
}

function initInvalidatorSocket() {
  const server = io(IO_PORT);
  server.on(CONNECTION_EVENT, socket => {
    log.info('socket:io socket connected');
    socket.on(INVALIDATE_CACHE_EVENT, () => {
      log.info(`socket:io: ${INVALIDATE_CACHE_EVENT} received`);
      log.info(`socket:io: sending ${CLEAR_CACHE_EVENT} event`);
      socket.broadcast.emit(CLEAR_CACHE_EVENT);
    });

    socket.on(DISCONNECT_EVENT, () => {
      log.info('socket:io: socket disconnected');
    });
  });
}

module.exports = {
  Invalidator,
  initInvalidatorSocket,
};
