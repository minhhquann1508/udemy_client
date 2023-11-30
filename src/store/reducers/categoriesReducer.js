import { createSlice } from "@reduxjs/toolkit";
import { getCourseCategoriesAction } from '../actions/categories';

const productCategorySlice = createSlice({
    name: 'app/course-categories',
    initialState: {
        categories: null,
        isLoading: false,
        errorMessage: null
    },
    extraReducers: (builder) => {
        builder.addCase(getCourseCategoriesAction.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(getCourseCategoriesAction.fulfilled, (state, action) => {
            state.categories = action.payload.data.categories;
            state.isLoading = false;
        });

        builder.addCase(getCourseCategoriesAction.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload.response.data.msg;
        });
    },
});

export default productCategorySlice.reducer;
