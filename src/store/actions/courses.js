import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCourseApi, getTeacherCourse } from '../../apis/course';

export const getCourseCategoriesAction = createAsyncThunk('app/courses', async (data, { rejectWithValue }) => {
    const response = await getAllCourseApi();
    if (response.status !== 200) return rejectWithValue(response);
    return response;
});

export const getTeacherCoursesAction = createAsyncThunk('app/teacher-courses', async (data, { rejectWithValue }) => {
    const response = await getTeacherCourse(data);
    if (response.status !== 200) return rejectWithValue(response);
    return response;
});