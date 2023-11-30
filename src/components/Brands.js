import React from 'react'
import { brands } from '../assets/brands';

function Brands() {
    const renderBrand = () => {
        let html = [];
        for (const brand in brands) {
            html.push(<img key={brand} src={brands[brand]} alt={brands[brand]} />)
        }
        return html;
    }

    return (
        <div className='w-full bg-main-gray flex flex-col items-center py-12 px-5'>
            <h2 className='text-[16px] md:text-[17px] text-[#6a6f73] mb-8'>
                Trusted by over 15,000 companies and millions of learners around the world
            </h2>
            <div className='w-full xl:w-main flex flex-wrap gap-5 justify-center lg:justify-around'>
                {renderBrand()}
            </div>
        </div>
    )
}

export default Brands