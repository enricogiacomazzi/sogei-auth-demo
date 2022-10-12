import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { refresh } from "./api";



export function initInterceptors() {
    axios.interceptors.request.use((req: AxiosRequestConfig) => {
        // if(req.url?.endsWith('login') || req.url?.endsWith('refresh')) {
        //     return req;
        // }

        if(!req.headers) {
            return req;
        }

        const accessToken = sessionStorage.getItem('accessToken') ?? '';
        req.headers['authorization'] = `Bearer ${accessToken}`;
        delete req.headers.auth;
        return req;
    });

    axios.interceptors.response.use(undefined, async (err: AxiosError) => {
        console.log('req int', err);
        if(err.response?.status === 401) {
            const req = err.request;
            if(!req.url?.endsWith('login') && !req.url?.endsWith('refresh')) {
                console.log('refresh');
                try {
                    await refresh();
                } catch (e) {
                    localStorage.removeItem('refreshToken');
                }                
            }
        }
        throw err;
    });
}