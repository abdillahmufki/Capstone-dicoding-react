import React from "react";
import HeaderSection from "./HeaderSection";

function SectionAbout() {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <HeaderSection
            title="About us"
            description="We are dedicated to delivering accurate and timely information on
          earthquakes, as well as education that can help communities better
          prepare for and respond to natural disasters."
          />
          <div className="my-8 xl:mb-16 xl:mt-12">
            <img
              className="w-full h-[500px] object-cover"
              src="https://cdn.pixabay.com/photo/2018/02/20/13/46/earthquake-3167693_1280.jpg"
              alt=""
            />
          </div>
          <div className="mx-auto max-w-2xl space-y-6">
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Indonesia, yang terletak di pertemuan tiga lempeng tektonik,
              rentan terhadap gempa bumi. Data BMKG menunjukkan peningkatan
              signifikan dalam jumlah gempa yang terjadi, namun kesadaran dan
              penanganan gempa yang tepat masih menjadi tantangan.
            </p>

            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              PusGO hadir sebagai solusi untuk mengatasi hal ini. Kami adalah
              platform edukasi dan informasi gempa bumi yang dibangun oleh tiga
              orang profesional untuk memberikan informasi yang akurat dan mudah
              dipahami.
            </p>

            <p className="text-base font-semibold text-gray-900 dark:text-white">
              Tujuan kami:
            </p>
            <ul className="list-outside list-disc space-y-4 pl-4 text-base font-normal text-gray-500 dark:text-gray-400">
              <li>
                Meningkatkan kesadaran masyarakat tentang bahaya gempa bumi dan
                pentingnya tindakan pencegahan.
              </li>
              <li>
                Memberikan informasi dan edukasi yang efektif dan efisien untuk
                membantu masyarakat menghadapi gempa.
              </li>
              <li>
                Menyediakan platform yang mudah diakses untuk mendapatkan
                informasi gempa terbaru dan pelaporan gempa.
              </li>
            </ul>
            <p className="text-base font-semibold text-gray-900 dark:text-white">
              Dengan PusGO, Anda dapat:
            </p>
            <ul className="list-outside list-disc space-y-4 pl-4 text-base font-normal text-gray-500 dark:text-gray-400">
              <li>
                Belajar tentang gempa bumi melalui konten edukasi yang mudah
                dipahami.
              </li>
              <li>Memahami cara penanganan yang tepat saat terjadi gempa.</li>
              <li>
                Mendapatkan informasi gempa terbaru dari sumber terpercaya.
              </li>
              <li>Melaporkan gempa dengan mudah dan cepat.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionAbout;
