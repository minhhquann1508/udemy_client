import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import { registerApi } from '../../apis/auth';
import Swal from "sweetalert2";
import { registerSchema } from '../../utils/validation'

function Register() {
    const navigate = useNavigate();

    const sendDataToRegister = async (data, formik) => {
        const response = await registerApi(data);
        if (response.status !== 201) {
            await Swal.fire({
                title: "Oops",
                text: response.response.data.msg,
                icon: "error",
                confirmButtonColor: '#5624d0',
            });
        } else {
            await Swal.fire({
                title: "Chúc mừng",
                text: response.data.msg,
                icon: "success",
                confirmButtonColor: '#5624d0',
            });
            await formik.resetForm({ fullname: '', email: '', phone: '', password: '' });
            await navigate('/login');
        }
    }

    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            phone: '',
            password: ''
        },
        validationSchema: registerSchema,
        onSubmit: async (value) => {
            await sendDataToRegister(value, formik);
        }
    });

    return (
        <div className='w-full flex justify-center py-10 md:py-20'>
            <div className='w-full px-5 sm:w-[50%] lg:w-[30%]'>
                <h3 className='font-extrabold text-[16px] pb-5'>Sign up and start learning</h3>
                <form onSubmit={formik.handleSubmit} className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold text-[14px]'>Full name</label>
                        <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name='fullname'
                            placeholder='Herry Larsson'
                            className='text-[15px] px-3 focus:outline-main-purple border border-[#000] py-4'
                            type="text" />
                        <p className={`${(formik.errors && formik.touched.fullname) ? 'block text-red-500 text-[13px]' : 'hidden'}`}>{formik.errors.fullname}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold text-[14px]'>Email</label>
                        <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name='email'
                            placeholder='youremail@gmail.com'
                            className='text-[15px] px-3 focus:outline-main-purple border border-[#000] py-4'
                            type="text"
                        />
                        <p className={`${(formik.errors && formik.touched.email) ? 'block text-red-500 text-[13px]' : 'hidden'}`}>{formik.errors.email}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold text-[14px]'>Phone number</label>
                        <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name='phone'
                            placeholder='+84 123 456 789'
                            className='text-[15px] px-3 focus:outline-main-purple border border-[#000] py-4'
                            type="text"
                        />
                        <p className={`${(formik.errors && formik.touched.phone) ? 'block text-red-500 text-[13px]' : 'hidden'}`}>{formik.errors.phone}</p>
                    </div>
                    <div className='flex flex-col gap-2 pb-2'>
                        <label className='font-semibold text-[14px]'>Password</label>
                        <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name='password'
                            placeholder='Enter your password'
                            className='text-[15px] px-3 focus:outline-main-purple border border-[#000] py-4'
                            type="password" />
                        <p className={`${(formik.errors && formik.touched.password) ? 'block text-red-500 text-[13px]' : 'hidden'}`}>{formik.errors.password}</p>
                    </div>
                    <button type='submit' className={`
                    font-bold hover:scale-105 duration-200 
                    border bg-[#8710d8] border-[#8710d8] text-[#FFFFFF] p-[16px] text-[16px]
                    `}
                    >
                        Sign up
                    </button>
                </form>
                <p className='text-[12px] text-center py-3 text-main-black'>By signing up, you agree to our <span className='underline'>Terms of Use</span> and <span className='underline'>Privacy Policy</span>.</p>
                <div className='w-full h-[0.5px] bg-[#ccc]'></div>
                <p className='text-center text-[13.5px] pt-5'>Already have an account? <NavLink to={'/login'} className='underline font-extrabold text-main-purple hover:text-[#401b9c]'>Log in</NavLink></p>
            </div>
        </div>
    )
}

export default Register