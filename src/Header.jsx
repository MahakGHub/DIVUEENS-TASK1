import React from 'react';
import { ReactTyped } from 'react-typed';


const Header = () => {
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src='https://t4.ftcdn.net/jpg/07/26/99/03/360_F_726990369_kRpqS3eWPDPJugae3gqt51KiWBjuh7Js.jpg'
        alt='/'
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          
          <h1 className='font-bold text-6xl md:text-8xl drop-shadow-2xl animate-pulse animate-twice font-Montserrat'>
            Why Divueens
            
        
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl font-Montserrat'>
            Transform your beauty routine with Divueens. Join us and unlock your true radiance. Beacause you deserve to shine everyday.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Header;



