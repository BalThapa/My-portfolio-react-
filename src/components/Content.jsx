import React from 'react';
import Card1 from './ui/Card1';
import About from '../assets/About.png';
import Skills from '../assets/Skills.jpeg';
import Project from '../assets/Project.jpeg';
import Contact from '../assets/Contact.jpeg';


const Content = () => {
    
    return (
        <div className=' mt-10 '>
            <h1 className='flex justify-center py-3 text-2xl lg:text-3xl uppercase font-bold text-blue-600'>What's inside?</h1>
        <div className='flex flex-col gap-10 items-center p-10 lg:flex-row lg:justify-center'>
        <Card1
            image={About}
            title="About-me"
            subtitle="This is the description of my journey to the software developing field"
            link="./about"
        />
        <Card1
            image={Skills}
            title="My Skills"
            subtitle="This is the description of my journey to the software developing field"
            link="./skills"
        />
        <Card1
            image={Project}
            title="My Projects"
            subtitle="This is the description of my journey to the software developing field"
            link="./projects"
        />
        <Card1
            image={Contact}
            title="Contact Me"
            subtitle="This is the description of my journey to the software developing field"
            link="./contact"
        />
        </div>
        </div>
        
    );
};

export default Content;