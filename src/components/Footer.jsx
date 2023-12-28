import React from 'react';
import Socials from './Socials';
import Logo_dark from '../assets/Logo_dark.png';


const Footer = () => {
    return (
        <footer className="bg-red-200 dark:bg-gray-900 text-gray-900 dark:text-white bottom-full flex flex-col lg:flex-row md:flex-row justify-between items-center p-5">
          <div className='flex  flex-wrap'>
            <a href="./"><img src={Logo_dark} alt="logo" className='h-20' /></a>
            <div className='text-xs px-3 mt-4'>
              <p>BalKrishna Thapa Chhetri</p>
              <p>info.balthapa@gmail.com</p>
              <p>+358 442 427 363</p>
          </div>
          </div>
            <Socials/>
                   <div className='mb-5'>
              <small>©Copyright2023@BalKrishna</small> 
          </div> 
          
        </footer>
    );
};

export default Footer;