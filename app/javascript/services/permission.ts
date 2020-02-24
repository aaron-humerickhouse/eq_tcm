import { AxiosPromise } from 'axios';
import TCMService from './api';

export class PermissionService {
  http: TCMService;

  constructor() {
    this.http = new TCMService();
  }

  getPermissions = (userId): AxiosPromise => {
    return this.http.get(`/users/${userId}/permissions.json`, {});
  };
}
