import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Showcase } from "./components/Showcase";
import { Video } from "./components/Video";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Showcase />
      <Video />
    </>
  );
}

export default App;
