import React from "react";
import FormLogin from "../components/FormLogin";

function LoginPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl min-h-screen sm:py-16 lg:px-6 flex items-center justify-center">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/K4mSJ7kc0As/600x800')",
            }}
          ></div>
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h1 className="pt-4 text-2xl font-bold text-center mb-1">
              Login Menu
            </h1>
            <p className="mb-4 text-sm text-center text-gray-500">
              Please log in to continue
            </p>
            <FormLogin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
