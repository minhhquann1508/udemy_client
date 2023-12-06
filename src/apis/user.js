import axios from '../axios';
import { store } from '../store/store';
const getToken = () => {
    const state = store.getState();
    return state.authReducer.accessToken || JSON.parse(localStorage.getItem('accessToken'));
};

export const getUserInfo = () => axios({
    url: `user/current-user`,
    method: 'get',
    headers: {
        Authorization: `Bearer ${getToken()}`
    }
});

export const updateUser = (userId, data) => axios({
    url: `user/${userId}`,
    method: 'put',
    headers: {
        Authorization: `Bearer ${getToken()}`
    },
    data
});

export const updateAvatar = (data) => axios({
    url: 'user/upload-avatar',
    method: 'put',
    headers: {
        Authorization: `Bearer ${getToken()}`
    },
    data
});

export const getAllUser = (params) => axios({
    url: 'user',
    method: 'get',
    headers: {
        Authorization: `Bearer ${getToken()}`
    },
    params
});