import React from "react";
import { Route, Routes } from "react-router-dom";
import BerandaPage from "../../pages/BerandaPage";
import EdukasiPage from "../../pages/EdukasiPage";
import BantuanPage from "../../pages/BantuanPage";
import KontakPage from "../../pages/KontakPage";
import TentangKamiPage from "../../pages/TentangKamiPage";
import DetailBlogPage from "../../pages/DetailBlogPage";

function Main() {
  return (
    <div className="sm:ml-64">
      <div className="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <Routes>
          <Route path="/" element={<BerandaPage />} />
          <Route path="/edukasi" element={<EdukasiPage />} />
          <Route path="/bantuan" element={<BantuanPage />} />
          <Route path="/kontak" element={<KontakPage />} />
          <Route path="/tentangkami" element={<TentangKamiPage />} />
          <Route path="/detail1" element={<DetailBlogPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
