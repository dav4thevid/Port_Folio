
import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Workflow from "./components/Workflow";
import PortFolio from "./components/PortFolio"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"

import "./Stylesheet.css";

function App() {
  return (
    <div>
      <Navbar />
      <Body />
      <Workflow />
      <PortFolio />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
