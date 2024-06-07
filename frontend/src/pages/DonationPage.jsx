import React from "react";
import CardBantuan from "../components/CardBantuan";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import PageHeader from "../components/PageHeader";

function DonationPage() {
  const platformBantuan = [
    {
      webUrl: "https://kitabisa.com",
      webName: "KitaBisa",
      webDescription:
        "Galang dana sekarang. Situs donasi dan menggalang dana (fundraising) untuk inisiatif, campaign dan program sosial. Mari bergotong royong membangun Indonesia!",
    },
    {
      webUrl: "https://www.gofundme.com",
      webName: "GoFundMe",
      webDescription:
        "Get what you need to help your fundraiser succeed on GoFundMe, whether you're raising money for yourself, friends, family, or charity.",
    },
    {
      webUrl: "https://www.sharinghappiness.org",
      webName: "SharingHappiness",
      webDescription:
        "SharingHappiness merupakan Platform Donasi dan Galang Dana sosial secara online dalam pengelolaan Yayasan Berbagi Bahagia.",
    },
    {
      webUrl: "https://wecare.id",
      webName: "WeCare",
      webDescription:
        "Platform penggalangan dana kesehatan Indonesia dan donasi online bantu pengobatan pasien serta aksi kemanusiaan lainnya.",
    },
    {
      webUrl: "https://www.indorelawan.org",
      webName: "Indorelawan",
      webDescription:
        "Indorelawan adalah wadah online untuk mempertemukan relawan dan organisasi/komunitas sosial.",
    },
    {
      webUrl: "https://www.causes.com",
      webName: "Causes",
      webDescription:
        "Causes.com is the easiest way to take action on issues you care about.",
    },
  ];
  return (
    <>
      <Header />
      <div className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6  mt-16">
          <PageHeader
            pageName="Donation Platform"
            pageDescription="Make a difference by contributing to earthquake relief efforts. Our donation platform allows you to support communities affected by earthquakes, funding emergency response, recovery initiatives, and rebuilding projects to help those in need."
          />
          {platformBantuan.map((platform) => (
            <CardBantuan
              key={platform.webName}
              url={platform.webUrl}
              name={platform.webName}
              description={platform.webDescription}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DonationPage;
