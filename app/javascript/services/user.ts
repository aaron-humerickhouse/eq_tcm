import { AxiosPromise } from 'axios';
import TCMService from './api';
import Cookies from 'js-cookie';

export class UserService {
  http: TCMService;

  constructor() {
    this.http = new TCMService();
  }

  getUser = (userId: number): AxiosPromise => {
    return this.http.get(`/users/${userId}.json`, {
      headers: {
        Authorization: `Token ${Cookies.get('eq_jwt')}`,
      },
    });
  };
}
