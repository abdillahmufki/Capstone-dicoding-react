import React from "react";
import { Link } from "react-router-dom";
import {
  GoCodeOfConduct,
} from "react-icons/go";
import { FaHouse, FaBookBookmark, FaPersonFallingBurst, FaAddressBook, FaInfo, FaArrowRightToBracket } from "react-icons/fa6";

function Sidebar() {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <FaHouse className="w-5 h-5" />
              <span className="ms-3">Beranda</span>
            </Link>
          </li>
          <li>
            <Link
              to="/edukasi"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <FaBookBookmark className="w-5 h-5" />
              <span className="flex-1 ms-3 whitespace-nowrap">Edukasi</span>
            </Link>
          </li>
          <li>
            <Link
              to="/laporan"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <FaPersonFallingBurst className="w-5 h-5" />
              <span className="flex-1 ms-3 whitespace-nowrap">Laporan Bencana</span>
            </Link>
          </li>
          <li>
            <Link
              to="/bantuan"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <GoCodeOfConduct className="w-5 h-5" />
              <span className="flex-1 ms-3 whitespace-nowrap">Platform Bantuan</span>
            </Link>
          </li>
          <li>
            <Link
              to="/kontak"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <FaAddressBook className="w-5 h-5" />
              <span className="flex-1 ms-3 whitespace-nowrap">Kontak</span>
            </Link>
          </li>
          <li>
            <Link
              to="/tentangkami"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <FaInfo className="w-5 h-5" />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Tentang
              </span>
            </Link>
          </li>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <li>
            <Link
              to={'/Login'}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <FaArrowRightToBracket />
              <span className="flex-1 ms-3 whitespace-nowrap">Masuk</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
