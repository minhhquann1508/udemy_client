import React from 'react'
import aboutImg from '../../assets/about_img1.png'
import icons from '../../utils/icons'
import { brands } from '../../assets/brands'

function About() {

    const renderBrands = () => {
        const html = [];
        for (const key in brands) {
            html.push(<img key={key} src={brands[key]} />)
        }
        return html;
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='w-[80%] flex justify-between items-center py-5 flex-col-reverse gap-5 md:flex-row'>
                <h2 className='font-extrabold text-[28px] lg:text-[40px]'>We share <br /> knowledge with <br /> the world</h2>
                <div>
                    <img src={aboutImg} className='w-full object-contain' alt="" />
                </div>
            </div>
            <div className='w-full bg-sub-purple'>
                <h3 className='text-center py-4 text-white font-bold text-[17px]'>Check out our latest company news!</h3>
            </div>
            <div className='w-full justify-center'>
                <div className='w-main'>
                </div>
            </div>
            <div className='w-[80%] flex gap-5 py-14 flex-col md:flex-row'>
                <div className='flex-3 bg-sub-purple p-5 text-white'>
                    <h1 className='font-extrabold text-[21px] mb-5'>Work with us</h1>
                    <p className='leading-7 text-[17px] min-h-[250px]'>At Udemy, we're all learners and instructors. We live out our values every day to create a culture that is diverse, inclusive, and committed to helping employees thrive.</p>
                    <button className='font-bold flex items-center gap-3'><span>Join our team</span> <span><icons.FaAngleRight /></span></button>
                </div>
                <div className='flex-3 bg-[#dddb36] p-5'>
                    <h1 className='font-extrabold text-[21px] mb-5'>See our research</h1>
                    <p className='leading-7 text-[17px] min-h-[250px]'>
                        We're committed to improving lives through learning. Dig into our original research to learn about the forces that are shaping the modern workplace.
                    </p>
                    <button className='font-bold flex items-center gap-3'><span>Learn more</span> <span><icons.FaAngleRight /></span></button>
                </div>
                <div className='flex-3 bg-[#2d907f] p-5 text-white'>
                    <h1 className='font-extrabold text-[21px] mb-5'>Read our blog</h1>
                    <p className='leading-7 text-[17px] min-h-[250px]'>
                        Want to know what we've been up to lately? Check out the Udemy blog to get the scoop on the latest news, ideas and projects, and more.
                    </p>
                    <button className='font-bold flex items-center gap-3'><span>Read now</span> <span><icons.FaAngleRight /></span></button>
                </div>
            </div>
            <div className='flex w-full justify-center bg-gray-50 py-14'>
                <div className='w-[80%] flex flex-wrap justify-between gap-3'>
                    {renderBrands()}
                </div>
            </div>
        </div>
    )
}

export default About