import React, { useEffect, useState } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import InformationPage from "./pages/InformationPage";
import EducationPage from "./pages/EducationPage";
import DonationPage from "./pages/DonationPage";
import ReportPage from "./pages/ReportPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import DetailBlogPage from "./pages/DetailBlogPage";
import Layout from "./Layouts/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function App() {
  // const [token, setToken] = useState("");

  // useEffect(() => {
  //   refreshToken();
  // }, []);

  // const refreshToken = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:4000/token", {
  //       withCredentials: true,
  //     });
  //     setToken(response.data.accessToken);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // // Perbaikan: Fungsi ini sekarang memeriksa apakah token ada
  // const checkRefreshTokenAvailable = () => {
  //   return token !== "";
  // };

  // // Komponen ProtectedRoute
  // const ProtectedRoute = ({ element: Component, ...rest }) => {
  //   const isRefreshTokenAvailable = checkRefreshTokenAvailable();
  //   return isRefreshTokenAvailable ? <Component {...rest} /> : <Navigate to="/login" />;
  // };


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

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
      Navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="earthquake-information" element={<InformationPage />} />
        <Route path="/earthquake-reports" element={<ReportPage />} />
        <Route path="donation-platform" element={<DonationPage />} />
        <Route path="education" element={<EducationPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="education/:slug" element={<DetailBlogPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
