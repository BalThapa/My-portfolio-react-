import React from 'react';
import Profile from '../assets/images/profile.jpeg';


const About = () => {
    return (
        
        <main className='bg-yellow-50 dark:bg-gray-900 text-gray-900 dark:text-white p-10 px-30 md:px-40 lg:px-80'>
            <h1 className='flex justify-center text-2xl lg:text-3xl uppercase font-bold text-red-900 mb-10'>About me</h1>
            <div className='flex flex-col-reverse md:flex-col-reverse lg:flex-row'>
                <div className='text-justify'>
                    <img src={Profile} alt="img" className='w-auto h-2/5 float-right text-wrap rounded-3xl ml-10 mt-5 mb-5 md:w-auto md:h-2/5 lg:w-auto lg:h-2/5'/>
                    <p className='py-5'>I am a dedicated student pursuing Full Stack Development at Business College Helsinki, with a passion for technology 
                                        and innovation. I am believer and have faith in power of trust and second chances. As I am near completion of my studies, 
                                        I am actively seeking opportunities to apply and enhance my skills through a challenging internship.
                    </p>
                    <p className='py-5'>My journey into the world of programming began just over a year ago. Since then, I have been on an exciting path of 
                                        discovery and growth. I have always been fascinated by technology and its ever-evolving nature. This fascination, 
                                        coupled with my natural problem-solving abilities, led me to explore the field of Full Stack Development.
                    </p>
                    <p className='py-5'>I've had the privilege of learning from incredible teachers and collaborating with supportive friends who have played a 
                                        significant role in shaping my journey.I have proficiency in HTML, CSS, React.js, JavaScript, PHP (Symfony), Tailwind CSS, 
                                        Bootstrap, Drupal. Along with these I also have some basic knowledge of Next.js and Typescript. I have used technologies 
                                        like Docker, Figma, Trello, Github, AWS, CI/CD pipeline etc.
                    </p>
                    <p className='py-5'>I bring a solid foundation in full stack development, coupled with a proactive attitude and a strong desire to learn and grow 
                                        in a professional environment. I thrive in collaborative settings, eager to tackle challenges, and contribute innovative solutions 
                                        to projects. Outside of coding, I enjoy watching movies, travelling to new places, fishing, camping and watch camping and survival videos. 
                                        These activities provide balance in my life and fuel my creativity.
                    </p>
                    <p className='py-5'>Before becoming developer, i worked in cleaning and property maintenance sector. I gained my soft skills like working in groups, 
                                        adaptability and flexibility, communication, empathy, time management and continuous learning etc from my past work life which 
                                        for sure can be used anywhere in any career. My works were complete and tidy so my superiors were always happy with my performance. 
                    </p>
                    <p className='py-5'>Thank you for taking the time to learn more about me and my journey in Full Stack Development. I'm always open to new opportunities,
                                         collaborations, and meaningful conversations. Whether you're interested in discussing potential projects or simply want to connect, 
                                         please feel free to reach out to me via the contact information provided. I look forward to connecting with you and exploring potential 
                                         ways we can work together to achieve remarkable results.
                    </p>
                    <p className='py-5'>Let's connect !😊</p>
                    
                </div>
                
            </div>
        </main>   
       
    );
};

export default About;