"use client";

import { Navbar } from "flowbite-react";
import { WiEarthquake } from "react-icons/wi";
import { Link } from "react-router-dom";

export function Component() {
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
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign In
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to={"/"}>
          <Navbar.Link
            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            active
          >
            Home
          </Navbar.Link>
        </Link>
        <Link to={"/"}>
          <Navbar.Link>Home</Navbar.Link>
        </Link>
        <Navbar.Dropdown>
          <Navbar.Link dropdownToggle>Services</Navbar.Link>
          <Navbar.DropdownMenu>
            <Link to="/information">
              <Navbar.DropdownItem>Earthquake Information</Navbar.DropdownItem>
            </Link>
            <Link to="/report">
              <Navbar.DropdownItem>Earthquake Reports</Navbar.DropdownItem>
            </Link>
            <Link to="/donation">
              <Navbar.DropdownItem>Donation Platform</Navbar.DropdownItem>
            </Link>
          </Navbar.DropdownMenu>
        </Navbar.Dropdown>
        <Link to={"/education"}>
          <Navbar.Link
            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            active
          >
            Education
          </Navbar.Link>
        </Link>
        <Link to={"/contact"}>
          <Navbar.Link
            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            active
          >
            contact
          </Navbar.Link>
        </Link>
        <Link to={"/about"}>
          <Navbar.Link
            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            active
          >
            About
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
