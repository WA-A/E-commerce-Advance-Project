import React from 'react'
import Navbar from '../component/web/Navbar/Navbar'
import Footer from '../component/web/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {   // Here are the fixed parts of the admin, even when it changes, I change it once
  return (
   <>
   <Navbar/>
   <Outlet/>  {/*see the component that changes */}
   <Footer/>
   </>
  )
}
