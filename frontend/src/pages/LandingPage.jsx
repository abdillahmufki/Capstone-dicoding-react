import React from "react";
import SectionHero from "../components/SectionHero";
import SectionServices from "../components/SectionServices";
import SectionEducation from "../components/SectionEducation";
import SectionContact from "../components/SectionContact";
import SectionAbout from "../components/SectionAbout";

function LandingPage() {
  return (
    <main>
      <SectionHero />
      <SectionServices />
      <SectionEducation />
      <SectionContact />
      <SectionAbout />
    </main>
  );
}

export default LandingPage;
