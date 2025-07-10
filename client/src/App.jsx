import React from 'react'
import Navbar1 from './components/Navbar1'
import './App.css'
import LandingPage from './pages/landingPage/LandingPage'
import Footer from './components/Footer'

const  App = () => {
  return (
    <div className='bg-gray-100 w-[100%] h-[100%] box-border' >
      <Navbar1/>
      <LandingPage/>
      <Footer/>
    </div>
  )
}

export default  App