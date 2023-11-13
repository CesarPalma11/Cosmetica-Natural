import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./Navbar";
import Rout from './rout';
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Rout />
      </BrowserRouter>
    </>
  );
}

export default App;
