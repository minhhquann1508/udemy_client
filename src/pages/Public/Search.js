import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getAllCourseApi } from '../../apis/course'
import { renderStar } from '../../utils/fn'
import notFoundCourse from '../../assets/not-found-course.jpg'
import { Pagination } from 'antd'

function Search() {
    const { keyword } = useParams();
    const navigate = useNavigate();
    const [result, setResult] = useState(null);

    const fetchResult = async (params) => {
        const response = await getAllCourseApi(params);
        if (response.status === 200) {
            setResult(response.data.courses);
        }
    };

    useEffect(() => {
        fetchResult({ title: keyword });
    }, [keyword]);

    const handleSortEvent = (e) => {
        const { value } = e.target;
        fetchResult({ title: keyword, sort: value });
    }


    return (
        <div className='py-10 flex justify-center'>
            <div className='w-full px-5 lg:px-0 lg:w-main'>
                <h1 className='font-bold text-[28px] mb-5'>Result of {keyword}</h1>
                <div className='border border-main-black pt-3 p-1.5 relative w-[165px]'>
                    <label className='absolute text-[11px] font-bold top-[3px] left-[16px]'>Sort by</label>
                    <select onChange={handleSortEvent} className='w-[150px] pt-2 outline-none text-[15px]'>
                        <option value='-numberOfViews'>Most popular</option>
                        <option value='-averangeRating'>Highest rated</option>
                        <option value='-createdAt'>Newest</option>
                    </select>
                </div>
                <div className='flex flex-col gap-5 pt-5'>
                    {result?.map((course) => (
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
                    ))}
                </div>
                <div className='flex justify-center mt-8'>
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </div>
        </div>
    )
}

export default Search