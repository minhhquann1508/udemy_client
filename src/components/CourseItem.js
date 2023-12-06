import React, { useState } from 'react'
import notFoundCourse from '../assets/not-found-course.jpg'
import { renderStar } from '../utils/fn';
import moment from 'moment';
import { Button } from '../components'
import { useNavigate } from 'react-router-dom';

function CourseItem({ courseData }) {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            onMouseEnter={(e) => {
                setIsActive(true);
            }}
            className='cursor-pointer relative min-h-[322px]'
        >
            {/* Phần chi tiết */}
            <div
                onMouseLeave={(e) => {
                    setIsActive(false);
                    e.stopPropagation();
                }}
                style={{ zIndex: 999 }}
                className={`${isActive ? '' : 'hidden'} animate-slide-top
                absolute bg-[#ffffff] flex flex-col gap-2 w-full h-full border shadow-md p-5`
                }
            >
                <h3 className='font-bold line-clamp-2 lg:line-clamp-3'>{courseData?.title}</h3>
                <div className='text-[13px] flex gap-2 items-center'>
                    <span
                        className={`bg-[#eceb98] font-semibold text-[12px] py-1 px-2 ${courseData?.numberOfViews > 100000 ? '' : 'hidden'}`}
                    >
                        Bestseller
                    </span>
                    <span className='text-[12px]'>Updated {moment(courseData?.updatedAt).format('DD/MM/YYYY')}</span>
                </div>
                <div className='flex gap-2 text-[12px] font-light'>
                    <span>All levels</span>
                    <span>Subtitle</span>
                </div>
                <p className='text-[13px] mb-2 line-clamp-3 lg:line-clamp-4'>{courseData?.desc}</p>
                <div className='w-full flex justify-center flex-col lg:flex-row gap-3'>
                    <Button
                        textColor={'#ffffff'}
                        content={'Add to cart'}
                        backgroundColor={'#5624d0'}
                        borderColor={'#5624d0'}
                    />
                    <Button
                        textColor={'#5624d0'}
                        content={'Detail'}
                        backgroundColor={'#ffffff'}
                        borderColor={'#5624d0'}
                        url={`course/${courseData._id}`}
                    />
                </div>
            </div>
            {/* Phần thumbnail */}
            <div className='border mb-2'>
                <img className='w-full h-[150px] object-cover' src={courseData?.thumbnail || notFoundCourse} alt={courseData?.title} />
            </div>
            {/* Phần thông tin cơ bản khóa học */}
            <div>
                <h6 title={courseData?.title} className='mb-1 line-clamp-1 font-bold text-[15.5px]'>{courseData?.title}</h6>
                <p className='text-[13px] font-light mb-1'>{courseData?.owner?.fullname}</p>
                <div className='flex text-[14px] mb-1 items-center'>
                    <span className='font-bold'>{courseData?.averangeRating.toFixed(1)}</span>
                    <div className='flex px-1 gap-[1.5px]'>
                        {renderStar(courseData?.averangeRating)}
                    </div>
                    <span className='font-light text-[12.5px]'>({courseData?.numberOfViews.toLocaleString()})</span>
                </div>
                <p className='font-bold text-[15px] mb-2'>{courseData?.price.toLocaleString()}đ</p>
                <span
                    className={`bg-[#eceb98] font-semibold text-[12px] py-1 px-2 ${courseData?.numberOfViews > 100000 ? '' : 'hidden'}`}
                >
                    Bestseller
                </span>
            </div>
        </div>
    )
}

export default CourseItem