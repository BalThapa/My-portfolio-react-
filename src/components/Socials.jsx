import React from 'react';
import {FaLinkedin, FaFacebook, FaEnvelopeOpenText, FaGithub} from 'react-icons/fa'


const Socials = () => {
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
    );
};

export default Socials;