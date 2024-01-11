import React from 'react';
import Socials from '../components/Socials';

const Contact = () => {
    return (
        <main className='bg-yellow-50 dark:bg-gray-900 text-gray-900 dark:text-white p-10 px-30 md:px-40 lg:px-52 flex flex-col items-center'>
            <div> 
            <h1 className='flex justify-center py-3 text-2xl lg:text-3xl uppercase font-bold'>Contact</h1>
            <p className='max-w-xl text-center font-light text-gray-900 dark:text-white pt-5'>
                These are the ways to contact me. I am open to work as a full-time intern or Junior developer. Feel free to contact 
                me using your preferred medium. Hope to hear from you soon 😊.
            </p>
            </div>             
            <Socials/>
            <p className='max-w-xl text-center font-light dark:text-white text-gray-900 pt-5'>
                Always welcome to the positive feedbacks and kind words. Do send me your kind words and i make them my motto.
            </p>
            <div className='p-8 text-left w-96'>
                <form action="https://getform.io/f/023f4462-b9f3-4a86-8179-fe52ce06f66d" 
                         method='POST'>
                    <div className='gap-4 w-full'>
                        <div className='flex flex-col'>
                            <label for='name' className='capitalize text-sm py-2 font-extralight'>name</label>
                            <input 
                            type="text"
                            id='name' 
                            name='name'
                            className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark-text-white'/>
                        </div>
                        <div className='flex flex-col'>
                            <label for='phone' className='capitalize text-sm py-2 font-extralight'>phone</label>
                            <input 
                            type="text" 
                            name='phone'
                            id='phone'
                            className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark-text-white'/>
                        </div>
                        <div className='flex flex-col'>
                            <label for='email' className='capitalize text-sm py-2 font-extralight'>email</label>
                            <input 
                            type="email" 
                            name='email'
                            id='email'
                            className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark-text-white'/>
                        </div>
                        <div className='flex flex-col'>
                            <label for='message' className='capitalize text-sm py-2 font-extralight'>Message</label>
                            <textarea
                            name='message'
                            id='message'
                            rows='10'
                            className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark-text-white resize-none'></textarea>                            
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className='my-8 bg-gradient-to-r from-red-900 to-teal-500 text-white px-6 py-3 rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200'>Send Message</button>
                    </div>
                </form>                    
            </div> 
            
        </main>
    );
};

export default Contact;