import React, { memo } from 'react'
import icons from '../utils/icons'
import userImg from '../assets/user.png'
import quote from '../assets/quote1.svg'

function ReviewItem({ reviewData }) {
    return (
        <div className='flex flex-col justify-between bg-[#ffffff] p-5 w-full shadow-md border border-[#ccc] min-h-[300px]'>
            <div className='pb-5'>
                <img src={quote} alt="quote" className='w-5 h-5' />
            </div>
            <p className='pb-5 line-clamp-4 leading-7 text-[15px]'>{reviewData?.comment}</p>
            <div>
                <div className='flex gap-3 items-center pb-2'>
                    <img src={reviewData?.postedBy.avatar || userImg} className='rounded-full w-6 h-6' alt="avatar" />
                    <span className='font-semibold text-[14px]'>{reviewData?.postedBy.fullname}</span>
                </div>
                <div className='w-full h-[0.5px] bg-[#ccc]'></div>
                <div className='flex gap-5 items-center text-main-purple pt-2 group cursor-pointer hover:text-[#401b9c]'>
                    <span><icons.FaPlayCircle size={20} /></span>
                    <span className='font-bold'>{reviewData?.course?.title}</span>
                </div>
            </div>
        </div>
    )
}

export default memo(ReviewItem)