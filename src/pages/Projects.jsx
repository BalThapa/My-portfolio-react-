import React from 'react';
import Card2 from '../components/ui/Card2';
import Card3 from '../components/ui/Card3';
import Test from '../assets/test.mp4';

const Projects = () => {
    return (
        <main className='bg-yellow-50 dark:bg-gray-900 text-gray-900 dark:text-white p-10 px-30 md:px-40 lg:px-52 '>
        <div >
            <h1 className='flex justify-center py-3 text-2xl lg:text-3xl uppercase font-bold text-red-900'>Skills</h1>
            <p className=' font-light text-gray-500 text-center'>
                My study at Business College, Helsinki provides me a lot of opportunities to complete various projects using various tool and technologies. Below are the lists of some of them with berief introduction and stack used for completion. 
            </p>
        </div>
        <div className='flex flex-col gap-20 items-center mt-20'>
            <Card2
            title='Test'
            subtitle='THis is for testing purpose. One screen record has been playing for the purpose of testing.THis is for testing purpose. One screen record has been playing for the purpose of testing.THis is for testing purpose. One screen record has been playing for the purpose of testing.THis is for testing purpose. One screen record has been playing for the purpose of testing.'
            video={Test}
            link1='https://github.com/BalThapa/SpeedGame-react'
            link2='https://speed-game-react-59x3n4u70-bal-krishnas-projects.vercel.app'/>    
        
            <Card3
            title='Test'
            subtitle='THis is for testing purpose. One screen record has been playing for the purpose of testing.THis is for testing purpose. One screen record has been playing for the purpose of testing.THis is for testing purpose. One screen record has been playing for the purpose of testing.THis is for testing purpose. One screen record has been playing for the purpose of testing.'
            video={Test}
            link1='https://github.com/BalThapa/SpeedGame-react'
            link2='https://speed-game-react-59x3n4u70-bal-krishnas-projects.vercel.app'/>  

            <Card2
            title='Test'
            subtitle='THis is for testing purpose. One screen record has been playing for the purpose of testing.THis is for testing purpose. One screen record has been playing for the purpose of testing.THis is for testing purpose. One screen record has been playing for the purpose of testing.THis is for testing purpose. One screen record has been playing for the purpose of testing.'
            video={Test}
            link1='https://github.com/BalThapa/SpeedGame-react'
            link2='https://speed-game-react-59x3n4u70-bal-krishnas-projects.vercel.app'/>    
        
            <Card3
            title='Test'
            subtitle='THis is for testing purpose. One screen record has been playing for the purpose of testing.THis is for testing purpose. One screen record has been playing for the purpose of testing.THis is for testing purpose. One screen record has been playing for the purpose of testing.THis is for testing purpose. One screen record has been playing for the purpose of testing.'
            video={Test}
            link1='https://github.com/BalThapa/SpeedGame-react'
            link2='https://speed-game-react-59x3n4u70-bal-krishnas-projects.vercel.app'/>    
        </div>
        </main>
    );
};

export default Projects;