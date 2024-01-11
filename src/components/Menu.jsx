import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

const Menu = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(prev => !prev);
    };

    return (
        <div className='flex'>
            <ul className='lg:flex md:flex hidden text-lg'>
                <li className='mr-6'>
                    <a href='/' className='hover:underline'>Home</a>
                </li>
                <li className='mr-6'>
                    <a href='/about' className='hover:underline '>About</a>
                </li>
                <li className='mr-6'>
                    <a href='/skills' className='hover:underline '>Skills</a>
                </li>
                <li className='mr-6'>
                    <a href='/projects' className='hover:underline '>Projects</a>
                </li>
                <li className='mr-6'>
                    <a href='/contact' className='hover:underline '>Contact</a>
                </li>
            </ul>
            <button className='space-y-1 group md:hidden' onClick={toggleNav}>
                {isNavOpen ? <MdClose className='flex md:hidden lg:hidden' /> : <GiHamburgerMenu className='flex md:hidden lg:hidden' />}
            </button>
            {isNavOpen && (
                <ul className='fixed top-0 left-0 w-full bg-gray-900 text-red-200 z-10 flex flex-col justify-end lg:hidden md:hidden'>
                    <button className='px-10 py-8 relative ml-auto text-2xl' onClick={toggleNav}>
                        <MdClose/>
                    </button>
                    <li className='flex justify-center w-full py-4 hover:bg-black'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='flex justify-center w-full py-4 hover:bg-black'>
                        <a href='/about'>About</a>
                    </li>
                    <li className='flex justify-center w-full py-4 hover:bg-black'>
                        <a href='/skills'>Skills</a>
                    </li>
                    <li className='flex justify-center w-full py-4 hover:bg-black'>
                        <a href='/projects'>Projects</a>
                    </li>
                    <li className='flex justify-center w-full py-4 hover:bg-black'>
                        <a href='/contact'>Contact</a>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Menu;
