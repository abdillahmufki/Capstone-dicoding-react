import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import axios from "axios";
import PageHeader from "../components/PageHeader";

function InformationPage() {
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const position1 = [-7.394405448803541, 112.76565923151665];
  const position2 = [-7.391873213887621, 112.77027263110332];

  useEffect(() => {
    fetchAddress(position1, setAddress1);
    fetchAddress(position2, setAddress2);
  }, []);

  const fetchAddress = async (position, setAddress) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position[0]}&lon=${position[1]}`
      );
      setAddress(response.data.display_name);
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="bg-white dark:bg-gray-900 mt-16">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <PageHeader
            pageName="Data Earthquake"
            pageDescription="Stay informed with the latest updates and comprehensive data on earthquakes worldwide. Our platform provides real-time alerts, historical data, and detailed analysis to help you understand and prepare for seismic events."
          />
          <div className="grid grid-cols-1 sm:grid-cols-10 gap-4">
            <div className="col-span-1 sm:col-span-7">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-4">
                  <h2 className="font-bold text-2xl text-gray-800">
                    Peta Gempa
                  </h2>
                  <div className="h-96">
                    <MapContainer
                      center={position1}
                      zoom={13}
                      scrollWheelZoom={false}
                      style={{ height: "100%", width: "100%" }}
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={position1}>
                        <Popup>
                          <h3 className="font-bold">
                            {address1 ? address1 : "Loading address..."}
                          </h3>
                          <p>Pelapor : BMKG Indonesia</p>
                          <p>
                            Tingkat Gempa :{" "}
                            <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                              Bahaya
                            </span>
                          </p>
                          <p>Tanggal Laporan Gempa : 26 May 2024</p>
                        </Popup>
                      </Marker>
                      <Marker position={position2}>
                        <Popup>
                          <h3 className="font-bold">
                            {address2 ? address2 : "Loading address..."}
                          </h3>
                          <p>Pelapor : Danang Andrian</p>
                          <p>
                            Tingkat Gempa :{" "}
                            <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                              Bahaya
                            </span>
                          </p>
                          <p>Tanggal Laporan Gempa : 26 May 2024</p>
                        </Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 sm:col-span-3">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-4">
                  <h2 className="font-bold text-2xl text-gray-800">
                    Data Gempa
                  </h2>
                  <div className="mt-4">
                    <div className="mb-4">
                      <h1 className="text-gray-800 font-semibold text-sm">
                        {address1 ? address1 : "Loading address..."}
                      </h1>
                      <div className="flex justify-between mb-2">
                        <p className="text-gray-600">Tanggal Laporan</p>
                        <p className="text-gray-800">26 May 2024</p>
                      </div>
                      <div className="flex justify-between mb-2">
                        <p className="text-gray-600">Pelapor</p>
                        <p className="text-gray-800">BMKG Indonesia</p>
                      </div>
                      <div className="flex justify-between mb-2">
                        <p className="text-gray-600">Tingkat Gempa</p>
                        <p className="text-red-800 font-medium">Bahaya</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div>
                        <h1 className="text-gray-800 font-semibold text-sm">
                          {address2 ? address2 : "Loading address..."}
                        </h1>
                        <div className="flex justify-between mb-2">
                          <p className="text-gray-600">Tanggal Laporan</p>
                          <p className="text-gray-800">26 May 2024</p>
                        </div>
                        <div className="flex justify-between mb-2">
                          <p className="text-gray-600">Pelapor</p>
                          <p className="text-gray-800">BMKG Indonesia</p>
                        </div>
                        <div className="flex justify-between mb-2">
                          <p className="text-gray-600">Tingkat Gempa</p>
                          <p className="text-red-800 font-medium">Bahaya</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default InformationPage;
