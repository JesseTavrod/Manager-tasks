import { useState } from "react";
import "./index.css";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
