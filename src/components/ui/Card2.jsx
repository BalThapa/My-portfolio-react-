import React from 'react';
import {FaGithub, FaLink} from 'react-icons/fa';


const Card2 = ({ video, title, subtitle, link1, link2, keywords}) => {
  return (
    <div className="flex bg-slate-100 flex-col dark:bg-gray-800 md:flex-col lg:flex-row h-auto p-5 lg:h-auto items-center justify-start shadow-md shadow-gray-500 dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110 ">
      <video src={video} type='video/mp4' controls autoPlay muted className="w-96 rounded-xl" />
      <div className="flex flex-col items-center text-center w-full p-5">
        <h2 className="text-2xl">{title}</h2>
        <p className='dark:text-green-500 text-gray-900 font-semibold justify-start pt-2 max-w-md'>Keywords: {keywords}</p>
        <p className="max-w-md text-gray-700 dark:text-white mb-2 text-sm md:text-base pt-4">
          {subtitle}
        </p>
        <div className='flex gap-4 mt-3'>
        <a href={link1} target='_blank' rel='noopener noreferrer' className="text-blue-600 dark:text-blue-200 text-3xl underline">
          <FaGithub className='cursor-pointer duration-300 hover:text-red-900 ease-in-out hover:scale-110'/>
        </a >
        {link2 && (
        <a href={link2} target='_blank' rel='noopener noreferrer' className="text-blue-600 dark:text-blue-200 text-3xl underline">
          <FaLink className='cursor-pointer duration-300 hover:text-red-900 ease-in-out hover:scale-110'/>
        </a>
        )}
        </div>
      </div>
    </div>
  );
};

export default Card2;
