import React from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'


function Layout() {

    
  return (

    // <div className="
    //     w-full min-h-dvh bg-[#f2f2f2]
    //     flex flex-col
    // ">
    //     <Header />
    // </div>
    
    <div className="
        w-full min-h-dvh bg-[#f2f2f2]
        flex flex-col
    ">
        {/* header */}
        <Header />
        {/* main */}
        <div className='flex-grow'>
          <Outlet />
        </div>
        {/* footer */}
        <Footer />
    </div>
  )
}

export default Layout