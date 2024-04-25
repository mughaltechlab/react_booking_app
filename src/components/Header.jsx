import React, {useState} from 'react'
import { Link } from 'react-router-dom'

//* px-[20px] md:px-[40px]

function Header() {

    // for togggle menu icon
    const [menuPopup, setMenuPopup] = useState(false)
    
  return (
    <div className="
        w-full h-[60px] px-[20px] md:px-[40px]
        bg-white shadow-md 
        flex items-center justify-between
        ">
        {/* logo */}
        <div className="md:text-[24px] font-bold border-l-2 overflow-x-hidden relative ">
            <span className='primary-color slide-left-anime ' style={{transition:'all 2s linear'}}>EasyMeet</span>
        </div>
        <div className='flex items-center gap-4'>
            {/* navigaton menu */}
            <ul className="hidden md:flex gap-4 font-semibold text-[14px]">
                {/* <Link to={'/'}><li className=' border-b-2 border-transparent hover:border-b-2 hover:border-violet-300 p-2 cursor-pointer transition-all duration-200'>My Booking</li></Link> */}
                {/* <Link to={'/schedule'}><li className=' border-b-2 border-transparent hover:border-b-2 hover:border-violet-300 p-2 cursor-pointer transition-all duration-200'>My Schedule</li></Link> */}
            </ul>
            {/* menu icon on tablet */}
            <i onClick={()=>{setMenuPopup(prevMenu=>!prevMenu)}} className="bi bi-list flex text-violet-500 font-bold text-[20px] cursor-pointer"></i>
            {/* popup menu */}
            <div className={`
                ${!menuPopup && 'hidden'}
                w-[200px] px-4 py-4 drop-shadow
                bg-white transition-all duration-300 opacity-anime
                absolute top-[50px] right-0 md:right-8
            `}>
                <ul>
                    <li>Profile</li>
                    <li className='md:hidden'>My Booking</li>
                    <li className='md:hidden'>My Schedule</li>
                    <li>Log out</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header