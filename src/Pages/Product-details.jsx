import React from 'react'
import ListOfProducts from '../Components/Products';
import { useParams } from 'react-router-dom';
import './JabonDos.css'
import ReactImageMagnify from 'react-image-magnify';
const ProductDetails = ({addtocart}) => {
  
  const { productId } = useParams()

  const product = ListOfProducts.find( product => product.id === productId )


  return (

    <div className='container-product-details'>
      <div className='container-product-details-one'>
        <div id='imageMagnifyer'>
          <ReactImageMagnify {...{
              smallImage: {
                isFluidWidth: true,
                src:product.images,
                width: 500,
                height: 700
              },
              largeImage: {
                src: product.images,
                width: 1200,
                height:900
              },
            }}
          ></ReactImageMagnify>
          </div>
      </div>

      <div className='container-product-details-two'>
        
          <h1 className='h1-container-product-details'>{product.name}</h1>
          <p className='price-container-product-details'>${product.price}</p>
          <p>{product.desc}</p>
          <button className='btn-product-detail' onClick={() => addtocart (product)}>Agregar al carrito</button>
      </div>
    </div>
    
  )
}

export default ProductDetails