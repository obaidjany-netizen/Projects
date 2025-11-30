import React, { useEffect, useRef } from 'react';
import Image from '../assets/hero.png';

const HeroImage = () => {  // Fixed: camelCase → PascalCase
  const imageRef = useRef(null);

  useEffect(() => {
    const img = imageRef.current;
    if (img) {
      img.style.opacity = '0';
      img.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        img.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        img.style.opacity = '1';
        img.style.transform = 'translateY(0)';
      }, 500); // Matches HeroText timing
    }
  }, []);

  return (
    <div className='flex justify-start items-center w-screen md:w-1/2
     relative md:absolute sm:-bottom-1 md:bottom-21 -right-20 lg:-right-20 lg:-bottom-28 xl:-bottom-30 
    overflow-hidden'>
      <img 
        ref={imageRef}
        className='overflow-hidden w-full h-auto max-h-[75vh] md:max-h-[85vh] object-contain block rounded-2xl shadow-xl'
        src={Image} 
        alt="Obaid Ur Rehman" 
      />
    </div>
  );
};

export default HeroImage;
