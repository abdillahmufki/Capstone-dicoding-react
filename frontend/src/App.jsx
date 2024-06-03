import React from "react";
import "flowbite/dist/flowbite";
import Navbar from "./components/Base/Navbar";
import Sidebar from "./components/Base/Sidebar";
import Main from "./components/Base/Main";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Main />
    </>
  );
}

export default App;
