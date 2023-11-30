import { createSlice } from "@reduxjs/toolkit";
import { loginUserAction } from '../actions/auth';

const authSlice = createSlice({
    name: 'public/login',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')) || null,
        accessToken: JSON.parse(localStorage.getItem('accessToken')) || null,
        isLoading: false,
        msg: ''
    },
    extraReducers: (builder) => {
        builder.addCase(loginUserAction.pending, (state) => {
            state.isLoading = true;
            state.user = null;
            state.msg = '';
            state.accessToken = '';
        });

        builder.addCase(loginUserAction.fulfilled, (state, action) => {
            state.user = action.payload.data.user;
            state.msg = action.payload.data.msg;
            state.accessToken = action.payload.data.user.accessToken;
            state.isLoading = false;
        });

        builder.addCase(loginUserAction.rejected, (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.accessToken = '';
            state.msg = action.payload?.response?.data?.msg;
        });
    },
});

export default authSlice.reducer;
