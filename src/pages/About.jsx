import React from 'react';
import Profile from '../assets/images/profile.jpeg';


const About = () => {
    return (
        <main className=' dark:bg-gray-900 text-gray-900 dark:text-white p-10 px-30 md:px-40 lg:px-80'>
            <h1 className='flex justify-center text-2xl lg:text-3xl uppercase font-bold mb-10'>About me</h1>
            <div className='flex '>
                <div>
                    <img src={Profile} alt="img" className='w-2/5 float-right text-wrap rounded-3xl ml-10 mt-5 mb-5 md:w-2/5 lg:w-2/5'/>
                    <p className='py-3 text-lg dark:font-light'>
                        I'm an enthusiastic Full Stack Development student at Business College Helsinki, driven by a deep passion for <mark className='bg-yellow-200'>technology
                         and innovation</mark>. As I near the end of my studies, 
                        I'm actively seeking challenging internships to apply and elevate my skills.
                    </p>
                    <p className='py-3 text-lg dark:font-light'>
                        My journey into programming began just over a year ago, sparking a thrilling 
                        path of discovery. The ever-evolving nature of <mark className='bg-yellow-200'>technology</mark> and my 
                        innate <mark className='bg-yellow-200'>problem-solving abilities</mark> led me to Full Stack Development.
                    </p>
                    <p className='py-3 text-lg dark:font-light'>
                        Guided by exceptional teachers and supported by collaborative friends, I've honed
                        proficiency in <mark className='bg-yellow-200'>HTML, CSS, React.js, JavaScript, PHP (Symfony), Tailwind CSS, 
                        Bootstrap, Drupal</mark>. I also possess basic knowledge of <mark className='bg-yellow-200'>Next.js and 
                        Typescript</mark>, and have hands-on experience with <mark className='bg-yellow-200'>Docker, Figma, Trello, Github, 
                        AWS, and CI/CD pipeline</mark>.
                    </p>
                    <p className='py-3 text-lg dark:font-light'>
                        With a robust foundation in full-stack development, coupled with a proactive mindset and a 
                        hunger for growth, I thrive in collaborative settings. Beyond coding, my interests span from 
                        watching movies to exploring new places, fishing, and camping activities that fuel my creativity.
                    </p>
                    <p className='py-3 text-lg dark:font-light'>
                        Before venturing into development, my background in the cleaning and property maintenance sector 
                        instilled essential <mark className='bg-yellow-200'>soft skills</mark> like <mark className='bg-yellow-200'>teamwork, adaptability, communication, empathy, 
                        time management, and continuous learning</mark>. Consistently delivering work marked by completeness 
                        and tidiness earned me accolades from superiors.
                    </p>
                    <p className='py-3 text-lg dark:font-light'>
                        Thank you for delving into my Full Stack Development journey. Open to <mark className='bg-yellow-200'>new opportunities, collaborations, 
                        and meaningful discussions</mark>, I invite you to connect. Whether it's discussing <mark className='bg-yellow-200'>projects or shared 
                        interests</mark>, feel free to reach out. I'm excited about the potential ways we can collaborate for remarkable results.
                    </p>
                    <p className='py-3 text-lg dark:font-light'><mark className='bg-yellow-200'>Let's connect ! 😊</mark></p>
                    
                </div>
                
            </div>
        </main>   
       
    );
};

export default About;