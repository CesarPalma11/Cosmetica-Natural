import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./Navbar";
import Rout from './rout';
import Footer from "./Footer";
import './App.css'
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Rout />
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
