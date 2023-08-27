import React from "react";
import Navbar from "./components/navbar/Navbar";
import ContactUsSideBar from "./components/Contact Us Sidebar/ContactUsSideBar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <ContactUsSideBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
