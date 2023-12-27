import React from 'react';
import {MdBedtime, MdWbSunny} from 'react-icons/md';
import Logo_dark from '../assets/Logo_dark.png';
import Menu from './Menu';

const Header = ({darkMode, setDarkMode}) => {
    return (
        <header className="bg-red-200 dark:bg-gray-900 text-gray-900 dark:text-white">
          <nav className="flex justify-between items-center p-5">
            <div className='flex items-center gap-5'>
              <a href="./"><img src={Logo_dark} alt="logo" className='h-14' /></a>
              <a href="./"><h1>Bal Krishna</h1></a>
            </div>
            <div className='flex gap-5'>
            <Menu/>
            <div onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <MdWbSunny className='text-2xl cursor-pointer'/>
              ):(
                <MdBedtime className='text-2xl cursor-pointer'/>
              )}                
            </div>
            </div>
          </nav> 
           
        </header>
    );
};

export default Header;