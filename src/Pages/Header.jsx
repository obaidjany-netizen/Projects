import React from 'react'
import Logo from '../Components/Logo'
import NavBar from '../Components/NavBar'

const header = () => {
  return (
    <>
    <header className='flex justify-between items-center px-10 py-2'>
      <Logo/>
      <NavBar/>
    </header>
      
    </>
  )
}

export default header
