import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Showcase } from "./components/Showcase";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Showcase />
    </>
  );
}

export default App;
