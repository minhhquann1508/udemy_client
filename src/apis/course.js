import axios from '../axios';

export const getAllCourseApi = (params) => axios({
    url: '/course',
    method: 'get',
    params
});

export const getSingleCourse = (params) => axios({
    url: `/course/${params}`,
    method: 'get',
});