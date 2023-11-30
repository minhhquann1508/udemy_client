import React from 'react'
import { Button } from '../components'
import logo from '../assets/udemy_logo1.svg'

function Footer() {
    return (
        <footer className='w-full px-5 xl:px-0 xl:w-main'>
            <div className='flex justify-between pb-8'>
                <div className='flex flex-col md:flex-row text-white text-[13px]'>
                    <ul className='flex flex-col gap-2 pr-16'>
                        <li className='hover:underline cursor-pointer'>Udemy Business</li>
                        <li className='hover:underline cursor-pointer'>Teach on Udemy</li>
                        <li className='hover:underline cursor-pointer'>Get the app</li>
                        <li className='hover:underline cursor-pointer'>About us</li>
                        <li className='hover:underline cursor-pointer'>Contact us</li>
                    </ul>
                    <ul className='flex flex-col gap-2 pr-16'>
                        <li className='hover:underline cursor-pointer'>Carees</li>
                        <li className='hover:underline cursor-pointer'>Blog</li>
                        <li className='hover:underline cursor-pointer'>Help and support</li>
                        <li className='hover:underline cursor-pointer'>Affiliate</li>
                        <li className='hover:underline cursor-pointer'>Investor</li>
                    </ul>
                    <ul className='flex flex-col gap-2 pr-16'>
                        <li className='hover:underline cursor-pointer'>Term</li>
                        <li className='hover:underline cursor-pointer'>Privacy policy</li>
                        <li className='hover:underline cursor-pointer'>Cookie setting</li>
                        <li className='hover:underline cursor-pointer'>Sitemap</li>
                        <li className='hover:underline cursor-pointer'>Accessibility statement</li>
                    </ul>
                </div>
                <div>
                    <Button
                        borderColor={'#FFFFFF'}
                        backgroundColor={'transparent'}
                        textColor={'#FFFFFF'}
                        content={'English'}
                    />
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <img src={logo} className='w-[100px]' alt="logo" />
                <span className='text-white text-[12px]'>© 2023 Udemy, Inc.</span>
            </div>
        </footer>
    )
}

export default Footer