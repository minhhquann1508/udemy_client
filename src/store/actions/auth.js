import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from '../../apis/auth';
import Swal from "sweetalert2";

export const loginUserAction = createAsyncThunk('public/login', async ({ data, navigate, formik }, { rejectWithValue }) => {
    const response = await loginApi(data);
    if (response.status !== 200) {
        Swal.fire({
            title: "Oops",
            text: response.response.data.msg,
            icon: "error",
            confirmButtonColor: '#5624d0',
        });
        return rejectWithValue(response);
    } else {
        const accessToken = response.data.user.accessToken;
        const user = response.data.user;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('accessToken', JSON.stringify(accessToken));
        await Swal.fire({
            title: "Thành công",
            text: response.data.msg,
            icon: "success",
            confirmButtonColor: '#5624d0',
        });
        await navigate('/');
        await formik.resetForm({ email: '', password: '' });
        return response;
    }
});

