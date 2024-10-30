import React from 'react';
import Profile from '../assets/images/testprofile.jpeg';
import Resume from '../assets/doc/CV_2.pdf';
import {MdArrowForward} from 'react-icons/md'
import Socials from './Socials';

const Hero = () => {
 
    return (
        <section className='h-1/2 flex flex-col justify-start items-center p-5 text-center relative z-0'>
    
            <div className='mt-10'> 
            <h1 className='text-3xl uppercase font-bold'>Bal Krishna Thapa Chhetri</h1>
            <h3 className='py-3 text-xl'>Software Developer</h3>
            <p className='max-w-xl tracking-wider font-light text-gray-900 dark:text-white'>
                Hello 👋! Welcome to my portfolio. I am a Software Developer. Right now, I am open to work and appreciate all sorts of opportunities as junior developer, apprentice or intern. My strengths are coding parallel to team-work, communication and project-management. 
            </p>
            </div> 
            <Socials/>
            <div>
                <img 
                    src={Profile} 
                    alt="pic" 
                    className="w-60 md:w-72 object-cover rounded-xl"
                />
                
                <a 
                href={Resume} 
                target='_blank'
                rel='noopener noreferrer' className='flex items-center justify-center mt-10 bg-gradient-to-r from-red-900 to-teal-500 text-white py-2 rounded-lg '>
                    <span className='flex items-center transition-transform duration-500 hover:translate-x-4'>
                    Resume
                    <MdArrowForward className=' ml-2 text-white text-2xl '/>
                    </span> 
                </a>
                
            </div> 
            
        </section>
    );
};

export default Hero;