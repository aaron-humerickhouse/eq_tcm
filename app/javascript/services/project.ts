import { AxiosPromise } from 'axios';
import TCMService from './api';
import Cookies from 'js-cookie';

export class ProjectService {
  http: TCMService;

  constructor() {
    this.http = new TCMService();
  }

  getProjects = (): AxiosPromise => {
    return this.http.get(`/projects.json`, {
      headers: {
        Authorization: `Token ${Cookies.get('eq_jwt')}`,
      },
    });
  };

  getProject = (id: number): AxiosPromise => {
    return this.http.get(`/projects/${id}.json`, {
      headers: {
        Authorization: `Token ${Cookies.get('eq_jwt')}`,
      },
    });
  };
}
