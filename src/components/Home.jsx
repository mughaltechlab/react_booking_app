import React from 'react'
import Header from './Header'
import MyBooking from './MyBooking'
import MySchedule from './MySchedule'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Footer from './Footer'


function Home() {

    const router = createBrowserRouter([
        {
            path: '/',
            element:<> <MyBooking /> </>
        },
        {
            path: '/schedule',
            element:<MySchedule />
        }
    ])
    
  return (
    <div className="
        w-full min-h-dvh bg-[#f2f2f2]
        flex flex-col
    ">
        {/* header */}
        <Header />
        {/* main */}
        <div className="flex-grow">
            <RouterProvider router={router} />
        </div>
        {/* footer */}
        <Footer />
    </div>
  )
}

export default Home