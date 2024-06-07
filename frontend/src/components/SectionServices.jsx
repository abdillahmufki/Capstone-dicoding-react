import React from "react";
import { FaBullhorn, FaHandshakeSimple } from "react-icons/fa6";
import { RiEarthquakeFill } from "react-icons/ri";
import HeaderSection from "./HeaderSection";

function SectionServices() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <HeaderSection
          title="Services"
          description=" We provide up-to-date earthquake reports and comprehensive
            information on earthquakes worldwide to help you stay alert and
            prepared."
        />
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <RiEarthquakeFill className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Earthquake Information
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Stay informed with the latest updates and comprehensive data on
              earthquakes worldwide. Our platform provides real-time alerts,
              historical data, and detailed analysis to help you understand and
              prepare for seismic events.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <FaBullhorn className="w-5 h-5 text-primary-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Earthquake Reports
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Receive detailed reports on recent and past earthquakes, including
              magnitude, location, depth, and impact assessments. Our reports
              are designed to keep you informed and aware of seismic activities
              in your area and around the globe.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <FaHandshakeSimple className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Donation Platform
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Make a difference by contributing to earthquake relief efforts.
              Our donation platform allows you to support communities affected
              by earthquakes, funding emergency response, recovery initiatives,
              and rebuilding projects to help those in need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionServices;
