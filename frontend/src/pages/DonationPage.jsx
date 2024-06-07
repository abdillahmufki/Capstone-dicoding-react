import React, { useEffect, useState } from "react";
import CardBantuan from "../components/CardBantuan";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import PageHeader from "../components/PageHeader";
import { client } from "../client";
import { urlFor } from "../sanityImageUrl";

async function getBlogPosts() {
  const query = `*[_type == "post-donation"]`;
  const data = await client.fetch(query);
  return data;
}

function DonationPage() {
  const [platformDonation, setPlatformDonation] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const platformData = await getBlogPosts();
      setPlatformDonation(platformData);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <PageHeader
            pageName="Donation Platform"
            pageDescription="Make a difference by contributing to earthquake relief efforts. Our donation platform allows you to support communities affected by earthquakes, funding emergency response, recovery initiatives, and rebuilding projects to help those in need."
          />
          <div className="grid grid-cols-4 gap-4">
            {platformDonation.map((platform) => (
              <CardBantuan
                key={platform.name}
                url={platform.link}
                name={platform.name}
                description={platform.description}
                image={urlFor(platform.image).url()}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DonationPage;
