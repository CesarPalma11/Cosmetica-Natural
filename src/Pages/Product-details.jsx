import React from 'react'
import ListOfProducts from '../Components/Products';
import { useParams } from 'react-router';
import './JabonDos.css'
import ReactImageMagnify from 'react-image-magnify';
const ProductDetails = ({addtocart}) => {
  
  const { productId } = useParams()

  const product = ListOfProducts.find( product => product.id === productId )


  return (
    
    <div className='app'>
      <div className='details'>
        <div id='big-img'>
          <ReactImageMagnify {...{
              smallImage: {
                isFluidWidth: true,
                src:product.images,
                width: 500,
                height: 700
              },
              largeImage: {
                src: product.images,
                width: 600,
                height: 600
              },
            }}
          ></ReactImageMagnify>
          </div>
      

<div className='box'>
  <div className='row'>
      
        
          <h1 className='h1-container-product-details'>{product.name}</h1>
          <span>${product.price}</span>
          <p>{product.desc}</p>
          <button className='btn-cart' onClick={() => addtocart (product)}>Agregar al carrito</button>

          </div>
      </div>
    </div>
</div>
  )
}

export default ProductDetails