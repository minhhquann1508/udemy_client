import axios from '../axios'

export const getListReviews = (params) => axios({
    url: 'review',
    method: 'get',
    params
});

export const getListReviewsByCourse = (params) => axios({
    url: `review/course-review/${params}`,
    method: 'get',
});