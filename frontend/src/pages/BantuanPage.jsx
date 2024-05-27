import React from "react";
import Headline from "../components/Headline";
import CardBantuan from "../components/CardBantuan";

function BantuanPage() {
  return (
    <div>
      <Headline>Bantuan</Headline>
      <div className="grid md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        <CardBantuan />
        <CardBantuan />
        <CardBantuan />
        <CardBantuan />
        <CardBantuan />
        <CardBantuan />
      </div>
    </div>
  );
}

export default BantuanPage;
