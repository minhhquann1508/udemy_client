import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getAllCourseApi } from '../../apis/course'
import notFoundCourse from '../../assets/not-found-course.jpg'
import { renderStar } from '../../utils/fn'
import { Pagination } from 'antd';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Courses() {
    const { categoryId } = useParams();
    const navigate = useNavigate();
    const [courses, setCourses] = useState(null);
    const [pagination, setPagination] = useState({ currentPage: 1, itemPerPage: 20 });

    const fetchCourse = async (data) => {
        const response = await getAllCourseApi(data);
        if (response.status === 200) {
            setCourses(response.data.courses);
            setPagination({
                total: response.data.total,
                currentPage: response.data.currentPage,
                itemPerPage: response.data.itemPerPage
            });
        }
    }

    useEffect(() => {
        fetchCourse({ category: categoryId });
    }, [categoryId]);

    const renderCourse = () => {
        if (!courses) {
            return new Array(10).fill(null).map((el, index) => (
                new Array(5).fill(null).map((el, i) => (
                    <div key={i}>
                        <Skeleton className='h-[200px] mb-3' />
                        {new Array(5).fill(null).map((el, index) => (
                            <Skeleton key={index} />
                        ))}
                    </div>
                ))
            ))
        } else {
            return courses?.map((course) => (
                <div key={course?.id} onClick={() => navigate(`/course/${course?.id}`)} className='flex cursor-pointer group gap-5 pb-5 border-b'>
                    <div>
                        <img className='w-[250px] object-contain border' src={course?.thumbnail || notFoundCourse} alt="thumbnail" />
                    </div>
                    <div className='flex-auto'>
                        <div className='flex flex-col gap-2 md:flex-row justify-between font-bold mb-2'>
                            <h4 className='group-hover:text-main-purple group-hover:underline line-clamp-1 md:line-clamp-none'>{course?.title}</h4>
                            <span>{course?.price.toLocaleString()}đ</span>
                        </div>
                        <p className='text-[13px] text-gray-600 mb-2'>{course?.owner.fullname}</p>
                        <div className='flex items-center text-[13px] gap-2 mb-2'>
                            <span className='font-bold text-[14px]'>{course?.averangeRating.toFixed(1)}</span>
                            <div className='flex gap-0.5'>
                                {renderStar(course?.averangeRating)}
                            </div>
                            <span className='text-gray-600'>({course?.numberOfReviews.toLocaleString()})</span>
                        </div>
                        <span className='font-bold text-[12px] bg-yellow-200 py-1 px-2.5'>Bestseller</span>
                    </div>
                </div>
            ))
        }
    }

    const handleSortEvent = (e) => {
        const { value } = e.target;
        fetchCourse({ category: categoryId, sort: value });
    }

    return (
        <div className='flex justify-center py-10'>
            <div className='w-full px-5 xl:p-0 xl:w-main'>
                <h1 className='text-[24px] font-bold mb-3'>All {courses?.[0]?.category?.title} courses</h1>
                <div className='flex justify-between md:justify-normal gap-5 border border-main-black px-3 py-5 items-center'>
                    <div>
                        <button className='bg-main-black font-bold text-white w-8 h-8 rounded-full'>!</button>
                    </div>
                    <p className='flex-auto font-bold text-[15px]'>Not sure? All courses have a 30-day money-back guarantee</p>
                </div>
                <div className='flex justify-between py-5 items-center'>
                    <div className='border border-main-black pt-3 p-1.5 relative'>
                        <label className='absolute text-[11px] font-bold top-[3px] left-[16px]'>Sort by</label>
                        <select onChange={handleSortEvent} className='w-[150px] pt-2 outline-none text-[15px]'>
                            <option value='-numberOfViews'>Most popular</option>
                            <option value='-averangeRating'>Highest rated</option>
                            <option value='-createdAt'>Newest</option>
                        </select>
                    </div>
                    <span className='font-bold text-gray-600'>10,000 result</span>
                </div>
                <div className='flex flex-col gap-5 mt-5'>
                    {renderCourse()}
                </div>
                <div className='flex justify-center mt-8'>
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </div>
        </div>
    )
}

export default Courses