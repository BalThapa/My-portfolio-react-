import React from 'react';


const Card1 = ({image, title, subtitle, link, width}) => {
    
    return (
        <section className='w-80 h-100  flex flex-col items-center justify-center p-5 text-center shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110'>
            <img src={image} alt={title} className=' w-44 h-44 '/>
            <h1 className='py-3 text-2xl lg:text-3xl'>{title}</h1>
            <p className='max-w-xl font-light text-gray-500 mb-10 text-sm md:text-base'>{subtitle}</p>
            <a href={link} className='text-blue-600 underline'>More info</a>
        </section>
    );
};

export default Card1;