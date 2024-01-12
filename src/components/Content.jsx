import React from 'react';
import Card1 from './ui/Card1';


const Content = () => {
    
    return (
        <div className=' mt-10 '>
            <h2 className='flex justify-center py-3 text-2xl uppercase font-bold text-gray-900 dark:text-white'>What's inside?</h2>
            <div className='flex flex-col gap-10 items-center p-10 lg:flex-row lg:justify-center'>
            <Card1
                title="About-me"
                subtitle="This is the description of my journey to the Full-stack development field"
                link="./about"
                linkName='Uncover My Story'
            />
            <Card1
                title="My Skills"
                subtitle="This contains my skills and know-how of various tools and technologies"
                link="./skills"
                linkName='Browse Skills'
            />
            <Card1
                title="My Projects"
                subtitle="All my projects are listed and beriefly described with video clip here."
                link="./projects"
                linkName='Explore Project Gallery'
            />
            <Card1
                title="Contact Me"
                subtitle="Various ways to contact me and form to send me massage is in this page. "
                link="./contact"
                linkName='Reach Out'
            />
            </div>
        </div>
        
    );
};

export default Content;