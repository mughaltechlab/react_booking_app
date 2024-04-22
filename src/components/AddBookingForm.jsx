import React from 'react'

function AddBookingForm() {
  return (
    <div className='
        w-full sm:w-[500px] px-4 py-5 sm:shadow-lg bg-white border-t-4 border-violet-400 rounded-md
        flex flex-col gap-4
    '>
        <div className="font-semibold">Add Booking</div>
        {/* title */}
        <div>
            <div className="">Title</div>
            <input 
                type="text"
                id='title'
                name='title'
                placeholder='Enter meeting title'
                className='
                        w-full px-4 py-4
                        placeholder-gray-400 text-gray-600 font-semibold
                        focus:ring focus:ring-violet-300
                        border border-gray-400 focus:drop-shadow-lg rounded-md outline-none
                '
            />
        </div>
        {/* description */}
        <div>
            <div className="">Description</div>
            <textarea 
                id='desc'
                name='desc'
                placeholder='Enter meeting description...'
                className='
                        w-full px-4 py-4
                        placeholder-gray-400 text-gray-600 font-semibold
                        focus:ring focus:ring-violet-300
                        border border-gray-400 focus:drop-shadow-lg rounded-md outline-none
                '
                // cols="30"
                rows="5"
            ></textarea>
        </div>
        {/* duration */}
        <div>
            <div className="">Duration</div>
            <input 
                type="number"
                id='duration'
                name='duration'
                placeholder='minutes'
                className='
                        w-full px-4 py-4
                        placeholder-gray-400 text-gray-600 font-semibold
                        focus:ring focus:ring-violet-300
                        border border-gray-400 focus:drop-shadow-lg rounded-md outline-none
                '
            />
        </div>
        {/* week days */}
        <div className=''>
            <div className="">Define your weekly availability</div>
            {/* days */}
            <div className="border-l-2 border-violet-300 px-2 rounded">
                {/* sunday */}
                <div className='flex items-center gap-2'>
                    <input type="checkbox" name="sun" id="sun"
                        className='cursor-pointer'
                    />
                    <label htmlFor="sun">Sunday</label>
                </div>
                {/* Monday */}
                <div className='flex items-center gap-2'>
                    <input type="checkbox" name="mon" id="mon"
                        className='cursor-pointer'
                    />
                    <label htmlFor="mon">Monday</label>
                </div>
                {/* Tuesday */}
                <div className='flex items-center gap-2'>
                    <input type="checkbox" name="tue" id="tue"
                        className='cursor-pointer'
                    />
                    <label htmlFor="tue">Tuesday</label>
                </div>
                {/* Wednesday */}
                <div className='flex items-center gap-2'>
                    <input type="checkbox" name="wed" id="wed"
                        className='cursor-pointer'
                    />
                    <label htmlFor="wed">Wednesday</label>
                </div>
                {/* Thursday */}
                <div className='flex items-center gap-2'>
                    <input type="checkbox" name="thur" id="thur"
                        className='cursor-pointer'
                    />
                    <label htmlFor="thur">Thursday</label>
                </div>
                {/* Friday */}
                <div className='flex items-center gap-2'>
                    <input type="checkbox" name="fri" id="fri"
                        className='cursor-pointer'
                    />
                    <label htmlFor="fri">Friday</label>
                </div>
                {/* Saturday */}
                <div className='flex items-center gap-2'>
                    <input type="checkbox" name="sat" id="sat"
                        className='cursor-pointer'
                    />
                    <label htmlFor="sat">Saturday</label>
                </div>
            </div>
        </div>

         {/* buttons */}
         <div className="flex justify-end gap-2 mt-auto px-4 transition-all ">
            <button className='w-20 h-8 border border-pink-400 rounded duration-200 hover:bg-pink-300 hover:shadow-md'>Cancel</button>
            <button className='px-4 h-8 border border-violet-400 rounded duration-200 hover:bg-violet-300 hover:shadow-md'>Add Booking</button>
        </div>
        
    </div>
  )
}

export default AddBookingForm