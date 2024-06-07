import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

function InformationPage() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data); // Log the data to the console
      });
  }, []);

  return (
    <>
      <Header />
      <div className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6  mt-16">
          <PageHeader
            pageName="Data Earthquake"
            pageDescription="Stay informed with the latest updates and comprehensive data on earthquakes worldwide. Our platform provides real-time alerts, historical data, and detailed analysis to help you understand and prepare for seismic events."
          />
          <div className="flex flex-wrap justify-center">
            {data && data.Infogempa.gempa.map((earthquake) => (
              <PageHeader
                key={earthquake.Wilayah}
                location={earthquake.Wilayah}
                magnitude={earthquake.Magnitude}
                time={earthquake.Jam}
                date={earthquake.Tanggal}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <MapContainer
              center={[-0.789275, 113.921327]}
              zoom={4}
              style={{ height: "400px", width: "100%", borderRadius: "15px" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {data && data.Infogempa.gempa.map((earthquake) => (
                <Marker
                  key={earthquake.Wilayah}
                  position={earthquake.Coordinates.split(',').map(Number)}
                >
                  <Popup>

                    <h3 className="font-bold">
                      {earthquake.Wilayah}
                    </h3>
                    Pelapor : BMKG Indonesia
                    <br />
                    Magnitude: {earthquake.Magnitude}
                    <br />
                    Pukul : {earthquake.Jam}
                    <br />
                    Tanggal: {new Date(earthquake.DateTime).toLocaleDateString('id-ID', {
                      day: 'numeric', month: 'long', year: 'numeric'
                    })}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
      <h1 className="text-4xl tracking-tight text-center font-bold text-gray-900 dark:text-white mb-10">
        List Earthquake
      </h1>
      <div className="grid grid-cols-2 gap-4 px-12">
        {data && data.Infogempa.gempa.map((earthquake, index) => (
          <Link to={`/detailgempa/${index}`} className="block max-w-screen-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transform transition duration-500 ease-in-out hover:scale-95" key={index}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{earthquake.Wilayah}</h5>
            <p className="text-gray-700 dark:text-gray-400">
              Sumber Informasi : BMKG Indonesia
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Magnitude: {earthquake.Magnitude} - ({earthquake.Potensi})
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Pukul : {earthquake.Jam}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Tanggal : {new Date(earthquake.DateTime).toLocaleDateString('id-ID', {
                day: 'numeric', month: 'long', year: 'numeric'
              })}
            </p>
          </Link>
        ))}
      </div>
      <Footer />
    </>

  );
}

export default InformationPage;
