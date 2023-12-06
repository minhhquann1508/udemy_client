import React, { memo, useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { getListReviews } from '../apis/review';
import { ReviewItem } from '../components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function ListReview() {
    const [lstReview, setLstReview] = useState(null);

    const fetchListReview = async () => {
        const response = await getListReviews({});
        if (response.status === 200) {
            setLstReview(response.data.review);
        } else {
            setLstReview(null);
        }
    }

    useEffect(() => {
        fetchListReview();
    }, []);

    const renderListReview = () => {
        if (lstReview) {
            return lstReview.map((review) => (
                <SwiperSlide key={review._id}>
                    <ReviewItem reviewData={review} />
                </SwiperSlide>
            ))
        } else {
            return new Array(5).fill(null).map((el, i) => (
                <SwiperSlide key={i}>
                    <Skeleton className='h-[200px] mb-3' />
                    {new Array(5).fill(null).map((el, index) => (
                        <Skeleton key={index} />
                    ))}
                </SwiperSlide>
            ))
        }
    }

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={3}
            spaceBetween={25}
            slidesPerGroup={2}
            navigation
            breakpoints={{
                0: {
                    slidesPerView: 1
                },
                900: {
                    slidesPerView: 2
                },
                1240: {
                    slidesPerView: 3
                }
            }}
        >
            {renderListReview()}
        </Swiper>
    )
}

export default memo(ListReview)