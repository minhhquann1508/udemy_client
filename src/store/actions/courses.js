import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCourseApi } from '../../apis/course';

export const getCourseCategoriesAction = createAsyncThunk('app/courses', async (data, { rejectWithValue }) => {
    const response = await getAllCourseApi();
    if (response.status !== 200) return rejectWithValue(response);
    return response;
});
