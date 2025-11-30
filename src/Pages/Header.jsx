import React from 'react'
import Logo from '../Components/Logo.jsx'
import NavBar from '../Components/NavBar'

const Header = () => {
  return (
    <>
    <header className='flex justify-between items-center px-10 py-2'>
      <Logo/>
      <NavBar/>
    </header>
      
    </>
  )
}

export default Header
