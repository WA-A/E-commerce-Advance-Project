import React from 'react'
import Navbar from '../component/dashboard/Navbar/Navbar'
import Footer from '../component/dashboard/Footer/Footer'

export default function DashboardLayouts() { // Here are the fixed parts of the user, even when it changes, I change it once
  return (
    <>
    <Navbar/>
    <Footer/>
    </>
    
  )
}
