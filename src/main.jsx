import React from 'react'
import ReactDOM from 'react-dom/client'
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import MyBooking from './components/pages/myBooking/MyBooking.jsx'
import MySchedule from './components/pages/mySchedule/MySchedule.jsx'
import Auth from './components/auth/Auth.jsx'
import AddBookingForm from './components/pages/myBooking/AddBookingForm.jsx'
import Intro from './components/pages/home/Intro.jsx'
import App from './App.jsx'

// const router = createBrowserRouter([
//   {
//       path: '/',
//       element: <Layout />,
//       children: [
//         {
//           path: 'myBooking',
//           // path: '',
//           element: <MyBooking />,
//         },
//         {
//           path: '',
//           element: <Intro />
//         },
//         {
//           path: 'auth',
//           element: <Auth />,
//           children: [
//             {
//               path: 'authToMyBooking',
//               element: <MyBooking />
//             }
//           ]
//         },
//         {
//           path: 'schedule',
//           element: <MySchedule />
//         },
//         {
//           path: 'addBookingForm',
//           element: <AddBookingForm />
//         }
//       ]
//   },
// ])

// const router = createBrowserRouter([
  
//         {
//           path: '/',
//           element: <Layout />
//         },
//         {
//           path: 'myBooking',
//           // path: '',
//           element: <MyBooking />
//         },
//         {
//           path: '',
//           element: <Intro />
//         },
//         {
//           path: 'auth',
//           element: <Auth />
//         },
//         {
//           path: 'schedule',
//           element: <MySchedule />
//         },
//         {
//           path: 'addBookingForm',
//           element: <AddBookingForm />
//         }
  
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
