import axios from 'axios';
import { DOMAIN } from './utils/constant';

const instance = axios.create({
    baseURL: DOMAIN,
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return error;
});

export default instance;