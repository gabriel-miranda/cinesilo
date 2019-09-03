const LRU = require('lru-cache');
const { log } = require('../logger');
const { CACHE_MAX_AGE } = require('../../config/server');

class ContentfulCache {
  constructor(space, maxAge = CACHE_MAX_AGE) {
    this.space = space;
    this.maxAge = maxAge;
    this.createNewInstance();
  }

  createNewInstance() {
    this.store = new LRU({
      maxAge: this.maxAge,
    });
  }

  get(key) {
    return this.store.get(`${this.space}:${key}`);
  }

  getAllKeys() {
    return this.store.keys();
  }

  set(key, value) {
    this.store.set(`${this.space}:${key}`, value);
  }

  del(keys) {
    try {
      keys.forEach(k => this.store.del(`${this.space}:${k}`));
    } catch (e) {
      log.log(e);
    }
  }
}

module.exports = { ContentfulCache };
