import React from 'react'
import Navbar1 from './components/Navbar1'
import './App.css'
import LandingPage from './pages/landingPage/LandingPage'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/login/Login'
import Navbar2 from './components/navbar2/Navbar2'
import Feed from './pages/feeds/Feed'


const App = () => {

  const isLoggin = true;

  return (
    <div className='bg-gray-100 w-[100%] h-[100%] box-border' >
      {isLoggin ? <Navbar2 /> : <Navbar1 />}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/feeds' element={<Feed />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
