import React from "react";
import { Link } from "react-router-dom";

function EarthquakeItem({ index, Wilayah, Magnitude, Jam, DateTime, pengirim }) {
  const jam = new Date(DateTime).toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Link
      to={`/detailgempa/${index}`}
      className="block max-w-screen-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transform transition duration-500 ease-in-out hover:scale-95"
    >
      <h5 className="font-bold text-gray-900 dark:text-white">{Wilayah}</h5>
      <p className="text-gray-700 dark:text-gray-400">
        Sumber Informasi : {pengirim}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Tingkat gempa atau magnitude : {Magnitude}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Pukul : {jam}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Tanggal :{" "}
        {new Date(DateTime).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
    </Link>
  );
}

export default EarthquakeItem;
