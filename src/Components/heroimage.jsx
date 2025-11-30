import React from 'react'
import HeroImage from '../assets/hero.png'

const heroimage = () => {
  return (
    <div className='flex justify-start items-center w-screen md:w-1/2 relative md:absolute -right-20
     lg:-right-20  lg:-bottom-28 xl:-bottom-30  overflow-hidden '>
      <img className='w-full object-contain flex justify-start items-start  overflow-hidden ' src={HeroImage} alt="Obaid Ur Rehman" />
    </div>
  )
}

export default heroimage
