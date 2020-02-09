import { AxiosPromise } from 'axios';
import TCMService from './api';
import Cookies from 'js-cookie';

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

  logout = (): AxiosPromise => {
    return this.http.delete('/logout.json', {
      headers: {
        Authorization: `Token ${Cookies.get('eq_jwt')}`,
      },
    });
  };
}
