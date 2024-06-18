import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PageHeader from "../components/PageHeader";
import EarthquakeItem from "../components/EarthquakeItem";

function InformationPage() {
  const [localData, setLocalData] = useState(null); // For local earthquake reports
  const [bmkgData, setBmkgData] = useState(null); // For BMKG earthquake data

  // Fetch local earthquake data
  useEffect(() => {
    fetch("http://localhost:4000/reports")
      .then((response) => response.json())
      .then((data) => {
        setLocalData(data);
      })
      .catch((error) => {
        console.error("Error fetching local earthquake data:", error);
      });
  }, []);

  // Fetch BMKG earthquake data
  useEffect(() => {
    fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json")
      .then((response) => response.json())
      .then((data) => {
        setBmkgData(data.Infogempa.gempa);
      })
      .catch((error) => {
        console.error("Error fetching BMKG earthquake data:", error);
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
            <div className="w-full md:w-8/12 h-[400px] md:h-auto rounded md:p-4">
              <MapContainer
                center={[-0.789275, 113.921327]}
                zoom={4}
                className="h-full md:h-[calc(100vh-180px)] z-10 rounded"
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {localData &&
                  localData.map((earthquake) => (
                    <Marker
                      key={earthquake.id}
                      position={[
                        parseFloat(earthquake.latitude),
                        parseFloat(earthquake.longitude),
                      ]}
                    >
                      <Popup>
                        <h3 className="font-bold">{earthquake.address}</h3>
                        Pelapor : User
                        <br />
                        Strength: {earthquake.strength}
                        <br />
                        Description: {earthquake.description}
                        <br />
                        Date:{" "}
                        {new Date(earthquake.createdAt).toLocaleDateString(
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
                {bmkgData &&
                  bmkgData.map((earthquake) => (
                    <Marker
                      key={earthquake.Jam}
                      position={[
                        parseFloat(earthquake.Lintang),
                        parseFloat(earthquake.Bujur),
                      ]}
                    >
                      <Popup>
                        <h3 className="font-bold">{earthquake.Wilayah}</h3>
                        Pelapor : BMKG Indonesia
                        <br />
                        Magnitude: {earthquake.Magnitude} Mg
                        <br />
                        Date:{" "}
                        {new Date(earthquake.Tanggal).toLocaleDateString(
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
              <div className="h-[400px] md:h-[calc(100vh-180px)] overflow-y-scroll flex flex-col gap-2">
                {localData &&
                  localData.map((earthquake, index) => (
                    <EarthquakeItem
                      key={index}
                      index={index}
                      pengirim={"Masyarakat setempat"}
                      Wilayah={earthquake.address}
                      Magnitude={earthquake.strength}
                      Jam={earthquake.createdAt}
                      DateTime={earthquake.createdAt}
                    />
                  ))}
                {bmkgData &&
                  bmkgData.map((earthquake, index) => (
                    <EarthquakeItem
                      key={index}
                      index={index}
                      pengirim={"BMKG"}
                      Wilayah={earthquake.Wilayah}
                      Magnitude={earthquake.Magnitude}
                      Jam={earthquake.Jam}
                      DateTime={earthquake.Tanggal}
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
