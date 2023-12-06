import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import icons from '../utils/icons'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useNavigate } from 'react-router-dom'

function Categories() {
    const [showNav, setShowNav] = useState(false);
    const { categories, isLoading, errorMessage } = useSelector((state) => state.categoriesReducer);
    const navigate = useNavigate();

    const renderNav = () => {
        if (isLoading || !categories) {
            return new Array(8).fill(null).map((el, index) => (
                <div className='p-2' key={index}>
                    <Skeleton />
                </div>
            ))
        } else {
            return categories?.map((category) => (
                <div key={category._id}
                    onClick={() => navigate(`/courses/${category._id}`)}
                    className='flex justify-between items-center py-2 px-3 text-[13px] hover:text-main-purple cursor-pointer'
                >
                    <span>{category.title}</span>
                    <span>
                        <icons.FaAngleRight />
                    </span>
                </div>
            ))
        }
    }

    return (
        <nav
            onMouseEnter={(e) => {
                setShowNav(true);
            }}
            className='relative group'
        >
            <button className='hover:text-main-purple'>Categories</button>
            <div
                onMouseLeave={(e) => {
                    setShowNav(false);
                }}
                className={`${showNav ? '' : 'hidden'} z-[99999] bg-[#FFFFFF] absolute border top-[50px] w-[250px] shadow-md`}
            >
                {renderNav()}
            </div>
        </nav>
    )
}

export default memo(Categories);