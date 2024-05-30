import React from "react";
import { Link } from "react-router-dom";

function CardBlog({ title, imgUrl, postUrl }) {
  return (
    <Link
      to={postUrl}
      className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:max-w-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full rounded-t-lg h-52"
        src={imgUrl}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          asdfasdf
        </p>
      </div>
    </Link>
  );
}

export default CardBlog;
