import React, {useState} from 'react'
import './Home.css'
import {ListOfProducts} from './Components/Products'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'




const Home = ({addtocart}) => {


/* BUTTON SEE MORE */
  const [visible] = useState(4);
  const [profileData] = useState(ListOfProducts);
  
  return (


    
    <div className='container-global-home'>
      <div className='banner-img'>
      <Swiper 
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      centeredSlides={true}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}

      
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            

    >
      <div class="swiper-wrapper">
      <SwiperSlide><img src='./img/Plantes-medicinals.jpg' alt=''></img>
      
      </SwiperSlide>
      <SwiperSlide><img src='./img/Plantes-2.jpg' alt=''></img>
      
      </SwiperSlide>
      <SwiperSlide><img src='./img/manzanilla.jpg' alt=''></img>
      
      </SwiperSlide>
      </div>
    
  
    </Swiper>
        
    </div>


              {/* SECTION ITEMS*/}
<div className='container'>
  <div className='row' style={{padding: '3rem',}}>
    
              {
              ListOfProducts.slice(0, visible ,profileData).map((product, index) => {
                return (
                  <div className='col-sm'>
                    
                    <div className='card' style={{width: '260px', height:'410px',marginLeft:'15px', border: '1px solid #000', borderRadius: '20px', marginBottom: '2.2rem'}}>
                      <div key={index}>
                        <Link 
                        className='container-link'
                        target='_parent'
                        to={`/productos/${product.id}`}
                        >
                          <img className='card-img-top' style={{marginTop: '.0rem', marginBottom:'-.7rem'}} src={product.images} alt={index}></img>
                          <div className='card-body'>
                          <p className='card-text' style={{color: 'black'}}>{product.name}</p>
                          <p className='card-text' style={{color :'black'}}>${product.price}</p>
                      
                      </div>
                        </Link>                   
                      </div>
                    </div>
                    
                  </div>
                  
                )
              })
            }
            <div className='link-products-home' style={{marginTop: '0rem', marginLeft:'0rem', marginBottom:'3rem'}}>
              <Link to='/productos' target='_parent' >
              <button type='button' className='btn btn-custom'>Ver todo</button>
              </Link>
            </div>
    
  </div>
</div>




<div className='container'>
  <div className='row' style={{padding: '3rem',}}>
    
              {
              ListOfProducts.slice(0, visible ,profileData).map((product, index) => {
                return (
                  <div className='col-md'>
                    <div className='card' style={{width: '260px',marginLeft:'15px', height:'410px', border: '1px solid #000', borderRadius: '20px', marginBottom: '2.2rem'}}>
                  <div key={index}>
                        <Link 
                        className='container-link'
                        target='_parent'
                        to={`/productos/${product.id}`}
                        >
                          <img className='card-img-top' style={{marginTop: '.0rem', marginBottom:'-.7rem'}} src={product.images} alt={index}></img>
                          <div className='card-body'>
                          <p className='card-text' style={{color: 'black'}}>{product.name}</p>
                          <p className='card-text' style={{color :'black'}}>${product.price}</p>
                      
                      </div>
                        </Link>                   
                      </div>
                    </div>
                  </div>
                  
                )
              })
            }
            <div className='link-products-home' style={{marginTop: '0rem', marginLeft:'0rem', marginBottom:'3rem'}}>
              <Link to='/productos' target='_parent' >
              <button type='button' className='btn btn-custom'>Ver todo</button>
              </Link>
            </div>
    
  </div>
</div>





<div className='container'>
  <div className='row' style={{padding: '3rem',}}>
    
              {
              ListOfProducts.slice(0, visible ,profileData).map((product, index) => {
                return (
                  <div className='col-md'>
                    <div className='card' style={{width: '260px', height:'410px',marginLeft:'15px', border: '1px solid #000', borderRadius: '20px', marginBottom: '2.2rem'}}>
                  <div key={index}>
                        <Link 
                        className='container-link'
                        target='_parent'
                        to={`/productos/${product.id}`}
                        >
                          <img className='card-img-top' style={{marginTop: '.0rem', marginBottom:'-.7rem'}} src={product.images} alt={index}></img>
                          <div className='card-body'>
                          <p className='card-text' style={{color: 'black'}}>{product.name}</p>
                          <p className='card-text' style={{color :'black'}}>${product.price}</p>
                      
                      </div>
                        </Link>                   
                      </div>
                    </div>
                  </div>
                  
                )
              })
            }
            <div className='link-products-home' style={{marginTop: '0rem', marginLeft:'0rem', marginBottom: '3rem'}}>
              <Link to='/productos' target='_parent' >
              <button type='button' className='btn btn-custom'>Ver todo</button>
              </Link>
            </div>
    
  </div>
</div>
{/* 
            <div className='row' style={{padding: '6rem', gap: '3rem', marginLeft: '10rem'}}>
              <div class="card" style={{width: '18rem'}}>
                <img src="./img/soap-two.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card" style={{width: '18rem'}}>
                <img src="./img/soap-two.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card" style={{width: '18rem'}}>
                <img src="./img/soap-two.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card" style={{width: '18rem'}}>
                <img src="./img/soap-two.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              </div>
              */}
    </div>


    
  )
}

export default Home