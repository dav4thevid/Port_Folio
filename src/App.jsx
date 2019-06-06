
import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Workflow from "./components/Workflow";
import PortFolio from "./components/PortFolio"

import "./Stylesheet.css";

function App() {
  return (
    <div>
      <Navbar />
      <Body />
      <Workflow />
      <PortFolio />
    </div>
  );
}

export default App;
