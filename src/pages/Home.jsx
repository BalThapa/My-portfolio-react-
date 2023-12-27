import React from 'react';
import Hero from '../components/Hero';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Hero/>
      <Skills/>
     </main>
        </div>
    );
};

export default Home;