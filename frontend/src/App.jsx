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
import Layout from "./Layouts/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="earthquake-information" element={<InformationPage />} />
        <Route path="earthquake-reports" element={<ReportPage />} />
        <Route path="donation-platform" element={<DonationPage />} />
        <Route path="education" element={<EducationPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="education/:slug" element={<DetailBlogPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
