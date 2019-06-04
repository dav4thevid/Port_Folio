
import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Workflow from "./components/Workflow";

import "./Stylesheet.css";

function App() {
  return (
    <div>
      <Navbar />
      <Body />
      <Workflow />
    </div>
  );
}

export default App;
