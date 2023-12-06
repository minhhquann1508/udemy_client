import React from 'react'
import notFoundCourseImg from '../assets/not-found-course.jpg';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

function TeacherCourse({ courseData }) {
    const { id, title, subtitle, createdAt, updatedAt, thumbnail } = courseData;
    const navigate = useNavigate();
    return (
        <div className='w-full flex border border-main-black group'>
            <div className='h-full'>
                <img src={thumbnail || notFoundCourseImg} className='w-[200px] object-contain' alt="thumbnail" />
            </div>
            <div onClick={() => navigate(`/teach/course/${id}`)} className='flex-auto group-[]:hover:bg-gray-100 cursor-pointer'>
                <div className='flex flex-col gap-3 p-2.5'>
                    <h4 className='font-bold text-[16.5px] text-main-black'>{title}</h4>
                    <p>{subtitle}</p>
                    <div className='flex gap-3 text-[14px] text-main-black'>
                        <span>Created at : {moment(createdAt).format('DD/MM/YYYY')}</span>
                        <span>Last update : {moment(updatedAt).format('MM/YYYY')}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherCourse