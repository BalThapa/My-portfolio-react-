import React from 'react';

const Card2 = ({ image, title, subtitle, link, linkName, width }) => {
  return (
    <div className="flex w-full items-center justify-start p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110">
      <img src={image} alt={title} className="w-32 h-32 mr-5" />
      <div className="flex flex-col">
        <h1 className="text-2xl lg:text-3xl">{title}</h1>
        <p className="max-w-md font-light text-gray-500 mb-2 text-sm md:text-base">
          {subtitle}
        </p>
        <a href={link} className="text-blue-600 underline">
          {linkName}
        </a>
        {width && (
          <div className="mt-2 h-5 w-full bg-neutral-200 dark:bg-neutral-600 rounded-md">
            <div
              className="h-5 bg-red-900 rounded-md"
              style={{ width }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card2;
