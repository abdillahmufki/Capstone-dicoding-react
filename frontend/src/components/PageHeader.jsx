import React from "react";

function PageHeader({ pageName, pageDescription }) {
  return (
    <header className="mx-auto max-w-3xl mb-8 md:mb-16 text-center">
      <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        {pageName}
      </h1>
      <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
        {pageDescription}
      </p>
    </header>
  );
}

export default PageHeader;
