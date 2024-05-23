import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Layout'
import AddBookingForm from './components/pages/myBooking/AddBookingForm'
import Intro from './components/pages/home/Intro'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import MyBooking from './components/pages/myBooking/MyBooking'
import Auth from './components/auth/Auth'
import MySchedule from './components/pages/mySchedule/MySchedule'
function App() {

  
  return (
    <div className='w-full min-h-dvh bg-[#f2f2f2]
    flex flex-col'>
      <Header />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/myBooking' element={<MyBooking /> } />
        <Route path='/auth/myBooking' element={<MyBooking /> } />
        <Route path='/myBooking/addBookingForm' element={<AddBookingForm /> } />
        <Route path='/auth/myBooking/addBookingForm' element={<AddBookingForm /> } />
        <Route path='/schedule' element={<MySchedule />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/addBookingForm' element={<AddBookingForm />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App