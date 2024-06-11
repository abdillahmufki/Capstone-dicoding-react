import React from "react";

function CardCardBantuan({ url, name, description, image }) {
  return (
    <a
      href={url}
      target="_blank"
      className="block max-w-screen-2xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4"
    >
      <div className="w-full h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        {name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
        {description}
      </p>
    </a>
  );
}

export default CardCardBantuan;
