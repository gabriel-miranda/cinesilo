import { BASE_URL } from 'config';
import ApiClient from './index';

class Client extends ApiClient {
  constructor(req) {
    super(`${BASE_URL}/api`, { cacheEnabled: Boolean(req) });
  }

  get = query => this.post(`/`, { query });
}

export default Client;
