import { useState } from "react";
// import Login from "./pages/Login";
import './index.css';
import Dashboard from "./pages/Dashboard";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
     <Dashboard />
    </>


  );
}

export default App;
