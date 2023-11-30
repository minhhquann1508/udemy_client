import React, { memo } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import banner1 from '../assets/banner_udemy1.jpg';
import banner2 from '../assets/banner_udemy2.jpg';
import { Button } from '../components'

function Carousel() {
    return (
        <Swiper
            className='shadow-md'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
        >
            <SwiperSlide className=''>
                <div className='relative w-full'>
                    <div className='hidden lg:flex shadow-md flex-col gap-5 absolute p-[20px] top-[100px] left-[100px] bg-[#FFFFFF]'>
                        <h1 className='font-bold text-[23px]'>
                            Learn about artificial intelligence
                        </h1>
                        <p className='text-[15px] leading-6'>
                            Ready to learn about artificial intelligence at Udemy ?
                            <br />
                            We always have the best courses with reasonable prices
                        </p>
                        <div>
                            <Button
                                borderColor={'#000'}
                                content={'Learn now'}
                                textColor={'#FFFFFF'}
                                backgroundColor={'#2d2f31'}
                                url={'account/login'}
                            />
                        </div>
                    </div>
                    <img src={banner1} className='' alt="banner1" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <div className='hidden lg:flex shadow-md flex-col gap-5 absolute p-[20px] top-[100px] left-[100px] bg-[#FFFFFF]'>
                        <h1 className='font-bold text-[23px]'>
                            Learn about artificial intelligence
                        </h1>
                        <p className='text-[15px] leading-6'>
                            Ready to learn about artificial intelligence at Udemy ?
                            <br />
                            We always have the best courses with reasonable prices
                        </p>
                        <div>
                            <Button
                                borderColor={'#000'}
                                content={'Learn now'}
                                textColor={'#FFFFFF'}
                                backgroundColor={'#2d2f31'}
                                url={'account/login'}
                            />
                        </div>
                    </div>
                    <img src={banner2} className='' alt="banner2" />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default memo(Carousel)