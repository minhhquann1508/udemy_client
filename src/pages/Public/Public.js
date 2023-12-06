import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../../components'

function Public() {

    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
            <div className='bg-[#1c1d1f] w-full flex justify-center pt-10 pb-5'>
                <Footer />
            </div>
        </div>
    )
}

export default Public