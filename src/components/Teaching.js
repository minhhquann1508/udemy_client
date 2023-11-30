import React from 'react'
import teachingImg from '../assets/teaching_udemy1.jpg'
import { Button } from '../components'

function Teaching() {
    return (
        <div className='flex w-full flex-col gap-5 md:gap-0 md:flex-row lg:w-[70%] items-center'>
            <div className='flex-6'>
                <img src={teachingImg} alt="teaching" />
            </div>
            <div className='flex-4 flex flex-col items-center md:items-start'>
                <h1 className='font-bold text-[30px] mb-5'>Become an instructor</h1>
                <p className='text-[17px] leading-8 mb-3'>
                    Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.
                </p>
                <div>
                    <Button
                        backgroundColor={'#2d2f31'}
                        borderColor={'#2d2f31'}
                        textColor={'#FFFFFF'}
                        content={'Start teaching today'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Teaching