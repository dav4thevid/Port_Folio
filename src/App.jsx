
import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Workflow from "./components/Workflow";
import PortFolio from "./components/PortFolio"
import AboutMe from "./components/AboutMe"

import "./Stylesheet.css";

function App() {
  return (
    <div>
      <Navbar />
      <Body />
      <Workflow />
      <PortFolio />
      <AboutMe />
    </div>
  );
}

export default App;
