import { AxiosPromise } from 'axios';
import TCMService from './api';

export class AuthenticationService {
  http: TCMService;

  constructor() {
    this.http = new TCMService();
  }

  login = (username, password): AxiosPromise => {
    return this.http.post(
      '/login.json',
      {},
      {
        auth: {
          username: username,
          password: password,
        },
      },
    );
  };
}
