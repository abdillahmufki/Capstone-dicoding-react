import React from "react";
import { Link } from "react-router-dom";

function EarthquakeItem({ index, Wilayah, Magnitude, Potensi, Jam, DateTime }) {
  return (
    <Link
      to={`/detailgempa/${index}`}
      className="block max-w-screen-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transform transition duration-500 ease-in-out hover:scale-95"
    >
      <h5 className="font-bold text-gray-900 dark:text-white">{Wilayah}</h5>
      <p className="text-gray-700 dark:text-gray-400">
        Sumber Informasi : BMKG Indonesia
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Magnitude: {Magnitude} - ({Potensi})
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Pukul : {Jam}
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
