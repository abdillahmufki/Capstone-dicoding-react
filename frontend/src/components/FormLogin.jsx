import { Link, useNavigate } from "react-router-dom";
import UserInput from "../hooks/UserInput";
import { useState } from "react";
import axios from "axios";

function FormLogin() {
  const [email, onEmailChange] = UserInput("");
  const [password, onPasswordChange] = UserInput("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:4000/login",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <form className="px-8 pt-6 pb-8 bg-white rounded" onSubmit={Auth}>
      <p className="mb-4 text-center">{msg}</p>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={onEmailChange}
          required
          autoFocus
        />
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={onPasswordChange}
          required
        />
      </div>
      <div className="mb-6 text-center">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Log In
        </button>
      </div>
      <hr className="mb-6 border-t" />
      <div className="text-center">
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          {"Don't you have an account yet? "}
          <Link
            to="/register"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  );
}

export default FormLogin;
