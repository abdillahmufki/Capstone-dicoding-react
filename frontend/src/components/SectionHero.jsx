import React from "react";
import { Link } from "react-router-dom";

function SectionHero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="pt-[60px]">
        <div className="lg:flex lg:gap-8 lg:h-screen lg:items-center lg:py-0 py-12 md:py-20 px-4 sm:px-6">
          <div className="mx-auto basis-1/2 lg:text-left md:pb-16 pb-10 text-center">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white mx-auto">
              Stay Informed About Earthquakes
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 mx-auto">
              From real-time alerts to comprehensive safety tips, people
              worldwide rely on our platform to stay prepared and safe.
            </p>
            <div className="flex flex-col flex-nowrap gap-4 lg:justify-start max-w-xs sm:flex-row sm:justify-center sm:max-w-md mx-auto">
              <Link
                to="/earthquake-information"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get Information
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link
                to="/earthquake-reports"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Report Earthquake
              </Link>
            </div>
          </div>
          <div className="basis-1/2">
            <img
              className="object-cover"
              src="/hero-img.jpg"
              alt="mockup"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
