import React, { useEffect, useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./Navbar";
import Rout from './rout';
import Footer from "./Footer";
import ListOfProducts from './Components/Products'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


   const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"))  || '[]'; 


function App() {

  //ADD TO CART
  const [cart, setCart] = useState([])
//PAGE PRODUCT
useEffect(() => {

  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  
  const [countProducts, setCountProducts] = useState(0);

  const [shop, setShop] = useState(ListOfProducts)
//CATEGORY FILTER
  const Filter = (x) =>
  {
    const catefilter = ListOfProducts.filter((product) =>
    {
      return product.cat === x
    })
    setShop(catefilter)
  }
  const allcatefilter = () =>
  {
    setShop(ListOfProducts)
  }

 //SEARCH FILTER SHOP
 const [search, setSearch] = useState ('')
  const searchlength = (search || []).length === 0
  const searchproduct = () =>
  {
  if (searchlength)
  {
    <h1>Ingrese algo</h1>
    setShop(ListOfProducts)
  }
  else {
    
 
    const searchfilter = ListOfProducts.filter((product) =>
    {
      return product.cat === search
    })
    setShop(searchfilter)
 
  }
}

//ADD TO CART 

const addtocart = (product) =>
{
  const exist = cart.find((x) => {
    
    return x.id === product.id
    
  })
  if (exist) 
  {
    toast.info("Este producto ya esta en el carrito", {
      position: "bottom-right"
    })
    setCart(cart.map((item) => {
      
      return item.id === product.id ? {...exist, qty: exist.qty + 1 } : item
      
    }))
  }
  else {

    setCart([...cart, {...product, qty:1}])
    toast.success(`${product.name} agregado al carrito`, {
      position: "bottom-right"
      
    })
    

  }
  
}



  return (
    <>
    
      <BrowserRouter>
      <ToastContainer />
      <React.Fragment>        
      <Navbar count={cart.length} setCountProducts={setCountProducts} search={search} setSearch={setSearch} searchproduct={searchproduct}/>     
      </React.Fragment>     
      <Rout countProducts={countProducts} setCountProducts={setCountProducts} setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>      
      <Footer />      
      </BrowserRouter>
      
      
    </>

  );
  }


export default App;
