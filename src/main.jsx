import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import MyBooking from './components/MyBooking.jsx'
import MySchedule from './components/MySchedule.jsx'
import Auth from './components/Auth.jsx'
import AddBookingForm from './components/AddBookingForm.jsx'
import Intro from './components/Intro.jsx'

const router = createBrowserRouter([
  {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: 'myBooking',
          element: <MyBooking />
        },
        {
          path: '',
          element: <Intro />
        },
        {
          path: 'auth',
          element: <Auth />
        },
        {
          path: 'schedule',
          element: <MySchedule />
        },
        {
          path: 'addBookingForm',
          element: <AddBookingForm />
        }
      ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
