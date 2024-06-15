import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PageHeader from "../components/PageHeader";
import EarthquakeItem from "../components/EarthquakeItem";

function InformationPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data); // Log the data to the console
      });
  }, []);

  return (
    <main>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto sm:px-6 lg:py-20 max-w-screen-xl px-6 py-12 sm:py-16">
          <div className="flex flex-wrap min-h-screen">
            <PageHeader
              pageName="Information Earthquake"
              pageDescription="Stay informed with the latest updates and comprehensive data on earthquakes worldwide. Our platform provides real-time alerts, historical data, and detailed analysis to help you understand and prepare for seismic events."
            />
            <div className="w-full md:w-8/12 h-[400px] rounded md:p-4">
              <MapContainer
                center={[-0.789275, 113.921327]}
                zoom={4}
                className="md:h-[calc(100vh-180px)] z-10 rounded"
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {data &&
                  data.Infogempa.gempa.map((earthquake) => (
                    <Marker
                      key={earthquake.Wilayah}
                      position={earthquake.Coordinates.split(",").map(Number)}
                    >
                      <Popup>
                        <h3 className="font-bold">{earthquake.Wilayah}</h3>
                        Pelapor : BMKG Indonesia
                        <br />
                        Magnitude: {earthquake.Magnitude}
                        <br />
                        Pukul : {earthquake.Jam}
                        <br />
                        Tanggal:{" "}
                        {new Date(earthquake.DateTime).toLocaleDateString(
                          "id-ID",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </Popup>
                    </Marker>
                  ))}
              </MapContainer>
            </div>
            <div className="w-full md:w-4/12 md:p-4 h-full">
              <div className="md:h-[calc(100vh-180px)] overflow-y-scroll flex flex-col gap-2">
                {data &&
                  data.Infogempa.gempa.map((earthquake, index) => (
                    <EarthquakeItem
                      key={index}
                      index={index}
                      Wilayah={earthquake.Wilayah}
                      Magnitude={earthquake.Magnitude}
                      Potensi={earthquake.Potensi}
                      Jam={earthquake.Jam}
                      DateTime={earthquake.DateTime}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default InformationPage;
