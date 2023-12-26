import React from 'react';
import Socials from './Socials';


const Footer = () => {
    return (
        <footer className="bg-red-200 dark:bg-gray-900 text-gray-900 dark:text-white bottom-full">
          <div className="flex flex-col justify-between items-center ">
            <Socials/>
            <div className='mb-5'>
              <small>©Copyright2023@BalKrishna</small> 
            </div>
          </div>  
        </footer>
    );
};

export default Footer;