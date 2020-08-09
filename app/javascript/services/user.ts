import { AxiosPromise } from 'axios';
import TCMService from './api';
import Cookies from 'js-cookie';

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
}

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

  register = (user: User): AxiosPromise => {
    return this.http.post(
      '/register.json',
      { user: user },
      {
        headers: {
          Authorization: `Token ${Cookies.get('eq_jwt')}`,
        },
      },
    );
  };
}
