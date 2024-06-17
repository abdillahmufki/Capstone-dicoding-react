import React from "react";
import FormRegister from "../components/FormRegister";
import { ToastContainer } from "react-toastify";

function RegisterPage() {
  return (
    <>
      <ToastContainer />
      <div className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl min-h-screen sm:py-16 lg:px-6 flex items-center justify-center">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* <div
            className="w-full h-auto bg-white hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"> */}
            <img src="sign-up.svg" width={500} />
            {/* </div> */}
            <div className="w-full lg:w-1/2 bg-white rounded-lg lg:rounded-l-none">
              <h1 className="pt-4 text-2xl font-bold text-center mb-1">
                Register Menu
              </h1>
              <p className="mb-4 text-sm text-center text-gray-500">
                Please register your account
              </p>
              <FormRegister />
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default RegisterPage;
