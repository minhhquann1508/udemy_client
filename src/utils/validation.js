import * as Yup from 'yup';
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{3,50}$/
const phoneRegex = /^(0|\+84)([35789]\d{8}|70\d{7})$/;
const nameRegex = /^[a-zA-ZÀ-ỹ ]+$/
const facebookRegex = /^https:\/\/www\.facebook\.com\//
const twiterRegex = /^http:\/\/twitter\.com\//
const youtubeRegex = /^https:\/\/www\.youtube\.com\//
const linkdedinRegex = /^https:\/\/www\.linkedin\.com\//
const websiteRegex = /^https?:\/\//;

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

export const updateInfoUser = Yup.object().shape({
    fullname: Yup
        .string()
        .required('Tên người dùng không được bỏ trống')
        .matches(nameRegex, 'Tên người dùng không đúng định dạng')
    ,
    email: Yup
        .string()
        .email('Email không đúng định dạng').required('Email không được bỏ trống'),
    phone: Yup
        .string()
        .required('Số điện thoại không được bỏ trống')
        .matches(phoneRegex, 'Số điện thoại không đúng định dạng'),
    facebook: Yup
        .string()
        .matches(facebookRegex, 'Đường dẫn không đúng định dạng'),
    youtube: Yup
        .string()
        .matches(youtubeRegex, 'Đường dẫn không đúng định dạng'),
    twiter: Yup
        .string()
        .matches(twiterRegex, 'Đường dẫn không đúng định dạng'),
    website: Yup
        .string()
        .matches(websiteRegex, 'Đường dẫn không đúng định dạng'),
    linkdedin: Yup
        .string()
        .matches(linkdedinRegex, 'Đường dẫn không đúng định dạng')
})