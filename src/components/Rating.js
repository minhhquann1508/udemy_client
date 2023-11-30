import React from 'react'
import { renderStar } from '../utils/fn'
import notFoundUserImg from '../assets/notfound_user.jpg';
import moment from 'moment';
import { useNavigate } from 'react-router-dom'

function Rating({ ratingData }) {
    const navigate = useNavigate();

    return (
        <div className='border-t-2'>
            <div className='flex gap-5 items-center pt-5'>
                <div>
                    <img className='rounded-full w-8 h-8' src={ratingData?.avatar || notFoundUserImg} alt="avatar" />
                </div>
                <div className='text-[14px]'>
                    <h6 onClick={() => navigate(`/user/${ratingData?.postedBy?._id}`)}
                        className='font-bold mb-1 text-[14.5px] cursor-pointer underline hover:text-main-purple'>{ratingData?.postedBy.fullname}</h6>
                    <div className='flex gap-1 items-center'>
                        {renderStar(ratingData?.rating)}
                        <span className='pl-5 font-bold text-gray-500 text-[12.5px]'>{moment(ratingData?.createdAt).format('hh:mm DD/MM')}</span>
                    </div>
                </div>
            </div>
            <p className='text-[14px] leading-6 p-2'>{ratingData?.comment}</p>
        </div>
    )
}

export default Rating