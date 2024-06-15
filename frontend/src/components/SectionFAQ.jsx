import React, { useState } from "react";
import HeaderSection from "./HeaderSection";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

function SectionFAQ() {
  const [selected, setSelected] = useState(null);

  const onSelectEventHandler = (index) => {
    setSelected(selected === index ? null : index);
  };

  const faqs = [
    {
      question: "Apa itu PusGO?",
      answer:
        "PusGO adalah platform edukasi dan informasi gempa bumi yang bertujuan untuk meningkatkan kesadaran masyarakat tentang bahaya gempa bumi dan pentingnya tindakan pencegahan. Kami menyediakan informasi yang akurat dan mudah dipahami serta edukasi untuk membantu masyarakat menghadapi gempa.",
    },
    {
      question: "Apa saja yang bisa saya lakukan dengan PusGO?",
      answer:
        "Dengan PusGO, Anda dapat: Belajar tentang gempa bumi melalui konten edukasi yang mudah dipahami. Memahami cara penanganan yang tepat saat terjadi gempa. Mendapatkan informasi gempa terbaru dari sumber terpercaya. Melaporkan gempa dengan mudah dan cepat.",
    },
    {
      question: "Dari mana PusGO mendapatkan informasi gempa terbaru?",
      answer:
        "PusGO bekerja sama dengan sumber terpercaya, seperti Badan Meteorologi, Klimatologi, dan Geofisika (BMKG), untuk menyediakan informasi gempa terbaru yang akurat dan terpercaya.",
    },
    {
      question: "Apakah saya bisa melaporkan gempa melalui PusGO?",
      answer:
        "Ya, dengan PusGO, Anda dapat melaporkan gempa yang Anda rasakan dengan mudah dan cepat melalui platform kami.",
    },
    {
      question: "Mengapa penting untuk memahami penanganan gempa yang tepat?",
      answer:
        "Memahami penanganan gempa yang tepat sangat penting untuk melindungi diri Anda dan orang-orang di sekitar Anda. Pengetahuan ini dapat membantu Anda mengambil tindakan yang cepat dan tepat saat terjadi gempa, sehingga dapat mengurangi risiko cedera dan kerugian.",
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto">
      <HeaderSection
        title="Frequently asked questions"
        description="Welcome to our FAQ section! Here you'll find answers to common questions about earthquakes, safety tips, and seismology. If you have any other questions, feel free to contact us. We're here to help!"
      />
      <div>
        <div className="w-[768px] mx-auto">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div
                className="flex justify-between items-center border-b py-5 cursor-pointer"
                onClick={() => onSelectEventHandler(index)}
              >
                <h2 className="text-base font-semibold">{faq.question}</h2>
                <span>
                  {selected === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              <div
                className={`text-base font-normal leading-normal py-5 ${
                  selected === index ? "" : "sr-only"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionFAQ;
