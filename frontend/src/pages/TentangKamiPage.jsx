import React from "react";
import Headline from "../components/Headline";

function TentangKamiPage() {
  return (
    <div className="max-w-[1100px] mx-auto">
      <Headline>Tentang Kami</Headline>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2023/02/08/23/18/earth-7777688_960_720.jpg"
          alt=""
          className="w-full h-[500px] object-cover"
        />
        <h1 className="text-2xl font-bold text-center py-5">
          PusGO: Lindungi Dirimu dari Gempa!
        </h1>
        <p>
          Indonesia, yang terletak di pertemuan tiga lempeng tektonik, rentan
          terhadap gempa bumi. Data BMKG menunjukkan peningkatan signifikan
          dalam jumlah gempa yang terjadi, namun kesadaran dan penanganan gempa
          yang tepat masih menjadi tantangan.
        </p>
        <br />
        <p>
          PusGO hadir sebagai solusi untuk mengatasi hal ini. Kami adalah
          platform edukasi dan informasi gempa bumi yang dibangun oleh tiga
          orang profesional untuk memberikan informasi yang akurat dan mudah
          dipahami.
        </p>
        <br />
        <ul className="list-disc">
          <header>Tujuan kami:</header>
          <li>
            Meningkatkan kesadaran masyarakat tentang bahaya gempa bumi dan
            pentingnya tindakan pencegahan.
          </li>
          <li>
            Memberikan informasi dan edukasi yang efektif dan efisien untuk
            membantu masyarakat menghadapi gempa.
          </li>
          <li>
            Menyediakan platform yang mudah diakses untuk mendapatkan informasi
            gempa terbaru dan pelaporan gempa.
          </li>
        </ul>
        <br />
        <ul className="list-disc">
          <header>Dengan PusGO, Anda dapat:</header>
          <li>
            Belajar tentang gempa bumi melalui konten edukasi yang mudah
            dipahami.
          </li>
          <li>Memahami cara penanganan yang tepat saat terjadi gempa.</li>
          <li>Mendapatkan informasi gempa terbaru dari sumber terpercaya.</li>
          <li>Melaporkan gempa dengan mudah dan cepat.</li>
        </ul>
        <br />
        <span>
          Bersama-sama, kita dapat meminimalisir dampak gempa dan membangun
          Indonesia yang lebih tangguh.
        </span>
      </div>
    </div>
  );
}

export default TentangKamiPage;
