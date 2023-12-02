import React from 'react'
import './Home.css'



import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

const Home = () => {

  

  return (
    <div className='banner'>
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
        














        <div className='info_home'>
          <h3>Dulce Terroir</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut qui voluptas, 
            tempore dolorum dignissimos minima eligendi impedit ad deleniti fuga ut reprehenderit qua
            e molestias iusto quam rem neque cum enim.</p>
        </div>
        <div className='text_info'>
          <div className='info_global'>
            <img src='./img/img1.jpg' alt=''></img>
            
            </div>
          <div className='info_global'>
          <h1 className='titulo'>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem excepturi placeat dignissimos dolorem
              , accusamus cupiditate obcaecati vero reiciendis, facere necessitatibus laudantium,</p>
              <button>Saber más</button>
          </div>
          
        </div>

      <div className='global_container'>
        <Swiper className='carousel'
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      centeredSlides={true}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}

      
      /*
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            */

    >
      <div class="swiper-wrapper">
      <SwiperSlide><img src='./img/jabon2.jpeg' alt=''></img>
      
      </SwiperSlide>
      </div>
       <SwiperSlide><img src='./img/img3.jpeg' alt=''></img><h1>text2</h1></SwiperSlide>

      <SwiperSlide><img src='./img/img4.jpeg' alt=''></img><h1>text3</h1></SwiperSlide>
      
    </Swiper>
    
    </div>

    </div>
  )
}

export default Home