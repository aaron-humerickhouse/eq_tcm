import axios from 'axios';
import { AxiosPromise, AxiosRequestConfig, AxiosInstance } from 'axios';
import Cookies from 'js-cookie';

export class TCMService {
  http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: `${'http://localhost:3000'}/api/v1`,
    });
  };

  get = (path: string, config?: AxiosRequestConfig): AxiosPromise => {
    config = this.spread(config || {});
    return this.http.get(path, config);
  };

  put = (path: string, data?: object, config?: AxiosRequestConfig): AxiosPromise => {
    return this.http.put(path, data, config);
  };

  post = (path: string, data?: object, config?: AxiosRequestConfig): AxiosPromise => {
    config = this.spread(config || {});
    return this.http.post(path, data, config);
  };

  delete = (path: string, config?: AxiosRequestConfig): AxiosPromise => {
    return this.http.delete(path, config);
  };

  private spread = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const csrfToken = document.getElementsByName('csrf-token')[0].attributes['content'].value;
    config['headers'] = { ...config['headers'], 'Content-Type': 'application/json' };
    config['headers'] = { ...config['headers'], 'X-CSRF-Token': Cookies.get('CSRF-TOKEN') };

    console.log('config: ', config);
    return config;
  };
}

export default TCMService;
