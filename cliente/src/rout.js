import React from 'react'
import { Routes, Route } from 'react-router';
import Cart from './Components/Cart';
import Home from './Home';
import Productos from './Productos';
import ProductDetails from './Pages/Product-details';
import NotFound from './Components/NotFound';

const Rout = ({shop, Filter, allcatefilter, addtocart, cart, setCart}) => {
  return ( 
    <>
    <Routes>
        <Route path='/' exact element={<Home addtocart={addtocart}/>}/>
        <Route path='/Productos' element={<Productos shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>}/>
        <Route path='/Productos/:productId' element={<ProductDetails addtocart={addtocart}/>}/>
        <Route path='/not-found' element={<NotFound/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}/>
        <Route path='*' element={<NotFound/>} />
    </Routes>
    
    </>
  )
}

export default Rout