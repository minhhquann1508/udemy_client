import React from 'react'
import ReactPlayer from 'react-player'
import notFoundCourse from '../assets/not-found-course.jpg';
import icons from '../utils/icons';

function Price({ course }) {
    return (
        <div className='w-full border border-[#FFFFFF] shadow-md shadow-[#ccc]'>
            <div>
                <img className='w-full object-contain' src={course?.thumbnail || notFoundCourse} alt="course" />
            </div>
            <div className='w-full bg-[#FFFFFF] p-5'>
                <h1 className='font-bold text-[28px] pb-3'>{course?.price.toLocaleString()}đ</h1>
                <div className='flex flex-col items-center gap-3 pb-4'>
                    <button className='w-full p-3 bg-[#a435f0] border border-[#a435f0] 
                    text-[#FFFFFF] font-bold text-[15px] hover:bg-main-purple'
                    >
                        Add to cart
                    </button>
                    <button className='w-full p-3 bg-[#FFFFFF] border border-main-black
                    text-main-black font-bold text-[15px] hover:bg-[#ccc]'
                    >
                        Buy now
                    </button>
                    <p className='text-[11px] text-main-black'>30-Day Money-Back Guarantee</p>
                </div>
                <h6 className='font-bold text-[14px]'>This course includes:</h6>
                <ul className='text-[14px] flex flex-col gap-2'>
                    <li className='flex items-center gap-2'>
                        <span className='inline-block'><icons.FaVideo /></span>
                        <span>{course?.numberOfVideo} videos</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='inline-block'><icons.IoMdDownload /></span>
                        <span>
                            {course?.numberOfResouse} downloadable resource
                        </span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='inline-block'><icons.FaRegNoteSticky /></span>
                        <span>
                            {course?.articles} articles
                        </span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='inline-block'><icons.CiFileOn /></span>
                        <span>
                            Already have assignments
                        </span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='inline-block'><icons.FaMobileAlt /></span>
                        <span>
                            Access on mobile and TV
                        </span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='inline-block'><icons.GrAchievement /></span>
                        <span>
                            Certificate of completion
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Price