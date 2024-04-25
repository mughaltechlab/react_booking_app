import React, {useState} from 'react'

function BookingCard({data}) {

    // toggle switch
    const [isToggle, setToggle] = useState(data.bookingOff)
    
  return (
    <div className='border-t-4 border-violet-500
        w-[290px] h-[340px] py-4
        bg-white shadow-lg rounded-md
        flex flex-col
    '>
        {/* title */ console.log(isToggle)}
        <p className="font-bold capitalize px-4">{data.title}</p>
        {/* meeting link */}
        <p className="text-[12px] font-semibold mt-2 px-4
                    border-b py-2
                    text-violet-400 flex justify-between">
            <span>/{data.title}</span>
            <span className='cursor-pointer'>Copy link</span>
        </p>
        {/* booking on/off switch */}
        <div className="px-4 mt-4 flex gap-2 justify-start items-center">
            <div 
                onClick={()=>setToggle(prevToggle=>!prevToggle)} 
                className={`
                w-10 h-5 md:w-12 md:h-6 p-[2px]
                cursor-pointer
                border border-violet-500 rounded-full
                relative
            `}>
                <div className={`
                    w-4 h-4 md:w-5 md:h-5 rounded-full
                    ${isToggle ? 'bg-violet-500' : 'bg-violet-300'} 
                    ${isToggle ? 'right-0.5 -translate-x-[2px]' : 'translate-x-[2px]'}
                    transition-all duration-300
                    absolute top-[50%] -translate-y-[50%] 
                `}></div>
            </div>
            <span className={`text-[12px] ${isToggle ? 'text-gray-600' : 'text-gray-400'} `}>Booking is {isToggle?'ON':'OFF'}</span>
        </div>
        {/* duration */}
        <p className="px-4 text-[12px] mt-4">
            {/* icon */}
            <i className="bi bi-clock"></i> <span className='sml-2'>{data.duration} minutes</span>
        </p>
        {/* description */}
        <div className="px-4 w-full h-[100px] text-[14px] flex justify-center items-center text-justify mt-4 border-y">
            <p className="w-full h-[80px] overflow-hidden overflow-y-scroll px-2 ">{data.desc}</p>
        </div>
        {/* buttons */}
        <div className="flex justify-end gap-2 mt-auto px-4 transition-all ">
            <button className='w-20 h-8 border border-pink-400 rounded duration-200 hover:bg-pink-300 hover:shadow-md'>Delete</button>
            <button className='w-20 h-8 border border-violet-400 rounded duration-200 hover:bg-violet-300 hover:shadow-md'>Edit</button>
        </div>
    </div>
  )
}

export default BookingCard