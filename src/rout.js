import React from 'react'
import { Routes, Route } from 'react-router';
import Home from './Home';
import Tienda from './Tienda';

const Rout = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Tienda' element={<Tienda/>}/>
    </Routes>
    </>
  )
}

export default Rout