import React from "react";

import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/information" element={<InformationPage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/donation" element={<DonationPage />} />
      <Route path="/report" element={<ReportPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/education/:slug" element={<DetailBlogPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
