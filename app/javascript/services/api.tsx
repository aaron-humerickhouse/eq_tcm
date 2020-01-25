import axios from 'axios';
import { AxiosPromise } from 'axios';

export class TCMService {
    http = axios.create({
        baseURL: `${'localhost:3000'}/api/v1`,
        headers: { 'Content-Type': 'application/json' },
    });

    get(path: string): AxiosPromise {
        return this.http.get(path);
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

export default TCMService;
