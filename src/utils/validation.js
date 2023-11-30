import * as Yup from 'yup';
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{3,50}$/
const phoneRegex = /^(0|\+84)([35789]\d{8}|70\d{7})$/;
const nameRegex = /^[a-zA-ZÀ-ỹ ]+$/

export const loginSchema = Yup.object().shape({
    email: Yup
        .string()
        .email('Email không đúng định dạng').required('Email không được bỏ trống'),
    password: Yup
        .string()
        .required('Mật khẩu không được bỏ trống')
        .min(3, 'Mật khẩu quá ngắn')
        .max(50, 'Mật khẩu quá dài')
        .matches(passwordRegex, 'Mật khẩu từ 8 - 10 ký tự bao gồm chữ,số,chữ hoa,ký tự đặc biệt')
});

export const registerSchema = Yup.object().shape({
    fullname: Yup
        .string()
        .required('Tên người dùng không được bỏ trống')
        .matches(nameRegex, 'Tên người dùng không đúng định dạng')
    ,
    email: Yup
        .string()
        .email('Email không đúng định dạng').required('Email không được bỏ trống'),
    password: Yup
        .string()
        .required('Mật khẩu không được bỏ trống')
        .min(3, 'Mật khẩu quá ngắn')
        .max(50, 'Mật khẩu quá dài')
        .matches(passwordRegex, 'Mật khẩu từ 8 - 10 ký tự bao gồm chữ,số,chữ hoa,ký tự đặc biệt'),
    phone: Yup
        .string()
        .required('Số điện thoại không được bỏ trống')
        .matches(phoneRegex, 'Số điện thoại không đúng định dạng')
});