import React from 'react';
import Profile from '../assets/profile.jpeg';


const About = () => {
    return (
        
        <main className='bg-yellow-50 dark:bg-gray-900 text-gray-900 dark:text-white p-10 px-30 md:px-40 lg:px-52 '>
            <h1 className='flex justify-center text-2xl lg:text-3xl uppercase font-bold text-red-900 mb-10'>About me</h1>
            <div className='flex flex-col-reverse md:flex-col-reverse lg:flex-row'>
                <div className='text-justify'>
                    <img src={Profile} alt="img" className='w-auto h-2/5 float-right text-wrap rounded-3xl ml-10 mb-5 md:w-auto md:h-2/5 lg:w-auto lg:h-2/5'/>
                    <p className='py-5'>I am a dedicated student pursuing Full Stack Development at Business College Helsinki, with a passion for technology and innovation. As I am near completion of my studies, I am actively seeking opportunities to apply and enhance my skills through a challenging internship.</p>
                    <p className='py-5'>I have proficiency in HTML, CSS, React.js, JavaScript, PHP (Symfony), Tailwind CSS, Bootstrap, Drupal. Along with these I also have some basic knowledge of Next.js and Typescript. I have used technologies like Docker, Figma, Trello, Github, AWS, CI/CD pipeline etc.
                    </p>
                    <p className='py-5'>I bring a solid foundation in full stack development, coupled with a proactive attitude and a strong desire to learn and grow in a professional environment. I thrive in collaborative settings, eager to tackle challenges, and contribute innovative solutions to projects.
                    </p>
                    <p className='py-5'>Before becoming developer, i worked in cleaning and property maintenance sector. I gained my soft skills like working in groups, adaptability and flexibility, communication, empathy, time management and continuous learning etc from my past work life which for sure can be used anywhere in any career. My works were complete and tidy so my superiors were always happy with my performance. 
                    </p>
                    <p className='py-5'>Currently, I am searching for an internship opportunity where I can leverage my skills, gain hands-on experience, and make meaningful contributions to real-world projects. Open to exploring roles in web development, software engineering, or related fields.
                    </p>
                    <p className='py-5'>Let's connect!</p>
                    
                </div>
                
            </div>
        </main>   
       
    );
};

export default About;