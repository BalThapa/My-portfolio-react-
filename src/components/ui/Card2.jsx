import React from 'react';
import {FaGithub, FaLink} from 'react-icons/fa';


const Card2 = ({ video, title, subtitle, link1, link2}) => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row w-auto lg:w-auto items-center justify-start p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110 ">
      <video src={video} type='video/mp4' controls autoPlay muted className="w-80 rounded-xl mr-5 lg:w-96" />
      <div className="flex flex-col items-center text-center w-full">
        <h1 className="text-2xl lg:text-3xl ">{title}</h1>
        <p className="max-w-md font-light text-gray-500 mb-2 text-sm md:text-base pt-4">
          {subtitle}
        </p>
        <div className='flex gap-4 mt-3'>
        <a href={link1} target='_blank' rel='noopener noreferrer' className="text-blue-600 text-3xl underline">
          <FaGithub/>
        </a >
        {link2 && (
        <a href={link2} target='_blank' rel='noopener noreferrer' className="text-blue-600 text-3xl underline">
          <FaLink/>
        </a>
        )}
        </div>
      </div>
    </div>
  );
};

export default Card2;
