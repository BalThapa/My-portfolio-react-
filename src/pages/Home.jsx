import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <div>
            <main className="dark:bg-gray-900 text-gray-900 dark:text-white">
            <Hero/>
            <Content/>     
            </main>
        </div>
    );
};

export default Home;