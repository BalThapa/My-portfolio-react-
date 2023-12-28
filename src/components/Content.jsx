import React from 'react';
import Card1 from './ui/Card1';
import About from '../assets/About.png'


const Content = () => {
    
    return (
        <div>
            <h1>What's inside?</h1>
        <Card1
            image={About}
            title="About-me"
            subtitle="This is the description of my journey to the software developing field"

        />
        
        </div>
        
    );
};

export default Content;