import React from 'react'
import logo from '../assets/logo_udemy1.svg';
import { Categories, SearchBox, Button } from './'
import { NavLink } from 'react-router-dom';
import icons from '../utils/icons'
import { useSelector } from 'react-redux';



function Header() {
    const { user } = useSelector((state) => state.authReducer)

    const checkLogin = () => {
        if (!localStorage.getItem('user') && !user) {
            return false
        } else {
            return true
        }
    }
    return (
        <header className='w-full shadow-md'>
            <div className='px-8 py-2.5 h-full flex justify-between md:justify-normal items-center text-[13px] text-main-black gap-4'>
                <button className='md:hidden'>
                    <icons.FaBars size={20} />
                </button>
                <NavLink to="/" className='block flex-0.5'>
                    <img src={logo} alt="logo" className='w-[90px]' />
                </NavLink>
                <div className='hidden md:block flex-0.5'>
                    <Categories />
                </div>
                <div className='hidden md:block flex-4'>
                    <SearchBox />
                </div>
                <NavLink to="/about" className='hidden lg:block flex-0.5 text-center hover:text-main-purple'>
                    About
                </NavLink>
                <NavLink to="/teach" className='hidden lg:block flex-0.5 text-center hover:text-main-purple'>
                    Teach on Udemy
                </NavLink>
                <button className='group flex-0.5'>
                    <icons.IoCart className='group-hover:scale-110 duration-200 group-hover:text-main-purple' size={28} />
                </button>
                <div className={`${checkLogin() ? 'hidden' : 'hidden md:block'}`} >
                    <Button
                        borderColor={'#000'}
                        content={'Login'}
                        backgroundColor={'#fff'}
                        textColor={'#2d2f31'}
                        url={'login'}
                    />
                </div>
                <div className={`${checkLogin() ? 'hidden' : 'hidden md:block'}`} >
                    <Button
                        borderColor={'#000'}
                        content={'Sign up'}
                        textColor={'#FFFFFF'}
                        backgroundColor={'#2d2f31'}
                        url={'register'}
                    />
                </div>
                <button className={`${checkLogin() ? 'hidden md:block' : 'hidden'} border py-2 h-full border-[#000] px-3 hover:scale-105 duration-200`}>
                    <icons.FaUserCircle size={20} />
                </button>
                <button className='hidden md:block border py-2 h-full border-[#000] px-3 hover:scale-105 duration-200'>
                    <icons.TbWorldCancel size={20} />
                </button>
            </div>
        </header>
    )
}

export default Header