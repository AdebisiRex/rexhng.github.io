import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import LandingPage from "./components/LandingPage";
import slack from "./components/resources/image.png";
import github from "./components/resources/github.png";
import vector from "./components/resources/Vector.png";
import ing from "./components/resources/I4G.png";
import footer from "./components/resources/Footer text.png";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <section>
        <img src={slack} alt="" width={35} />
        <img src={github} alt="" width={35} />
      </section>
      <footer>
        <img src={vector} alt="" />
        <img src={footer} alt="" />
        <img src={ing} alt="" />
      </footer>
    </>
  );
};

export default App;
