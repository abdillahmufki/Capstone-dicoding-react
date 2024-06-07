import React from "react";

function PageHeader({ pageName, pageDescription }) {
  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <h1 className="text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
        {pageName}
      </h1>
      <p className="text-gray-500 sm:text-xl dark:text-gray-400  text-center">
        {pageDescription}
      </p>
    </div>
  );
}

export default PageHeader;
