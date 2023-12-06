import React from 'react'
import icons from '../utils/icons'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';

function SearchBox() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            keyword: ''
        },
        onSubmit: (value) => {
            navigate(`/search/${value.keyword}`)
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className='w-full rounded-full border border-main-black pl-[50px] pr-[5px] py-3 relative'>
            <button type='submit' className='absolute w-[20px] h-[20px] top-[10px] left-[12px]'>
                <icons.IoSearchSharp size={22} color='#888' />
            </button>
            <input type="text" onChange={formik.handleChange} name='keyword' className='w-full focus:outline-none' placeholder='Search for course' />
        </form>
    )
}

export default SearchBox