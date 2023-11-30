import React, { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import icons from '../utils/icons'

function Categories() {
    const [showNav, setShowNav] = useState(false);
    const { categories, isLoading, errorMessage } = useSelector((state) => state.categoriesReducer);

    const renderNav = () => {
        if (isLoading) {
            return <div>Loading...</div>
        } else {
            return categories?.map((category) => (
                <div key={category._id}
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