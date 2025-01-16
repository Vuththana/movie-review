
import React from 'react';

const Card = ({ Links, title }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden ">
      <img className="w-full" src={Links.image} alt={title} />
      <div className="px-6 py-4">
        <div className="cursor-pointer hover:text-blue-400 font-bold text-3xl mb-2">{title}</div>
        <p className="text-gray-700 text-xl">
          <a href={Links.url} target="_blank" rel="noopener noreferrer">
            More Info
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
