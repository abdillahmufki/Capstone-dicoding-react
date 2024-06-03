import React from "react";
import SectionHero from "../components/SectionHero";
import SectionServices from "../components/SectionServices";
import SectionEducation from "../components/SectionEducation";
import SectionContact from "../components/SectionContact";
import SectionAbout from "../components/SectionAbout";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";

function LandingPage() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <SectionHero />
        <SectionServices />
        <SectionEducation />
        <SectionContact />
        <SectionAbout />
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
