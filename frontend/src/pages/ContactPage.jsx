import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import PageHeader from "../components/PageHeader";

function ContactPage() {
  const [state, handleSubmit, resetForm] = useForm("xwkgdjlg"); // Ganti dengan ID formulir Anda
  const [alertShown, setAlertShown] = useState(false);

  useEffect(() => {
    if (state.succeeded && !alertShown) {
      toast.success("Terima kasih! Pesan Anda telah terkirim.");
      setAlertShown(true);
      resetForm();
    }
  }, [state.succeeded, alertShown, resetForm]);

  return (
    <>
      <ToastContainer />
      <Header />
      <section className="bg-white dark:bg-gray-900 mt-16">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <PageHeader
            pageName="Contact Us"
            pageDescription="Do you have a problem? Provide suggestions and criticism so that we continue to develop and get better by filling in the form below."
          />
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Nama Anda
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Masukkan nama anda"
                required
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email Anda
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Masukkan email anda"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Kategori
              </label>
              <select
                id="subject"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                name="subject"
              >
                <option defaultValue>
                  Pilih kategori pesan atau saran ingin kamu sampaikan
                </option>
                <option value="saran">Saran</option>
                <option value="Pesan atau permintaan fitur">Pesan atau permintaan fitur</option>
                <option value="Keluhan dan perbaikan">Keluhan dan perbaikan</option>
                <option value="Kerjasama mitra">Kerjasama mitra</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Pesan anda
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Tuliskan pesan anda ..."
                name="message"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                disabled={state.submitting}
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactPage;
