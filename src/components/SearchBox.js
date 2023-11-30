import React from 'react'
import icons from '../utils/icons'

function SearchBox() {
    return (
        <form className='w-full rounded-full border border-main-black pl-[50px] pr-[5px] py-3 relative'>
            <button className='absolute w-[20px] h-[20px] top-[10px] left-[12px]'>
                <icons.IoSearchSharp size={22} color='#888' />
            </button>
            <input type="text" className='w-full focus:outline-none' placeholder='Search for course' />
        </form>
    )
}

export default SearchBox