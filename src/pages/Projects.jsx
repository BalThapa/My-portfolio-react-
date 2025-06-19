import React from 'react';
import Card2 from '../components/ui/Card2';
import Card3 from '../components/ui/Card3';
import Prototype from '../assets/videos/portfolio-html.mp4';
import Deboshine from '../assets/videos/deboshine.mp4';
import Portfolio from '../assets/videos/portfolio-drupal.mp4';
import SpeedGame from '../assets/videos/speedgame.mp4'; 
import Recipe from '../assets/videos/recipe-app.mp4'; 
import Shopping from '../assets/videos/shopping.mp4'; 
import Countries from '../assets/videos/countries.mp4'; 
import {MdArrowForward} from 'react-icons/md';


const Projects = () => {
    return (
        <main className=' dark:bg-gray-900 text-gray-900 dark:text-white p-10 px-30 md:px-40 lg:px-52 xl:px-52 '>
        <div className='mt-20'>
            <h1 className='flex justify-center py-3 text-2xl lg:text-3xl uppercase font-bold pb-10'>Projects</h1>
            <p className='dark:text-white text-gray-900 text-lg text-center'>
                My study at Business College, Helsinki provides me a lot of opportunities to complete various projects using various tool and technologies. 
                Along with those, i also have some of my own projects. One of my own project is this Portfolio. Amongst my school projects, below are some of
                 them with berief introduction and video clip. 
            </p>
        </div>
        <div className='flex flex-col gap-20 items-center mt-20'>
        
            <Card3
            title='Deboshine Project'
            keywords='React, Tailwind CSS, i18next, MailJs, Responsive Design'
            subtitle="Deboshine Project is a modern, responsive front-end web application built with React (Vite) and Tailwind CSS. It supports both English and Finnish languages using i18next, features a contact form integrated with MailJS for email delivery to Zoho, and is deployed on Vercel with a custom domain. The design is clean, mobile-friendly, and optimized for a seamless user experience across devices. It’s built for performance, scalability, and ease of customization."
            video={Deboshine}
            link1='https://github.com/BalThapa/Deboshine-project'
            link2='https://www.deboshine.fi/'
            />  

            <Card2
            title='Recipe-App'
            keywords='Components and props, GET & POST, Origin Country flag'
            subtitle="This is a recipe-app build using basic react. From which hooks, components and props are used.
                    Various dependencies are installed and used as per the need. Methods like GET, POST are also used.
                    The main function of this app is to make the user able to browse the required recipe in cards, get detailed info by clicking the card link.
                     RecipeList and recipe detail is displayed with the recipe's origin country and its flag. Also added free form for the users to add their own recipe."
            video={Recipe}
            link1='https://github.com/BalThapa/Recipe-app_react'
            link2='https://myrecipe-app.vercel.app/'
            /> 

            <Card3
            title='SpeedGame'
            keywords='Conditional Logic, User-selectable levels, Level and Score Cards modal'
            subtitle='This project is a second version or refactoring of the Speed game which was created using Html, CSS & vanila javascript. React is used which
                     is way more simpler and shorter. This version is advanced in the way that there are some features added such as Conditions according to the 
                     score achieved, Level to be selected by the user where speed increases as per the level selected. Modles for level and score card.

            '
            video={SpeedGame}
            link1='https://github.com/BalThapa/SpeedGame-react'
            link2='https://speed-game-react-gamma.vercel.app/'  
            />     
            
            <Card2
            title='Countries App'
            keywords='ReactJs, Redux Toolkit, React Router, APIs, Bootstrap.'
            subtitle='This app is a simple wen application built with React. And a collection of information about diferent countries.
                     User can access informations like capital, population, currencies, weather etc. 
                     This application uses the information from restcountries.com. and weathermap. It is build with CSS, Reactjs, React Router, Redux Toolkit, Bootstrap
                    and features like React Router Dom, Firebase Axios etc are also featured.'
            video={Countries}
            link1='https://github.com/BalThapa/Countries-app'
            
            /> 

            <Card3
            title='Shopping-App'
            keywords='React Hooks, FakeAPI, React-Bootstrap'
            subtitle='This is a simple shopping app created using the react js, Hooks, FakeAPI and packages like react-bootstrap, 
                    react-redux etc. for drop down menu, button and icons. It has easy routing from page to page. Homepage with Discount informations and contact informations.
                    Product List page with all listed product along with detailed modle for each product. Seperate categories are included within drop-down menu which navigate the user to required category list.
                    User can add the item in shopping cart and delete if not needed.'
            video={Shopping}
            link1='https://github.com/BalThapa/Shopping-app'
            link2='https://shopping-app-beta-eight.vercel.app/'
            /> 

            <Card2
            title='Portfolio (Prototype)'
            keywords='HTML, CSS, JavaScript, Flex, Grid'
            subtitle='This project is my first study project that is done using Html, CSS and Vanilla JavaScript. During this project i got to know how 
                        to assign header, footer, back to top button, navigation, Flex, Grid, add animations and effects and so on. First its intended to 
                        be a single page but later one gallary page is added where various sized images are added to practice grid effect.'
            video={Prototype}
            link1='https://github.com/BalThapa/MYportfolio'
            link2='https://balthapa.github.io/MYportfolio/'
            />        
        
            <Card3
            title='Portfolio(Drupal)'
            keywords='Portfolio, Drupal 10, Bartik Theme.'
            subtitle=" A portfolio crafted using the Bartik theme in Drupal 10 is a sleek, 
            multipurpose website. It showcases a resume, contact form, projects, skills, 
            blog posts, and an 'about me' section. This theme provides a structured and 
            visually appealing layout to display your professional qualifications, past work, 
            expertise, and personal information. It offers an easy-to-navigate interface for visitors to explore your portfolio and 
            connect with you effortlessly."
            video={Portfolio}
            link1='https://github.com/BalThapa/Portfolio-Drupal'
            />    
        </div>
        <div className='flex justify-center mt-5 lg:justify-end lg:mr-40 text-red-900'>
            <a 
                href='https://github.com/BalThapa' 
                target='_blank'
                rel='noopener noreferrer' className='flex w-56 items-center justify-center mt-10 bg-gradient-to-r from-red-900 to-teal-500 text-white py-2 rounded-lg '>
                <span className='flex items-center transition-transform duration-500 hover:translate-x-4'>
                    And Many More ...
                    <MdArrowForward className=' ml-2 text-white text-2xl '/>
                </span> 
            </a>
        </div>
        </main>
    );
};

export default Projects;