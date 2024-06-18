import React, { useState, useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import Swal from 'sweetalert2';

// Fix for default icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function LocationMarker({ setCoordinates, setAddress }) {
  const [position, setPosition] = useState(null);

  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      setCoordinates(e.latlng);
      fetchAddress(e.latlng);
    },
    locationfound(e) {
      map.setView(e.latlng, 13);
    },
  });

  useEffect(() => {
    map.locate({ setView: true, maxZoom: 13 });
  }, [map]);

  const fetchAddress = async (latlng) => {
    const { lat, lng } = latlng;
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const address = response.data.display_name;
      setAddress(address);
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  return position === null ? null : <Marker position={position}></Marker>;
}

function FormLaporanUser() {
  const [coordinates, setCoordinates] = useState({ lat: "", lng: "" });
  const [address, setAddress] = useState("");
  const [magnitude, setMagnitude] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:4000/token", {
        withCredentials: true,
      });
      setToken(response.data.accessToken);
    } catch (error) {
      console.log(error);
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const entry = {
      latitude: coordinates.lat,
      longitude: coordinates.lng,
      address: address,
      description: deskripsi,
      strength: magnitude,
    };
    console.log("data ", entry);
    try {
      const response = await axios.post(
        "http://localhost:4000/reports",
        entry,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      console.log("Data berhasil ditambahkan:", response.data);
      // Menampilkan SweetAlert sukses
      Swal.fire({
        title: 'Sukses!',
        text: 'Laporan kamu sudah berhasil dikirim. Terima kasih atas informasinya, pahlawan!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      // Mengatur ulang state
      setCoordinates({ lat: "", lng: "" });
      setAddress("");
      setMagnitude("");
      setDeskripsi("");
    } catch (error) {
      console.error("Terjadi kesalahan saat mengirim data:", error);
    }
  };

  return (
    <div className="max-w-screen-xl p-6 bg-white border border-gray-200 rounded-base shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
      <h1>Peta Lokasi</h1>
      <MapContainer
        center={[0, 0]}
        zoom={10}
        style={{ height: "60vh", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker
          setCoordinates={setCoordinates}
          setAddress={setAddress}
        />
      </MapContainer>
      <form
        id="mapForm"
        onSubmit={handleSubmit}
        className="max-w-screen-xl mx-auto mt-7"
      >
        <input
          type="hidden"
          id="latitude"
          name="latitude"
          value={coordinates.lat}
          readOnly
        />
        <input
          type="hidden"
          id="longitude"
          name="longitude"
          value={coordinates.lng}
          readOnly
        />
        <div className="mb-5">
          <label
            htmlFor="magnitude"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Kekuatan Gempa Yang Dirasakan:
          </label>
          <select
            id="magnitude"
            name="magnitude"
            className="block w-full px-3 py-2 text-base leading-6 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            value={magnitude}
            onChange={(e) => setMagnitude(e.target.value)}
          >
            <option>Pilih tingkat gempa yang kamu rasakan</option>
            <option value="lemah">Lemah</option>
            <option value="sedang">Sedang</option>
            <option value="kuat">Kuat</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="impact"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Dampak yang ditimbulkan:
          </label>
          <input
            type="text"
            id="impact"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            name="impact"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Contoh : Bangunan mengalami retak, tembok retak, tanah ambles"
          />
          <p
            id="helper-text-explanation"
            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            *Jika tidak merasakan boleh anda kosongkan saja.
          </p>
        </div>
        <div className="mb-5">
          <label
            htmlFor="address"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Alamat:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            readOnly
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="text-white rounded-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark
           dark:focus:ring-blue-800"
        >
          Simpan Koordinat
        </button>
      </form>
    </div>
  );
}

export default FormLaporanUser;
