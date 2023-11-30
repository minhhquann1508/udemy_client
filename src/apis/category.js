import axios from '../axios';

export const getCourseCategories = (params) => axios({
    url: '/category',
    method: 'get',
    params
});