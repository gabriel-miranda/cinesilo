import axios from 'axios';

export default class ApiClient {
  static METHODS = ['get', 'post', 'put', 'patch', 'del'];

  constructor(baseUrl, { before, after, cacheEnabled } = {}) {
    ApiClient.METHODS.forEach(method => {
      this.baseUrl = baseUrl;
      this[method] = async (
        path,
        { params = {}, data = {}, query = {} } = {},
      ) => {
        const request = axios[method](`${baseUrl}${path}`, {
          params,
          data,
          query,
        });
        if (before) {
          await before(request);
        }
        const response = await request;
        if (after) {
          await after(request, response);
        }
        return response.data;
      };
    });

    if (cacheEnabled) {
      this.cache = new Map();
      ApiClient.METHODS.forEach(method => {
        const fetch = this[method];
        this[method] = async (...args) => {
          const key = JSON.stringify(args);
          if (!this.cache.has(key)) {
            this.cache.set(key, await fetch(...args));
          }
          return this.cache.get(key);
        };
      });
    }
  }
}
