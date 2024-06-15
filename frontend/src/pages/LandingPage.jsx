import React from "react";
import SectionHero from "../components/SectionHero";
import SectionServices from "../components/SectionServices";
import SectionEducation from "../components/SectionEducation";
import SectionContact from "../components/SectionContact";
import SectionFAQ from "../components/SectionFAQ";

function LandingPage() {
  return (
    <main>
      <SectionHero />
      <SectionServices />
      <SectionEducation />
      <SectionContact />
      <SectionFAQ />
    </main>
  );
}

export default LandingPage;
