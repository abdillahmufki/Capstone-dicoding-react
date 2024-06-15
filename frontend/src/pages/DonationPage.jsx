import React, { useEffect, useState } from "react";
import CardBantuan from "../components/CardBantuan";
import PageHeader from "../components/PageHeader";
import { urlFor } from "../sanityImageUrl";
import Loader from "../components/Loader";
import { getDonationPosts } from "../utils/sanityAPI";

function DonationPage() {
  const [platformDonation, setPlatformDonation] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const platformData = await getDonationPosts();
      setPlatformDonation(platformData);
    }
    fetchData();
  }, []);

  return (
    <main>
      {platformDonation.length === 0 ? (
        <div className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl min-h-screen sm:py-16 lg:px-6 flex items-center justify-center">
            <Loader />
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-900">
          <div className="mx-auto sm:px-6 lg:py-20 max-w-screen-xl px-6 py-12 sm:py-16">
            <PageHeader
              pageName="Donation Platform"
              pageDescription="Make a difference by contributing to earthquake relief efforts. Our donation platform allows you to support communities affected by earthquakes, funding emergency response, recovery initiatives, and rebuilding projects to help those in need."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
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
      )}
    </main>
  );
}

export default DonationPage;
