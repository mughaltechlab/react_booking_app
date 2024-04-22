import React from 'react'
import Auth from './components/Auth'
import BookingCard from './components/elements/BookingCard'
import AddBookingForm from './components/AddBookingForm'

function App() {
  return (
    <div className='bg-slate-50 w-full min-h-dvh flex justify-center items-center'>
      {/* <Auth /> */}
      {/* <BookingCard /> */}
      <AddBookingForm />
    </div>
  )
}

export default App