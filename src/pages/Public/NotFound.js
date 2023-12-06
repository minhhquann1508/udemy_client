import React from 'react'
import notFoundImage from '../../assets/not_found_page1.jpg'
import { NavLink } from 'react-router-dom'

function NotFound() {
    return (
        <div className='py-20 mx-5'>
            <div className='w-full flex justify-center'>
                <img src={notFoundImage} alt="img" />
            </div>
            <h1 className='text-center font-bold text-[24px] mb-3'>Can't find the page you're looking for</h1>
            <p className='text-center text-[17px]'>Visit our <NavLink className='text-main-purple underline'>support page</NavLink> for further assistance.</p>
        </div>
    )
}

export default NotFound