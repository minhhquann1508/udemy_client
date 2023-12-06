import axios from '../axios';
import { store } from '../store/store';

const getToken = () => {
    const state = store.getState();
    return state.authReducer.accessToken || JSON.parse(localStorage.getItem('accessToken'));
};

export const getAllCourseApi = (params) => axios({
    url: '/course',
    method: 'get',
    params
});

export const getSingleCourse = (params) => axios({
    url: `/course/${params}`,
    method: 'get',
});

export const getTeacherCourse = (params) => axios({
    url: `/course`,
    method: 'get',
    params
});

export const deleteCourse = (courseId) => axios({
    url: `/course/${courseId}`,
    method: 'delete',
    headers: {
        Authorization: `Bearer ${getToken()}`
    },
}); 