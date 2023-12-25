import React from 'react';
import {MdBedtime, MdWbSunny} from 'react-icons/md';
import Logo_dark from '../assets/Logo_dark.png';


const Header = ({darkMode, setDarkMode}) => {
    return (
        <header className="bg-red-200 dark:bg-gray-900 text-gray-900 dark:text-white">
          <nav className="flex justify-between items-center p-5">
            <div className='flex'>
              <img src={Logo_dark} alt="logo" className='h-14' />
              <h1 className="text-lg m-3">Bal Krishna</h1>
            </div>
            <div onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <MdWbSunny className='text-2xl cursor-pointer'/>
              ):(
                <MdBedtime className='text-2xl cursor-pointer'/>
              )}                
            </div>
          </nav>  
        </header>
    );
};

export default Header;