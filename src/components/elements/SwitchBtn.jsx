import React from 'react'

function SwitchBtn() {
  return (
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
  )
}

export default SwitchBtn