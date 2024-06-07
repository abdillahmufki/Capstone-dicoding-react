"use client";

import { Navbar, Dropdown } from "flowbite-react";
import { WiEarthquake } from "react-icons/wi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar fluid rounded>
      <Link to={"/"}>
        <Navbar.Brand>
          <WiEarthquake className="w-8 h-8" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            PusGO
          </span>
        </Navbar.Brand>
      </Link>
      <div className="flex md:order-2">
        <Link
          to="/login"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 me-2"
        >
          Sign In
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to={"/"}>
          <Navbar.Link className="block py-2 px-3 hover:bg-blue-700 hover:text-white text-black bg-transparent rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
            Home
          </Navbar.Link>
        </Link>
        <Dropdown inline label="Services">
          <Dropdown.Item>
            <Link to="/information">Earthquake Information</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/report">Earthquake Reports</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to={"/donation"}>Donation Platform</Link>
          </Dropdown.Item>
        </Dropdown>
        <Link to={"/education"}>
          <Navbar.Link className="block py-2 px-3 hover:bg-blue-700 hover:text-white text-black bg-transparent rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
            Education
          </Navbar.Link>
        </Link>
        <Link to={"/contact"}>
          <Navbar.Link className="block py-2 px-3 hover:bg-blue-700 hover:text-white text-black bg-transparent rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
            Contact
          </Navbar.Link>
        </Link>
        <Link to={"/about"}>
          <Navbar.Link className="block py-2 px-3 hover:bg-blue-700 hover:text-white text-black bg-transparent rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
            About
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
