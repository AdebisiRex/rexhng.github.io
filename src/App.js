import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import LandingPage from "./components/LandingPage";

import vector from "./components/resources/Vector.png";
import ing from "./components/resources/I4G.png";
import footer from "./components/resources/Footer text.png";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="all">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

          <hr />
        <footer className="align-items-center ">
          <img src={vector} alt="" />
          <img src={footer} alt="" />
          <img src={ing} alt="" />
        </footer>
      </div>
    </>
  );
};

export default App;
