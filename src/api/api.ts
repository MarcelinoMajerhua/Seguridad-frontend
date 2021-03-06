import axios, { AxiosResponse } from 'axios';
import { store } from '../store/store';

const sleep = (delay: number) => {
   return new Promise((resolve) => {
      setTimeout(resolve, delay);
   });
};

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.request.use((config) => {
   const token = store.commonStore.token;
   if (token) config.headers.Authorization = `Bearer ${token}`;
   return config;
});

axios.interceptors.response.use(async (response) => {
   await sleep(2000);
   return response;
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
   get: <T>(url: string) => axios.get<T>(url).then(responseBody),
   post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
   put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
   del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

export default request;
