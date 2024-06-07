import React from "react";

function PageHeader({ pageName, pageDescription }) {
  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <h1 className="text-4xl tracking-tight font-bold text-gray-900 dark:text-white mb-3">
        {pageName}
      </h1>
      <p className="text-gray-500 sm:text-lg dark:text-gray-400  text-center mb-3">
        {pageDescription}
      </p>
    </div>
  );
}

export default PageHeader;
