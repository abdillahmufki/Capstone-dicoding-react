import React from "react";

function HeaderSection({ title, description }) {
  return (
    <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
        {title}
      </h2>
      <p className="text-gray-500 sm:text-xl dark:text-gray-400  text-center">
        {description}
      </p>
    </div>
  );
}

export default HeaderSection;
