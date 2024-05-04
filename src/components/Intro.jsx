import React, {useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import img1 from '../assets/svg2.svg'
import { Link } from 'react-router-dom'

function Intro() {

    const heroImgWrapper = useRef();
    const heroTextWrapper = useRef();

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
    
  return (
    <div className='
          lg:max-w-[1200px] sm:max-w-[800px]  w-full md:px-[40px] py-[40px] mx-auto
          
    '>
        {/* SEC1 HERO SECTION some hero animation */}
        <section className="
            w-full overflow-hidden
            md:grid lg:grid-cols-2 md:grid-cols-2 gap-y-4
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
        <section className="
            w-full overflow-hidden
            md:grid lg:grid-cols-2 md:grid-cols-2 gap-y-4
            flex justify-center items-center flex-col
            
        ">
            jsjjsfksjkl
        </section>
    </div>
  )
}

export default Intro