import React, { useEffect, useState } from 'react'
import { getSingleCourse } from '../../apis/course';
import { useParams } from 'react-router-dom';
import { renderStar } from '../../utils/fn';
import moment from 'moment';
import icons from '../../utils/icons';
import { Price, Rating } from '../../components';

function Course() {
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);

    const fetchCourse = async () => {
        const respone = await getSingleCourse(courseId);
        if (respone.status === 200) {
            setCourse(respone.data.course)
        }
    };

    useEffect(() => {
        fetchCourse();
    }, [courseId]);

    return (
        <>
            <div className='w-full h-fit flex justify-center bg-main-black py-10'>
                <div className='w-[75%] flex flex-col-reverse lg:flex-row gap-5 relative'>
                    <div className='lg:w-[70%]'>
                        <h1 className='font-extrabold text-[30px] leading-10 text-[#FFFFFF] mb-3'>{course?.title}</h1>
                        <p className='text-[18px] leading-7 text-[#FFFFFF] pb-4'>{course?.subtitle}</p>
                        <div className='flex items-center gap-2 text-[15px] pb-2'>
                            <span className='font-bold text-[#f69c08]'>{course?.averangeRating.toFixed(1)}</span>
                            <div className='flex gap-0.5'>
                                {renderStar(course?.averangeRating)}
                            </div>
                            <span className='text-sub-purple underline'>({course?.numberOfReviews.toLocaleString()} rating)</span>
                            <span className='text-[#FFFFFF]'>{course?.numberOfViews.toLocaleString()} views</span>
                        </div>
                        <p
                            className='pb-2 text-[#FFFFFF] text-[14px]'>
                            Created by
                            <span className='text-sub-purple underline px-1 cursor-pointer'
                            >
                                {course?.owner?.fullname}
                            </span>
                            at {moment(course?.createdAt).format('DD/MM/YYYY')}
                        </p>
                        <div>
                            <span className='text-[14px] text-[#FFFFFF] flex items-center gap-1.5'><span><icons.FaClockRotateLeft /></span> Last updated {moment(course?.updatedAt).format('MM/YYYY')}</span>
                        </div>
                    </div>
                    <div className='lg:w-[30%] xl:absolute right-0'>
                        <Price course={course} />
                    </div>
                </div>
            </div>
            <div className='bg-white flex justify-center'>
                <div className='xl:w-[75%] px-5 xl:px-0 py-10'>
                    {/* phan ban se hoc */}
                    <div className='border border-[#888] shadow-sm xl:w-[65%] px-8 py-5 mb-8'>
                        <h1 className='font-bold text-[24px] mb-5'>What you'll learn</h1>
                        <ul className='grid grid-cols-2 gap-3 text-[14px]'>
                            {course?.target.map((el, index) => (
                                <li key={index} className='flex items-center gap-3'><span><icons.FaCheck /></span> <span>{el}</span></li>
                            ))}
                        </ul>
                    </div>
                    {/* Phan cong ty */}
                    <div className='border border-[#888] shadow-sm xl:w-[65%] px-8 py-5'>
                        <h1 className='font-bold text-[16px] mb-2'>Top companies offer this course to their employees</h1>
                        <p className='text-[13.5px] text-gray-500'>
                            This course was selected for our collection of top-rated courses trusted by businesses worldwide. <a className='text-main-purple underline'>Learn more</a>
                        </p>
                    </div>
                    {/* Phan mo ta */}
                    <div className='xl:w-[65%] pt-8'>
                        <h1 className='font-bold text-[24px] mb-5'>Description</h1>
                        <p className='leading-7 text-[14px]'>
                            {course?.desc}
                        </p>
                    </div>
                    {/* Phan comment */}
                    <div className='xl:w-[65%] pt-8'>
                        <h1 className='font-extrabold text-[22px] mb-5 flex items-center gap-3'><span><icons.IoStar color='orange' /></span> <span>{course?.averangeRating.toFixed(1)} course rating,{course?.numberOfReviews} ratings</span></h1>
                        <div className='grid grid-cols-2 gap-5 py-5'>
                            {course?.reviews.map((review) => (
                                <Rating ratingData={review} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course