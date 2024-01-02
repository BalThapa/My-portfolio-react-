import React from 'react';
import Card1 from '../components/ui/Card1';
import Js from '../assets/Js.png';
import Html from '../assets/html5.png';
 
const Skills = () => {
    return (
        <main className=' dark:bg-gray-900 text-gray-900 dark:text-white p-10 px-30 md:px-40 lg:px-52 '>
            <h1 className='flex justify-center py-3 text-2xl lg:text-3xl uppercase font-bold text-red-900'>Skills</h1>
            <p>While moving along with my life and studying BBA from Centria UAS and Full Stack Development program from Business College Helsinki, I get the opportunity to sharpen my diverse skills set in both technical and soft skills. With 
                a lot of study, practice, failure and success I was able to get myself acquinted with various technologies and tools. Below are the skills and level.  </p>
            <div>
                <h2 className='flex justify-center py-10 text-xl lg:text-2xl lg:justify-start font-bold text-red-900'>Skills</h2>
                <div  className='flex flex-col gap-10 items-center p-10 lg:flex-row lg:justify-center'>            
                    <Card1 
                    image={Js}
                    subtitle='JavaScript'
                    width='50%'
                    />
                    <Card1 
                    image={Html}
                    subtitle='JavaScript'
                    width='50%'
                    />
                    <Card1 
                    title='JavaScript'
                    width='50%'
                    />
                    <Card1 
                    title='JavaScript'
                    width='50%'
                    />
                </div>
            </div>
            <div>
                <h2 className='flex justify-center py-10 text-xl lg:text-2xl lg:justify-start font-bold text-red-900'>Skills</h2>
                <div  className='flex flex-col gap-10 items-center p-10 lg:flex-row lg:justify-center'>            
                    <Card1 
                    title='JavaScript'
                    width='50%'
                    />
                    <Card1 
                    title='JavaScript'
                    width='50%'
                    />
                    <Card1 
                    title='JavaScript'
                    width='50%'
                    />
                    <Card1 
                    title='JavaScript'
                    width='50%'
                    />
                </div>
            </div>
            <div>
                <h2 className='flex justify-center py-10 text-xl lg:text-2xl lg:justify-start font-bold text-red-900'>Skills</h2>
                <div  className='flex flex-col gap-10 items-center p-10 lg:flex-row lg:justify-center'>            
                    <Card1 
                    title='JavaScript'
                    width='50%'
                    />
                    <Card1 
                    title='JavaScript'
                    width='50%'
                    />
                    <Card1 
                    title='JavaScript'
                    width='50%'
                    />
                    <Card1 
                    title='JavaScript'
                    width='50%'
                    />
                </div>
            </div>
            <div>
                <h2 className='flex justify-center py-10 text-xl lg:text-2xl lg:justify-start font-bold text-red-900'>Skills</h2>
                <div  className='flex flex-col gap-10 items-center p-10 lg:flex-row lg:justify-center'>            
                    <Card1 
                    title='JavaScript'
                    width='50%'
                    />
                    <Card1 
                    title='JavaScript'
                    width='50%'
                    />
                    <Card1 
                    title='JavaScript'
                    width='50%'
                    />
                    <Card1 
                    title='JavaScript'
                    width='50%'
                    />
                </div>
            </div>
        </main>
    );
};

export default Skills;