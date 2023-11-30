import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCourseCategories } from '../../apis/category';

export const getCourseCategoriesAction = createAsyncThunk('app/course-categories', async (data, { rejectWithValue }) => {
    const response = await getCourseCategories();
    if (response.status !== 200) return rejectWithValue(response);
    return response;
});
