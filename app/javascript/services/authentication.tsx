import axios from 'axios';
import { AxiosPromise } from 'axios';
import TCMService from './api';

export class AuthenticationService {
  login = (username, password) => {
    this.put()
  }

  put(path: string, data?: object): AxiosPromise {
    return this.http.put(path, data);
  }

  post(path: string, data?: object): AxiosPromise {
    return this.http.post(path, data);
  }

  delete(path: string): AxiosPromise {
    return this.http.delete(path);
  }
}
