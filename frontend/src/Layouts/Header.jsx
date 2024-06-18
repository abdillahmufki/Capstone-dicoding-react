"use client";

import axios from "axios";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { WiEarthquake } from "react-icons/wi";
import { Link, Navigate } from "react-router-dom";
import Swal from 'sweetalert2'; // Langkah 1: Impor Swal
import { useNavigate } from 'react-router-dom';

function Header() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:4000/token", {
        withCredentials: true,
      });
      setToken(response.data.accessToken);
      const decode = jwtDecode(response.data.accessToken);
      setName(decode.name);
      setEmail(decode.email);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await axios.delete("http://localhost:4000/logout", {
        withCredentials: true,
      });
      setToken("");
      setName("");
      setEmail("");
      // Langkah 2: Tampilkan Sweet Alert
      Swal.fire({
        icon: 'success',
        title: 'Logout Berhasil',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        // Langkah 3: Navigasi setelah Sweet Alert
        navigate("/login");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar fluid border className="fixed top-0 right-0 left-0 z-50">
      <Navbar.Brand as={Link}>
        <WiEarthquake className="w-8 h-8" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          PusGO
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 items-center">
        {token ? (
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{name}</span>
                <span className="block truncate text-sm font-medium">{email}</span>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
        ) : (
          <div className="flex md:order-2 items-center">
            <Link
              to="/login"
              className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign up
            </Link>
            <Navbar.Toggle />
          </div>
        )}
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          as={Link}
          to="/"
          className="block py-2 px-3 hover:bg-blue-700 hover:text-white rounded md:p-0 md:hover:text-blue-700 md:text-black"
        >
          Home
        </Navbar.Link>
        <Navbar className="block py-2 px-3 hover:bg-blue-700 hover:text-white rounded md:p-0 md:hover:bg-white md:hover:text-blue-700 md:text-black border-b border-gray-100 sm:border-none">
          <Dropdown inline label="Services">
            <Dropdown.Item as={Link} to="/earthquake-information">
              Earthquake Information
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/earthquake-reports">
              Earthquake Reports
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/donation-platform">
              Donation Platform
            </Dropdown.Item>
          </Dropdown>
        </Navbar>
        <Navbar.Link
          as={Link}
          to="/education"
          className="block py-2 px-3 hover:bg-blue-700 hover:text-white rounded md:p-0 md:hover:text-blue-700 md:text-black"
        >
          Education
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/contact"
          className="block py-2 px-3 hover:bg-blue-700 hover:text-white rounded md:p-0 md:hover:text-blue-700 md:text-black"
        >
          Contact
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/about"
          className="block py-2 px-3 hover:bg-blue-700 hover:text-white rounded md:p-0 md:hover:text-blue-700 md:text-black"
        >
          About
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
