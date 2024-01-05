import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';


const Menu = () => {
    return (
        <div className='flex '>
                <ul className='lg:flex md:flex hidden'>
                    <li className='mr-6 '>
                        <a href='/' className='hover:underline hover:text-blue-900'>Home</a>
                    </li>
                    <li className='mr-6'>
                        <a href='/about' className='hover:underline hover:text-blue-900'>About</a>
                    </li>
                    <li className='mr-6'>
                        <a href='/skills' className='hover:underline hover:text-blue-900'>Skills</a>
                    </li>
                    <li className='mr-6' >
                        <a href='/projects' className='hover:underline hover:text-blue-900'>Projects</a>
                    </li>
                    <li className='mr-6'>
                        <a href='/contact' className='hover:underline hover:text-blue-900'>Contact</a>
                    </li>
                </ul>
                <button className='space-y-1 group md:hidden'>
                    <GiHamburgerMenu className='flex md:hidden lg:hidden'/>
                    <ul className='bg-gray-900 w-screen pb-10 z-10 right-0 absolute -top-full group-focus:top-0 duration-150 flex flex-col justify-end text-red-200 '>
                        <button className='px-10 py-8 relative ml-auto text-2xl'>
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
                </button>
        </div>
    );
};

export default Menu;