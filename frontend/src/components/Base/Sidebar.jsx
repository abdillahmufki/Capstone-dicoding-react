import React from "react";
import { Link } from "react-router-dom";
import {
  GoHome,
  GoBook,
  GoCodeOfConduct,
  GoMail,
  GoPeople,
  GoSignIn,
  GoSignOut,
} from "react-icons/go";

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
              <GoHome className="w-6 h-6" />
              <span className="ms-3">Beranda</span>
            </Link>
          </li>
          <li>
            <Link
              to="/edukasi"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <GoBook className="w-6 h-6" />
              <span className="flex-1 ms-3 whitespace-nowrap">Edukasi</span>
            </Link>
          </li>
          <li>
            <Link
              to="/bantuan"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <GoCodeOfConduct className="w-6 h-6" />
              <span className="flex-1 ms-3 whitespace-nowrap">Bantuan</span>
            </Link>
          </li>
          <li>
            <Link
              to="/kontak"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <GoMail className="w-6 h-6" />
              <span className="flex-1 ms-3 whitespace-nowrap">Kontak</span>
            </Link>
          </li>
          <li>
            <Link
              to="/tentangkami"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <GoPeople className="w-6 h-6" />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Tentang Kami
              </span>
            </Link>
          </li>
          <li>
            <a
              href=""
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <GoSignIn className="w-6 h-6" />
              <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <GoSignOut className="w-6 h-6" />
              <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
