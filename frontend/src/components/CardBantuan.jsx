import React from "react";

function CardCardBantuan() {
  return (
    <div className="max-w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <img
          className="rounded-t-lg"
          src="https://70867a2ef4c36f4d1885-185a360f54556c7e8b9c7a9b6e422c6e.ssl.cf6.rackcdn.com/picture/campaign/2023-08-29/dQfBJfVakKgY.jpeg"
          alt=""
        />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Kebaikan Bermakna untuk Sesama
          </h5>
        </a>
        <span>Donasi Terkumpul</span>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-blue-700 dark:text-white">
              Rp. 12.000.000
            </span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">
              45%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCardBantuan;
