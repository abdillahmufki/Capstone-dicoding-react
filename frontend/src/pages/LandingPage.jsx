import React from "react";
import SectionHero from "../components/SectionHero";
import SectionServices from "../components/SectionServices";
import SectionEducation from "../components/SectionEducation";
import SectionFAQ from "../components/SectionFAQ";

function LandingPage() {
  return (
    <main>
      <SectionHero />
      <SectionServices />
      <SectionEducation />
      <SectionFAQ />
    </main>
  );
}

export default LandingPage;
