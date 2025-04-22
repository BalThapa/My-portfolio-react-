import React from 'react';
import Profile from '../assets/images/testprofile.jpeg';


const About = () => {
    return (
        <main className=' dark:bg-gray-900 text-gray-900 dark:text-white p-10 px-30 md:px-40 lg:px-80'>
            <h1 className='flex justify-center text-2xl lg:text-3xl uppercase font-bold mb-10 mt-20'>About me</h1>
            <div className='flex '>
                <div>
                    <img src={Profile} alt="img" className='w-2/5 float-right object-cover text-wrap rounded-3xl ml-10 mt-5 mb-5 md:w-2/5 lg:w-2/5' />
                    <div className='lg:mt-10'>
                    <p className='py-3 text-lg dark:font-light'>
                        I'm an enthusiastic Full Stack Developer, driven by a deep passion for <span className='font-semibold dark:text-green-500'>technology
                         and innovation</span>. As I have graduated and am ready for job market, 
                        I'm actively seeking position as a software developer to apply and elevate my skills.
                    </p>
                    
                    <p className='py-3 text-lg dark:font-light'>
                        My journey into programming began just over a year ago, sparking a thrilling 
                        path of discovery. The ever-evolving nature of technology and my 
                        innate <span className='font-semibold dark:text-green-500'>problem-solving abilities</span> led me to Full Stack Development.
                    </p>
                    <p className='py-3 text-lg dark:font-light'>
                        Guided by exceptional teachers and supported by collaborative friends, I've honed
                        proficiency in <span className='font-semibold dark:text-green-500'>HTML, CSS, React.js, JavaScript, Nodejs, PHP, Tailwind CSS, 
                        Bootstrap, Drupal</span>. I also possess basic knowledge of <span className='font-semibold dark:text-green-500'>Next.js and 
                        Typescript</span>, and have hands-on experience with <span className='font-semibold dark:text-green-500'>Docker, Figma, Trello, Github, 
                        AWS, and CI/CD pipeline</span>.
                    </p>
                    <p className='py-3 text-lg dark:font-light'>
                        With a robust foundation in full-stack development, coupled with a proactive mindset and a 
                        hunger for growth, I thrive in collaborative settings. Beyond coding, my interests span from 
                        watching movies to exploring new places, fishing, and camping activities that fuel my creativity.
                    </p>
                    <p className='py-3 text-lg dark:font-light'>
                        Before venturing into development, my background in the cleaning and property maintenance sector 
                        instilled essential <span className='font-semibold dark:text-green-500'>soft skills</span> like <span className='font-semibold dark:text-green-500'>teamwork, adaptability, communication, empathy, 
                        time management, and continuous learning</span>. Consistently delivering work marked by completeness 
                        and tidiness earned me accolades from superiors.
                    </p>
                    <p className='py-3 text-lg dark:font-light'>
                        Thank you for delving into my Full Stack Development journey. Open to <span className='font-semibold dark:text-green-500'>new opportunities, collaborations, 
                        and meaningful discussions</span>, I invite you to connect. Whether it's discussing <span className='font-semibold dark:text-green-500'>projects or shared 
                        interests</span>, feel free to reach out. I'm excited about the potential ways we can collaborate for remarkable results.
                    </p>
                    <p className='py-3 text-lg dark:font-light'><span className='font-semibold dark:text-green-500'>Let's connect ! </span> 😊</p>
                    </div>
                    
                </div>
                
            </div>
        </main>   
       
    );
};

export default About;