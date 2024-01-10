import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
const footer = () => {
  return (
    <div className='main-footer bg-body-tertiary'>
      <div className='container'>
        <div className='row'>
           {/*COLUMN 1 */}
           <div className='col-md-3 col-sm-6'>
            <h4>Contacto</h4>
            <ul className='list-unstyled'>
              <li>Buenos Aires<FiMapPin /></li>
              <li>+5491142433924</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
           </div>
           {/*COLUMN 2 */}
           <div className='col-md-3 col-sm-6'>
            <h4>lorem ipsum</h4>
            <ul className='list-unstyled'>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
           </div>

           {/*COLUMN 3 */}
           <div className='col-md-3 col-sm-6'>
            <h4>Redes Sociales</h4>
            <ul className='list-unstyled'>
              <li><a href='#' without rel='noreferrer'>Instagram<FaInstagram /></a></li>
              <li><a href='#' without rel='noreferrer'>Facebook<FaFacebook /></a></li>
              <li><a href='#' without rel='noreferrer'>TikTok<FaTiktok /></a></li>
            </ul>
           </div>
            {/*COLUMN 3 */}
          <div className='col-md-3 col-sm-6'>
            <h4>Redes Sociales</h4>
            <ul className='list-unstyled'>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
           </div>
        </div>
        {/* FOOTER BUTTOM*/}
        <div className='footer-bottom'>
          <p className='text-xs-center'>
            &copy;{new Date().getFullYear()} Dulce terroir - Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  )
}

export default footer