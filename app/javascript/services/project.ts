import { AxiosPromise } from 'axios';
import TCMService from './api';

export class ProjectService {
  http: TCMService;

  constructor() {
    this.http = new TCMService();
  }

  getProjects = (): AxiosPromise => {
    return this.http.get(`/projects.json`, {});
  };
}
