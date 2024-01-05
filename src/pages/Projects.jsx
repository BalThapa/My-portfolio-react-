import React from 'react';
import Card2 from '../components/ui/Card2';
import Card3 from '../components/ui/Card3';
//import Test from '../assets/videos/test.mp4';
import Prototype from '../assets/videos/portfolio-prototype.mp4';
import Portfolio from '../assets/videos/portfolio-drupal.mp4';
import SpeedGame from '../assets/videos/speedgame.mp4'; 
import Recipe from '../assets/videos/recipe-app.mp4'; 
import Shopping from '../assets/videos/shopping.mp4'; 
import Countries from '../assets/videos/countries.mp4'; 


const Projects = () => {
    return (
        <main className='bg-yellow-50 dark:bg-gray-900 text-gray-900 dark:text-white p-10 px-30 md:px-40 lg:px-52 '>
        <div >
            <h1 className='flex justify-center py-3 text-2xl lg:text-3xl uppercase font-bold text-red-900'>Skills</h1>
            <p className=' font-light text-gray-500 text-center'>
                My study at Business College, Helsinki provides me a lot of opportunities to complete various projects using various tool and technologies. 
                Along with those, i also have some of my own projects. One of my own project is this Portfolio. Amongst my school projects, below are some of
                 them with berief introduction and video clip. 
            </p>
        </div>
        <div className='flex flex-col gap-20 items-center mt-20'>
            <Card2
            title='Countries App'
            subtitle='This app is a simple wen application built with React. And a collection of information about diferent countries.
                     User can access informations like capital, population, currencies, weather etc. 
                     This application uses the information from restcountries.com. and weathermap. It is build with CSS, Reactjs, React Router, Redux Toolkit, Bootstrap
                    and features like React Router Dom, Firebase Axios etc are also featured.'
            video={Countries}
            link1='https://github.com/BalThapa/Countries-app'
            />    
        
            <Card3
            title='Portfolio(Drupal)'
            subtitle=" A portfolio crafted using the Bartik theme in Drupal 10 is a sleek, 
            multipurpose website. It showcases a resume, contact form, projects, skills, 
            blog posts, and an 'about me' section. This theme provides a structured and 
            visually appealing layout to display your professional qualifications, past work, 
            expertise, and personal information. It offers an easy-to-navigate interface for visitors to explore your portfolio and 
            connect with you effortlessly.
            "
            video={Portfolio}
            link1='https://github.com/BalThapa/Portfolio-Drupal'
            />  

            <Card2
            title='Recipe-App'
            subtitle="This is a recipe-app build using basic react. From which hooks, components and props are used.
                    Various dependencies are installed and used as per the need. Methods like GET, POST are also used.
                    The main function of this app is to make the user able to browse the required recipe in cards, get detailed info by clicking the card link.
                     RecipeList and recipe detail is displayed with the recipe's origin country and its flag. Also added free form for the users to add their own recipe."
            video={Recipe}
            link1='https://github.com/BalThapa/Recipe-app_react'
            /> 

            <Card3
            title='Shopping-App'
            subtitle='This is a simple shopping app created using the react js, Hooks, FakeAPI and packages like react-bootstrap, 
                    react-redux etc. for drop down menu, button and icons. It has easy routing from page to page. Homepage with Discount informations and contact informations.
                    Product List page with all listed product along with detailed modle for each product. Seperate categories are included within drop-down menu which navigate the user to required category list.
                    User can add the item in shopping cart and delete if not needed.'
            video={Shopping}
            link1='https://github.com/BalThapa/Shopping-app'
            />  

            <Card2
            title='SpeedGame'
            subtitle='This project is a second version or refactoring of the Speed game which was created using Html, CSS & vanila javascript. React is used which
                     is way more simpler and shorter. This version is advanced in the way that there are some features added such as Conditions according to the 
                     score achieved, Level to be selected by the user where speed increases as per the level selected. Modles for level and score card.

            '
            video={SpeedGame}
            link1='https://github.com/BalThapa/SpeedGame-react'
            />     
        
            <Card3
            title='Portfolio (Prototype)'
            subtitle='This project is my first study project that is done using Html, CSS and Vanilla JavaScript. During this project i got to know how 
                        to assign header, footer, back to top button, navigation, Flex, Grid, add animations and effects and so on. First its intended to 
                        be a single page but later one gallary page is added where various sized images are added to practice grid effect.'
            video={Prototype}
            link1='https://github.com/BalThapa/MYportfolio'
            />    
        </div>
        <h2 className='flex justify-center lg:justify-end pt-10 lg:mr-40 text-2xl lg:text-xl font-bold text-red-900'>And many more ...</h2>
        </main>
    );
};

export default Projects;