import React from 'react';


const Card1 = ({image, title, subtitle, link}) => {
    
    return (
        <section className='min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center'>
            <img src={image} alt="" />
            <h1 className='py-3 text-3xl lg:text-5xl'>{title}</h1>
            <p className='max-w-xl font-light text-gray-500 mb-10 text-sm md:text-base'>{subtitle}</p>
            <a href={link} className='text-royalBlue'>More info ...</a>
        </section>
    );
};

export default Card1;