import React from 'react'
import Navbar1 from './components/Navbar1'
import './App.css'
import LandingPage from './pages/landingPage/LandingPage'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp'


const App = () => {
  return (
    <div className='bg-gray-100 w-[100%] h-[100%] box-border' >
      <Navbar1 />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App