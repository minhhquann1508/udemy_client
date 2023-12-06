import { createSlice } from "@reduxjs/toolkit";
import { getTeacherCoursesAction } from '../actions/courses';

const teacherSlide = createSlice({
    name: 'app/teacher-courses',
    initialState: {
        courses: null,
        isLoading: false,
        errorMessage: null
    },
    extraReducers: (builder) => {
        builder.addCase(getTeacherCoursesAction.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(getTeacherCoursesAction.fulfilled, (state, action) => {
            state.courses = action.payload.data;
            state.isLoading = false;
        });

        builder.addCase(getTeacherCoursesAction.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload.response?.data.msg;
        });
    },
});

export default teacherSlide.reducer;
