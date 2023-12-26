import React from 'react';
import Profile from '../assets/profile.jpeg';
import Resume from '../assets/bal-resume.pdf';

import {FaLinkedin, FaFacebook, FaEnvelopeOpenText, FaGithub, FaArrowRight,} from 'react-icons/fa'

const Hero = () => {

    const SOCIAL = [
        {
            id:1,
            link:"https://linkedin.com",
            icon:<FaLinkedin/>,
        },
        {
            id:2,
            link:"https://facebook.com",
            icon:<FaFacebook/>,
        },
        {
            id:3,
            link:"https://gmail.com",
            icon:<FaEnvelopeOpenText/>,
        },
        {
            id:3,
            link:"https://github.com",
            icon:<FaGithub/>,
        },
    ];

    return (
        <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
    
            <div className='mt-10'> 
            <h2 className='text-3xl uppercase font-bold text-rose-600'>Bal Krishna Thapa Chhetri</h2>
            <h3 className='py-3 text-xl'>Junior Software Developer</h3>
            <p className='max-w-xl font-light text-gray-500'>
                Hello <span className='animate-pulse text-3xl'>👋</span>, welcome to my portfolio. I am a Junior Software Developer searching for an internship opportunity. I love to work in FrontEndside and learning backend also. 
            </p>
            </div> 
            <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
                {SOCIAL.map(({id, link, icon}) => (
                   <a href={link} 
                        key={id} 
                        target='_blank'
                        rel='noopener noreferrer'
                        className='cursor-pointer duration-300 hover:text-rose-600'
                        >{icon}</a> 
                ))}
            </div> 
            <div>
                <img 
                    src={Profile} 
                    alt="pic" 
                    className="w-60 h-60 md:w-72 object-cover rounded-xl"
                />
                <a 
                href={Resume} 
                target='_blank'
                rel='noopener noreferrer' className='flex items-center justify-center mt-10 bg-gradient-to-r from-red-600 to-teal-500 text-white py-2 rounded-lg'>Resume
                <FaArrowRight className='flex ml-5 text-white text-3xl transition-transform duration-500 hover:-translate-x-4'/>
                </a>
                
            </div> 
            
        </section>
    );
};

export default Hero;