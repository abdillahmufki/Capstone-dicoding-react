import React from "react";

function PageHeader({ pageName, pageDescription }) {
  return (
    <>
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        {pageName}
      </h2>
      <p className="mb-8 lg:mb-16 font-normal text-center text-gray-500 dark:text-gray-400 ">
        {pageDescription}
      </p>
    </>
  );
}

export default PageHeader;
