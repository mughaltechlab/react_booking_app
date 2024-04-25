import React from 'react'
import BookingData from './bookingData'
import BookingCard from './elements/BookingCard'

function MyBooking() {
  return (
    <div className='
          lg:max-w-[1000px] sm:max-w-[700px]  w-full md:px-[40px] py-[40px] mx-auto
          md:grid lg:grid-cols-3 md:grid-cols-2 gap-y-4
          flex justify-center items-center flex-col
    '>
      {
        BookingData.map((item,i)=>{
          return <BookingCard data={item} key={i} />
        })
      }
    </div>
  )
}

export default MyBooking