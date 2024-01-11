import React from 'react';
import Card1 from './ui/Card1';
import About from '../assets/images/About.png';
import Skills from '../assets/images/Skills.jpeg';
import Project from '../assets/images/Project.jpeg';
import Contact from '../assets/images/Contact.jpeg';


const Content = () => {
    
    return (
        <div className=' mt-10 '>
            <h2 className='flex justify-center py-3 text-2xl uppercase font-bold text-gray-900 dark:text-white'>What's inside?</h2>
            <div className='flex flex-col gap-10 items-center p-10 lg:flex-row lg:justify-center'>
            <Card1
                image={About}
                title="About-me"
                subtitle="This is the description of my journey to the Full-stack development field"
                link="./about"
                linkName='See More'
            />
            <Card1
                image={Skills}
                title="My Skills"
                subtitle="This contains my skills and know-how of various tools and technologies"
                link="./skills"
                linkName='See More'
            />
            <Card1
                image={Project}
                title="My Projects"
                subtitle="My School as well as personal projects are listed and beriefly described with video clip here."
                link="./projects"
                linkName='See More'
            />
            <Card1
                image={Contact}
                title="Contact Me"
                subtitle="Various ways to contact me and form to send me massage is in this page. "
                link="./contact"
                linkName='See More'
            />
            </div>
        </div>
        
    );
};

export default Content;