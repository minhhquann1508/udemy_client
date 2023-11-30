import axios from '../axios'

export const loginApi = (data) => axios({
    url: 'auth/login',
    method: 'post',
    data
});

export const registerApi = (data) => axios({
    url: 'auth/register',
    method: 'post',
    data
});