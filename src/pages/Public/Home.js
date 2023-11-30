import React from 'react';
import { Carousel, Brands, ListCourses, ListReview, Teaching } from '../../components'

function Home() {
    return (
        <>
            <div className='w-full flex justify-center'>
                <div className='w-full xl:w-main'>
                    <Carousel />
                </div>
            </div>
            <div className='w-full py-10'>
                <Brands />
            </div>
            <div className='w-full px-5 xl:px-0 flex flex-col items-center'>
                <div className='w-full xl:w-main py-10 md:py-20'>
                    <div>
                        <h1 className='text-[30px] font-semibold mb-3'>Most searched course at Udemy</h1>
                        <p className='text-[18px] pb-7'>
                            Searched by over 1,000 users at Udemy every week
                        </p>
                        <ListCourses sort={'-numberOfViews'} />
                    </div>
                </div>
            </div>
            <div className='w-full bg-main-gray py-10 md:py-20 flex justify-center'>
                <div className='w-full xl:w-main px-5 xl:p-0'>
                    <h1 className='text-[24px] font-semibold mb-5'>How learners like you are achieving their goals</h1>
                    <ListReview />
                </div>
            </div>
            <div className='w-full px-5 xl:px-0 flex flex-col items-center'>
                <div className='w-full xl:w-main py-10 md:py-20'>
                    <div className='mb-10'>
                        <h1 className='text-[24px] font-semibold mb-5'>The courses are highly rated</h1>
                        <ListCourses sort={'-averangeRating'} />
                    </div>
                    <div>
                        <h1 className='text-[24px] font-semibold mb-5'>Courses at reasonable prices</h1>
                        <ListCourses sort={'price'} />
                    </div>
                </div>
                <div className='flex justify-center py-10 md:py-20'>
                    <Teaching />
                </div>
            </div>
        </>
    )
}

export default Home