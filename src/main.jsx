import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import MyBooking from './components/MyBooking.jsx'
import MySchedule from './components/MySchedule.jsx'
import AddBookingForm from './components/AddBookingForm.jsx'

const router = createBrowserRouter([
  {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <MyBooking />
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
