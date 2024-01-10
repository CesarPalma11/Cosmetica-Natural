import React, { useContext, useState } from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios'
import './Cart.css'
import { Link } from 'react-router-dom'
import { FaTrashAlt } from "react-icons/fa";



export const useCartContext = () => useContext(Cart);
const Cart = ({cart, setCart, countProducts, setCountProducts}) => {

    const [preferenceId, setPreferenceId] = useState(null);    

    initMercadoPago("TEST-3a61d3c0-b41c-4ef1-98b3-59fbca3beffb", {
        locale: "es-AR",
    });
    
    
    const createPreference = async (cart, item, product) => {
        try {
            const response = await axios.post("http://localhost:4000/create_preference", {
                title: 'osjk',
                quantity: 1,
                price: 1,               
            });

            const { id } = response.data;
            return id;      
        } catch (error) {
            console.log(error);
        }
    };


    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setPreferenceId(id);
        }
    };



    const incqty = (product) =>
    {
        const exist = cart.find((x) =>
        {
            return x.id === product.id
        })
        if (exist)
        {
            setCart(cart.map((item) =>
            {
                return item.id === product.id ? {...exist, qty: exist.qty + 1} : item
            }))
        }
       
    
    }

    //decre
    const decqrty = (product) =>
    {
        const exist = cart.find((x) =>
        {
            return x.id === product.id
        })
        setCart(cart.map((item) =>
        {
            return item.id === product.id ? {...exist, qty: exist.qty - 1} : item
        }))
    }
    //removing products

    const removeproduct = (product) =>
    {
        const exist = cart.find((x) =>
        {
            return x.id === product.id
        })
        if(exist.qty > 0)
        {
            setCart(cart.filter((item) =>
            {
               return item.id !== product.id
            }))
        }
        
    }

   
    //total price

    const total = cart.reduce((price, item) => price + item.qty * item.price, 0)
  return (
    <>
    <div className='cart'>
        {
            cart.length === 0 &&
            <>
            <div className='empty_cart'>
                <h2>Tu carrito esta vacio</h2>
                
                <Link to='/Productos'><button>Comprar</button></Link>
            </div>
            </>
        }
        <div className='container'>
            {
                cart.map((item) =>
                {
                    return(
                        <>
                      
                        <div className='box'>
                            <div className='img_box'>
                                <img src={item.images} alt=''></img>
                            </div>
                            <div className='detail'>
                                <div className='info'>
                                <h4>{item.cat}</h4>
                                <h3>{item.name}</h3>
                                <p>${item.price}</p>
                                <p>Subtotal: ${item.price * item.qty}</p>
                                </div>                              
                                <div className='quantity'>
                                    <button onClick={() => incqty(item)}>+</button>
                                    <input type='number' value={item.qty} min="0"></input>
                                    <button className='deq' disabled={item.qty <= 1} onClick={() => decqrty(item)}>-</button>
                                </div>
                                
                                <div className='icon'>
                                    <li onClick={() => removeproduct(item)}><FaTrashAlt /></li>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
        <div className='bottom'>
            {
                cart.length > 0 &&
                <>
                <div className='total'>
                    <h4>Subtotal (Sin Envio): ${total}</h4>
                </div>
                <button onClick={handleBuy}>Iniciar Compra</button>
                {preferenceId && <Wallet initialization={{preferenceId : preferenceId}} />}
                </>
            }
        </div>
        
    </div>
    </>
  )
}

export default Cart