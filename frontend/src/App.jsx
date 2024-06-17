import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

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

function App() {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true); // New loading state
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:4000/token", {
        withCredentials: true,
      });
      const accessToken = response.data.accessToken;
      setToken(accessToken);

      const decode = jwtDecode(accessToken);
      setName(decode.name);
      setEmail(decode.email);

      console.log("token : ", response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading to false once the token is refreshed
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
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const checkRefreshTokenAvailable = () => {
    return token !== "";
  };

  const ProtectedRoute = ({ element: Component, ...rest }) => {
    if (loading) {
      return <div>Loading...</div>; // Display a loading indicator while loading
    }
    const isRefreshTokenAvailable = checkRefreshTokenAvailable();
    return isRefreshTokenAvailable ? <Component {...rest} /> : <Navigate to="/login" />;
  };

  return (
    <Routes>
      <Route path="/" element={<Layout logout={logout} />}>
        <Route index element={<LandingPage />} />
        <Route path="earthquake-information" element={<ProtectedRoute element={InformationPage} />} />
        <Route path="earthquake-reports" element={<ProtectedRoute element={ReportPage} />} />
        <Route path="donation-platform" element={<ProtectedRoute element={DonationPage} />} />
        <Route path="education" element={<ProtectedRoute element={EducationPage} />} />
        <Route path="contact" element={<ProtectedRoute element={ContactPage} />} />
        <Route path="about" element={<ProtectedRoute element={AboutPage} />} />
        <Route path="education/:slug" element={<ProtectedRoute element={DetailBlogPage} />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
