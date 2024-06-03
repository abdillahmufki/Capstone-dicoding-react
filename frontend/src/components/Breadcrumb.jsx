import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ titleSlug, title }) {
  return (
    <nav
      className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            to="/edukasi"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            Edukasi
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <a
              href="#"
              className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
            >
              Blog
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <Link
              to={`/edukasi/${titleSlug}`}
              className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
            >
              {title}
            </Link>
          </div>
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
