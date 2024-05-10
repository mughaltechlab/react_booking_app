import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'

function SignupForm() {
    const [isShow, setIsShow] = useState(false);

    const navigate = useNavigate();
    
  return (
    <form action="">
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4'>
            {/* first name */}
            <div>
                <div className="mt-2.5 relative">
                    <input 
                        type="text"
                        name='fname'
                        id='fname'
                        required
                        placeholder='First name'
                        className='
                        w-full px-4 py-4
                        placeholder-gray-400 text-gray-600 font-semibold
                        focus:ring focus:ring-violet-300
                        border border-gray-400 focus:drop-shadow-lg rounded-md outline-none
                        '
                        autoComplete='true'
                        autoCorrect='true'
                    />
                </div>
            </div>
            {/* last name */}
            <div>
                <div className="mt-2.5 relative">
                    <input 
                        type="text"
                        name='lname'
                        id='lname'
                        required
                        placeholder='Last name'
                        className='
                        w-full px-4 py-4
                        placeholder-gray-400 text-gray-600 font-semibold
                        focus:ring focus:ring-violet-300
                        border border-gray-400 focus:drop-shadow-lg rounded-md outline-none
                        '
                        autoComplete='true'
                        autoCorrect='true'
                    />
                </div>
            </div>
            {/* email */}
            <div className='sm:col-span-2'>
                <div className="mt-2.5 relative">
                    <input 
                        type="email"
                        name='email'
                        id='email'
                        required
                        placeholder='meeting@gmail.com'
                        className='
                        w-full px-4 py-4
                        placeholder-gray-400 text-gray-600 font-semibold
                        invalid:focus:ring-pink-200 focus:ring focus:ring-violet-300
                        border border-gray-400 focus:drop-shadow-lg rounded-md outline-none
                        '
                        autoComplete='true'
                        autoCorrect='true'
                    />
                </div>
            </div>
            {/* password */}
            <div className=''>
                <div className="mt-2.5 relative">
                    <input 
                        type= {isShow ? "text" : "password"} 
                        name='pass'
                        id='pass'
                        required
                        placeholder='Password'
                        className='
                        w-full px-4 py-4
                        placeholder-gray-400 text-gray-600 font-semibold
                        focus:ring focus:ring-violet-300
                        border border-gray-400 focus:drop-shadow-lg rounded-md outline-none
                        '
                    />
                    <i className={
                            `bi ${isShow ? 'bi-eye' : 'bi-eye-slash'}  absolute
                            text-violet-400 hover:text-violet-600 cursor-pointer
                            top-[50%] -translate-y-[50%] right-3 `}
                        onClick={()=>{ setIsShow(prevShow=> !prevShow) }}
                    ></i>
                </div>
            </div>
            {/* retype-password */}
            <div className=''>
                <div className="mt-2.5 relative">
                    <input 
                        // type= {isShow ? "text" : "password"} 
                        type='password'
                        name='retype-pass'
                        id='retype-pass'
                        required
                        placeholder='Confirm Password'
                        className='
                        w-full px-4 py-4
                        placeholder-gray-400 text-gray-600 font-semibold
                        focus:ring focus:ring-violet-300
                        border border-gray-400 focus:drop-shadow-lg rounded-md outline-none
                        '
                    />
                    
                </div>
            </div>
            {/* signup btn */}
            <div className='sm:col-span-2'>
            <button onClick={()=>{navigate('authToMyBooking')}} className="
                            w-full px-4 py-3
                            transition-all duration-200 ease-linear
                            rounded-md hover:bg-violet-800 border-violet-600
                            focus:ring focus:ring-violet-300 bg-violet-600 text-white 
                            font-semibold text-lg
                        ">Sign up</button>
               {/* <Link to={'myBooking'} >
                    <button className="
                            w-full px-4 py-3
                            transition-all duration-200 ease-linear
                            rounded-md hover:bg-violet-800 border-violet-600
                            focus:ring focus:ring-violet-300 bg-violet-600 text-white 
                            font-semibold text-lg
                        ">Sign up</button>
               </Link>  */}
            </div>
            {/* or */}
            <div className='sm:col-span-2 relative my-4'>
                <div className='w-full grid grid-cols-2 gap-x-10'>
                    <hr />
                    <hr />
                </div>
                    <span className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] ">or</span>
            </div>
            {/* google signup btn */}
            <div className='sm:col-span-2'>
                <button className="
                    w-full px-4 py-[6px]
                    transition-all duration-200 ease-linear
                    flex justify-center items-center gap-2
                    rounded-md hover:bg-violet-400 hover:text-white
                    focus:ring focus:ring-violet-300 bg-violet-300 text-black
                    font-semibold text-lg
                ">
                    <span className='w-[40px] h-[40px] flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 36 36" width="36"><path d="M34.32 18.39c0-1.17-.11-2.3-.29-3.39H18v6.48h9.4c-.38 2.19-1.59 4.05-3.42 5.31v4.1h5.28c3.2-2.97 5.06-7.33 5.06-12.5z" fill="#4285F4"/><path d="M18 35c4.59 0 8.44-1.52 11.25-4.12l-5.28-4.1c-1.57 1.08-3.59 1.71-5.97 1.71-4.51 0-8.33-3.02-9.73-7.11H2.82v4.23C5.62 31.18 11.36 35 18 35z" fill="#34A853"/><path d="M8.27 21.39c-.36-1.07-.57-2.21-.57-3.39s.21-2.32.58-3.39v-4.23H2.82C1.67 12.67 1 15.25 1 18s.67 5.33 1.82 7.63l5.45-4.24z" fill="#FBBC05"/><path d="M18 7.5c2.56 0 4.86.88 6.67 2.61l.01.02 4.7-4.7C26.43 2.68 22.59 1 18 1 11.36 1 5.62 4.82 2.82 10.37l5.45 4.23c1.4-4.08 5.22-7.1 9.73-7.1z" fill="#EA4335"/><path d="M1 1h34v34H1z" fill="none"/></svg></span>
                    <span>Sign in with google</span>
                    </button>
            </div>
            {/* already have account */}
            {/* <div className='sm:col-span-2'>
            <p className='text-center text-[12px] '>Already have account? <a href="/" className='text-violet-600'>Login</a></p>
            </div> */}

        </div>
    </form>
  )
}

export default SignupForm