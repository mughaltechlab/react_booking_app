import React, {useState} from 'react'
import SignupForm from './elements/SignupForm'
import SigninForm from './elements/SigninForm'
import bgImg from '../assets/svg2.svg'


function Auth() {
    
    const [isLoginForm, setLoginForm] = useState(false)


  return (
    <div className={` bg-[${bgImg}]
        lg:max-w-[1000px] sm:max-w-[700px]  w-full md:px-[40px] py-[40px] mx-auto
        flex justify-center items-center
    `}>
      <div className='w-full sm:w-[500px] sm:bg-white py-5 px-5 sm:shadow-lg sm:rounded-lg 
                      before:w-[full] before:h-1 before:bg-violet-500 before:absolute'>
          <div className="grid grid-cols-1">
              <h1 className='text-violet-500'> {isLoginForm ? 'Sign in' : 'Sign up'} on EasyMeet</h1>
          </div>
          <hr className='my-4' />
          { 
              isLoginForm
                  ? <SigninForm />
                  : <SignupForm />
          }
          <div className='sm:col-span-2 mt-4'>
              <p className='text-center text-[12px] '>Already have account? <button onClick={()=>{setLoginForm(prevLoginState=>!prevLoginState)}} className='text-violet-600'>{isLoginForm ? 'Sign up' : 'Sign in'}</button></p>
          </div>
      </div>
    </div>
  )
}

export default Auth