import React from 'react'

//* px-[40px]

function Header() {
  return (
    <div className="
        w-full h-[60px] px-[20px] md:px-[40px]
        bg-white shadow-md 
        flex items-center justify-between
        ">
        {/* logo */}
        <div className="md:text-[24px] font-bold border-l-2 relative ">
            <span className='primary-color slide-left-anime absolute' style={{transition:'all 2s linear'}}>EasyMeet</span>
        </div>
        <div className='flex items-center gap-4'>
            {/* navigaton menu */}
            <ul className="hidden md:flex gap-2">
                <li>My Booking</li>
                <li>My Schedule</li>
            </ul>
            {/* menu icon on tablet */}
            <i className="bi bi-list flex text-violet-500 font-bold text-[20px]"></i>
        </div>
    </div>
  )
}

export default Header