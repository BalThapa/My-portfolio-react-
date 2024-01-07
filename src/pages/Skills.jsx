import React from 'react';
import Card1 from '../components/ui/Card1';
import Js from '../assets/images/js.jpeg';
import Html from '../assets/images/html5.png';
import Reactjs from '../assets/images/react.png';
import Reduxjs from '../assets/images/redux.jpeg';
import Nextjs from '../assets/images/nextjs.png';
import CSS from '../assets/images/css.png';
import BS from '../assets/images/Bootstrap.png';
import TW from '../assets/images/tw.png';
import Ts from '../assets/images/TS.png';
import PHP from '../assets/images/php.jpg';
import MySql from '../assets/images/mysql.png';
import Drupal from '../assets/images/drupal.png';
import FireBase from '../assets/images/firebase.png';
import Node from '../assets/images/njs.jpeg';
import Git from '../assets/images/GitHub.png';
import Docker from '../assets/images/Docker.jpeg';
import AWS from '../assets/images/aws.png';
import Lando from '../assets/images/lando.png';
import Sf from '../assets/images/sf.png';
import Figma from '../assets/images/figma.jpeg';
import Trello from '../assets/images/trello.jpeg';
 
const Skills = () => {
    return (
        <main className='bg-yellow-50 dark:bg-gray-900 text-gray-900 dark:text-white p-10 px-30 md:px-40 lg:px-52 '>
            <h1 className='flex justify-center py-3 text-2xl lg:text-3xl uppercase font-bold text-red-900'>Skills</h1>
            <p className=' font-light text-gray-500 text-center'>While moving along with my life and studying BBA from Centria UAS and Full Stack Development program from Business College Helsinki, I get the opportunity to sharpen my diverse skills set in both technical and soft skills. With 
                a lot of study, practice, failure and success I was able to get myself acquinted with various technologies and tools. Below are the skills and level.  </p>
            <div>
                <h2 className='flex justify-center py-10 text-xl lg:text-2xl lg:justify-start font-bold text-red-900'>Frontend Technologies</h2>
                <div  className='flex flex-col gap-10 items-center p-10 lg:flex-row lg:justify-center'>            
                    <Card1 
                    image={Html}
                    title='HTML'
                    //width='80%'
                    />
                    <Card1 
                    image={CSS}
                    title='CSS'
                    //width='80%'
                    />
                    <Card1 
                    image={Reactjs}
                    title='React'
                    //width='70%'
                    />
                    <Card1 
                    image={Reduxjs}
                    title='Redux'
                    //width='30%'
                    />
                   
                </div>
                <div  className='flex flex-col gap-10 items-center p-10 lg:flex-row lg:justify-center'> 
                    <Card1 
                    image={Nextjs}
                    title='Nextjs'
                    //width='20%'
                    />           
                    <Card1 
                    image={BS}
                    title='Bootstrap'
                    //width='80%'
                    />
                    <Card1 
                    image={TW}
                    title='Tailwind'
                    //width='80%'
                    />
                                   
                </div>
            </div>
            <div>
                <h2 className='flex justify-center py-10 text-xl lg:text-2xl lg:justify-start font-bold text-red-900'>Programming Languages</h2>
                <div  className='flex flex-col gap-10 items-center p-10 lg:flex-row lg:justify-center'>            
                    <Card1 
                    image={Js}
                    title='JavaScript'
                    //width='60%'
                    />
                    <Card1 
                    image={Ts}
                    title='TypeScript'
                    //width='30%'
                    />
                    <Card1
                    image={PHP} 
                    title='PHP'
                    //width='40%'
                    />
                </div>
            </div>
            <div>
                <h2 className='flex justify-center py-10 text-xl lg:text-2xl lg:justify-start font-bold text-red-900'>Backend Techologies & CMS</h2>
                <div  className='flex flex-col gap-10 items-center p-10 lg:flex-row lg:justify-center'>            
                    <Card1 
                    image={MySql} 
                    title='MySQL'
                    //width='50%'
                    />
                    <Card1
                    image={FireBase}  
                    title='Firebase'
                    //width='30%'
                    />
                    <Card1
                    image={Node}  
                    title='node'
                    //width='40%'
                    />
                    <Card1
                    image={Sf}  
                    title='Symfony'
                    //width='40%'
                    />
                </div>
                <div className='flex flex-col gap-10 items-center p-10 lg:flex-row lg:justify-center'>
                    <Card1
                    image={Drupal}  
                    title='Drupal'
                    //width='70%'
                    />
                </div>
            </div>
            <div>
                <h2 className='flex justify-center py-10 text-xl lg:text-2xl lg:justify-start font-bold text-red-900'>DevOp Technologies</h2>
                <div  className='flex flex-col gap-10 items-center p-10 lg:flex-row lg:justify-center'>            
                    <Card1 
                    image={Git}  
                    title='Github'
                    //width='40%'
                    />
                    <Card1 
                    image={Docker}  
                    title='Docker'
                    //width='40%'
                    />
                    <Card1 
                    image={AWS}  
                    title='AWS'
                    //width='30%'
                    />
                    <Card1 
                    image={Lando}  
                    title='Lando'
                    //width='40%'
                    />
                </div>
            </div>
            <div>
                <h2 className='flex justify-center py-10 text-xl lg:text-2xl lg:justify-start font-bold text-red-900'>Design & Project Management Tools</h2>
                <div  className='flex flex-col gap-10 items-center p-10 lg:flex-row lg:justify-center'>            
                    <Card1 
                    image={Figma}  
                    title='Figma'
                    //width='70%'
                    />
                    <Card1 
                    image={Trello}  
                    title='Trello'
                    //width='70%'
                    />
                </div>
            </div>
        </main>
    );
};

export default Skills;