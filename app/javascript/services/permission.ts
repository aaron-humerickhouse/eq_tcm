import { AxiosPromise } from 'axios';
import TCMService from './api';
import Cookies from 'js-cookie';

export class PermissionService {
  http: TCMService;

  constructor() {
    this.http = new TCMService();
  }

  getPermissions = (userId): AxiosPromise => {
    return this.http.get(`/users/${userId}/permissions.json`, {
      headers: {
        Authorization: `Token ${Cookies.get('eq_jwt')}`,
      },
    });
  };
}
