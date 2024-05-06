import React, {useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import img1 from '../assets/svg2.svg'
import { Link } from 'react-router-dom'

const cardData = [
    {
        title: '15 minutes meeting',
        duration: 15,
        desc: 'Book a meeting with me for 15 minutes',
        bookingOff: false,
        isToggle: true
    },
    {
        title: '30 minutes meeting',
        duration: 30,
        desc: 'Book a meeting with me for 30 minutes',
        bookingOff: true,
        isToggle: false
    },
    {
        title: '20 minutes meeting',
        duration: 20,
        desc: 'Book a meeting with me for 20 minutes',
        bookingOff: false,
        isToggle: true
    },
]


const MyCard = ({data})=>(
    <div className='border-t-4 border-violet-500
        w-[290px] h-[340px] py-4
        bg-white shadow-lg rounded-md
        flex flex-col
    '>
        {/* title */}
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
                // onClick={()=>setToggle(prevToggle=>!prevToggle)}
                className={`
                w-10 h-5 md:w-12 md:h-6 p-[2px]
                cursor-pointer
                border border-violet-500 rounded-full
                relative
            `}>
                <div className={`
                    w-4 h-4 md:w-5 md:h-5 rounded-full
                    ${data.isToggle ? 'bg-violet-500' : 'bg-violet-300'} 
                    ${data.isToggle ? 'right-0.5 -translate-x-[2px]' : 'translate-x-[2px]'}
                    transition-all duration-300
                    absolute top-[50%] -translate-y-[50%] 
                `}></div>
            </div>
            <span className={`text-[12px] ${data.isToggle ? 'text-gray-600' : 'text-gray-400'} `}>Booking is {data.isToggle?'ON':'OFF'}</span>
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

function Intro() {

    const heroImgWrapper = useRef();
    const heroTextWrapper = useRef();
    const sec2Title = useRef();

    useGSAP(()=>{
        gsap.from(
            '.img1',
            {
                duration: .7,
                opacity: 0,
                delay: 1.5,
                
            }
        )
    }, {scope: heroImgWrapper});

    useGSAP(()=>{
        gsap.from(
            '.sideAnime',
            {
                duration: .7,
                x: -100,
                opacity: 0,
                delay: .2,
                stagger: .5,
            }
        )
    }, {scope: heroTextWrapper});

    useGSAP(()=>{
        gsap.from(
            '.sideAnime',
            {
                duration: .7,
                opacity: 0,
                delay: .2,
                stagger: .5,
            }
        )
    }, {scope: sec2Title});
    
  return (
    <div className='
          lg:max-w-[1200px] sm:max-w-[800px]  w-full md:px-[40px] py-[40px] mx-auto
          
    '>
        {/* SEC1 HERO SECTION some hero animation */}
        <section className="
            w-full overflow-hidden mb-[100px]
            md:grid lg:grid-cols-2 md:grid-cols-2 gap-y-4 place-items-center
            flex justify-center items-center flex-col
            
        ">
            <div ref={heroTextWrapper} className="
                text-[30px] md:text-[40px] uppercase  font-bold
                px-[16px]
                md:border-l-4
                flex flex-col
            ">
                <span className='sideAnime font-bold md:animate-trans-right text-violet-400'>EasyMeet</span>
                <span className='sideAnime'>
                    Your Gateway to Seamless Scheduling!
                </span>
                    {/* <button className='bg-primary-color px-[30px] py-2 text-white font-bold rounded flex justify-center items-center '> */}
                        <Link to={'auth'} 
                            className='sideAnime w-[200px] md:w-[200px] text-[18px] 
                            bg-primary-color px-[30px] py-2 text-white font-bold rounded flex justify-center items-center 
                        ' >
                                <span>Join Now</span> 
                        </Link>
                    {/* </button> */}
            </div>
            {/* svg/png */}
            <div className="px-[16px]" ref={heroImgWrapper}>
                {/* translate-x-[200%] scale-0 */}
                <img className='img1 sm:animate-trans-up' src={img1}  />
            </div>
        </section>
        {/* SEC2 DEMO SECTION */}
        <div className=" bg-violet-300 rounded-lg">

            <section className="
                w-full overflow-hidden py-[40px]
                md:grid lg:grid-cols-3 md:grid-cols-2 gap-y-4 place-items-center
                flex justify-center items-center flex-col relative
                
            ">
                <div className="col-span-full" ref={sec2Title}>
                    <span className='sideAnime text-[28px] font-bold text-white'>Touch, Book, Done: Easy as EasyMeet</span>
                </div>
                {/* cards */}

                    {
                        cardData.map((item,ind)=>{
                            return <div className="mycards animate-trans-up" key={ind}>
                                <MyCard data={item}  />
                            </div>
                        })
                    }

            </section>
        </div>

    </div>
  )
}

export default Intro