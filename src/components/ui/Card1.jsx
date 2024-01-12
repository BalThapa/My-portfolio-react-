import React from 'react';


const Card1 = ({image, title, subtitle, link, linkName, width}) => {
    
    return (
        <section className='dark:bg-gray-800 bg-slate-100 w-80 h-100 flex flex-col items-center justify-center p-5 text-center shadow-md shadow-gray-500 dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110'>
            {/* <img src={image} alt={title} className=' w-44 h-44 '/> */}
            <h2 className='py-3 text-2xl'>{title}</h2>
            <p className='max-w-xl font-light text-gray-900 dark:text-white mb-10 text-sm md:text-base'>{subtitle}</p>
            <a href={link} className='text-blue-600 underline dark:text-blue-200'>{linkName}</a> 

            {width && (
            <div className="mb-6 h-5 w-full bg-neutral-200 dark:bg-neutral-600 rounded-md">
                <div className="h-5 bg-red-900 rounded-md" style={{width}}></div>
            </div> 
            )}                 
        </section>
    );
};

export default Card1;