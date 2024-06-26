import React, {useState} from 'react'
import BookingData from './bookingData'
import BookingCard from './BookingCard'
import { Link } from 'react-router-dom';

function MyBooking() {

  // const [isAdd, setIsAdd] = useState(false);
  
  return (
    <div className='
          lg:max-w-[1000px] sm:max-w-[700px]  w-full md:px-[40px] py-[40px] mx-auto
          md:grid lg:grid-cols-3 md:grid-cols-2 gap-y-4
          flex justify-center items-center flex-col
    '>
      {/* add button */}
      <div className="col-span-full">
       <Link to={'addBookingForm'}>
          <button className='bg-primary-color px-[30px] py-2 text-white font-bold rounded flex justify-center items-center '><span>ADD</span><i className="bi bi-plus text-[18px]"></i> </button>
       </Link>
      </div>
      {
        BookingData.map((item,i)=>{
          return <BookingCard data={item} key={i} />
        })
      }
    </div>
  )
}


export default MyBooking