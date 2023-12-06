import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import icons from '../utils/icons'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function NavBar({ isActive, setIsActive }) {
    const { categories, isLoading, errorMessage } = useSelector((state) => state.categoriesReducer);
    const { user } = useSelector((state) => state.authReducer);
    const navigate = useNavigate();

    const renderCategories = () => {
        if (categories) {
            return categories?.map((category) => (
                <li key={category._id}
                    onClick={() => navigate(`/courses/${category._id}`)}
                    className='flex justify-between items-center py-2 px-3 text-[13px] hover:text-main-purple cursor-pointer'
                >
                    <span>{category.title}</span>
                    <span>
                        <icons.FaAngleRight />
                    </span>
                </li>
            ))
        } else {
            return new Array(7).fill(null).map((el, index) => (
                <li key={index} className='px-3 py-2'>
                    <Skeleton key={index} />
                </li>
            ))
        }
    }

    return (
        <div className={`${isActive ? 'md:hidden' : 'hidden'} fixed z-[999] w-full h-screen`} style={{ background: 'rgba(0,0,0,0.7)' }}>
            <button onClick={() => setIsActive(!isActive)} className='absolute top-[10px] left-[260px] rounded-full hover:bg-gray-300 w-10 h-10 bg-gray-200 flex items-center justify-center'><span><icons.ImExit /></span></button>
            <div className='w-[250px] bg-white h-full opacity-100'>
                <div className={`${user ? '' : 'hidden'} bg-gray-100 p-5 flex items-center gap-2`}>
                    <button onClick={() => navigate(`/my-info/${user?.id}`)}
                        className={`border rounded-full h-full border-[#000] p-3 hover:scale-105 duration-200`}>
                        <icons.FaUserCircle size={20} />
                    </button>
                    <h3 className='font-bold line-clamp-1'>{user?.fullname}</h3>
                </div>
                <div className={`bg-gray-100 p-5 flex items-center gap-3`}>
                    <button onClick={() => navigate('/login')} className='py-2 px-3 font-bold text-[14px] bg-main-black border border-main-black text-white'>Login</button>
                    <button onClick={() => navigate('/register')} className='py-2 px-3 font-bold text-[14px] border border-main-black'>Sign up</button>
                </div>
                <ul>
                    <div className='py-2 border-b'>
                        <h5 className='px-3 font-bold text-[13.5px] mb-2 text-gray-500'>Optional</h5>
                        <li className='py-2 px-3 text-[13px] hover:text-main-purple cursor-pointer'>About</li>
                        <li className='py-2 px-3 text-[13px] hover:text-main-purple cursor-pointer'>Teach on Udemy</li>
                    </div>
                    <div className='py-2'>
                        <h5 className='px-3 font-bold text-[13.5px] mb-2 text-gray-500'>Categories</h5>
                        {renderCategories()}
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default NavBar