import React, { memo } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { loginUserAction } from '../../store/actions/auth'
import { loginSchema } from '../../utils/validation';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: (value) => {
            dispatch(loginUserAction({ data: value, navigate, formik }));
        }
    });

    return (
        <div className='w-full flex justify-center py-10 md:py-20'>
            <div className='w-full px-5 sm:w-[50%] lg:w-[30%]'>
                <h3 className='font-extrabold text-[16px] pb-5'>Login to your Udemy account</h3>
                <form onSubmit={formik.handleSubmit} className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold text-[14px]'>Email</label>
                        <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name='email'
                            placeholder='Enter your email'
                            className='text-[15px] px-3 focus:outline-main-purple border border-[#000] py-4'
                            type="text"
                        />
                        <p className={`${(formik.errors && formik.touched.email) ? 'block text-red-500 text-[13px]' : 'hidden'}`}>{formik.errors.email}</p>
                    </div>
                    <div className='flex flex-col gap-2 pb-2'>
                        <label className='font-semibold text-[14px]'>Password</label>
                        <input
                            placeholder='Enter your password'
                            className='text-[15px] px-3 focus:outline-main-purple border border-[#000] py-4'
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name='password'
                        />
                        <p className={`${(formik.errors && formik.touched.password) ? 'block text-red-500 text-[13px]' : 'hidden'}`}>{formik.errors.password}</p>
                    </div>
                    <button type='submit' className={`
                    font-bold hover:scale-105 duration-200 
                    border bg-[#8710d8] border-[#8710d8] text-[#FFFFFF] p-[16px] text-[16px]`
                    }
                    >
                        Login
                    </button>
                </form>
                <p className='text-[15px] text-center py-3 text-main-black'>or <NavLink className='text-[16px] font-extrabold text-main-purple underline hover:text-[#401b9c]'>Forgot Password</NavLink></p>
                <div className='w-full h-[0.5px] bg-[#ccc]'></div>
                <p className='text-center text-[13.5px] pt-5'>Don't have an account? <NavLink to={'/register'} className='underline font-extrabold text-main-purple hover:text-[#401b9c]'>Sign up</NavLink></p>
            </div>
        </div>
    )
}

export default memo(Login)