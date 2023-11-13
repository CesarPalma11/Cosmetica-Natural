import React, { useState } from 'react'
import styled from 'styled-components'
import {Link } from 'react-router-dom'
import BurguerButton from './BurguerButton'
import './Navbar.css'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {

    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <header className='bg-header'>
          <div className='navbar'>
            <div className='container'>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <ul>
            <li><Link to='/home' className='link'>Inicio</Link></li>
            <li><Link to='/home' className='link'>Tienda</Link></li>
            <li><Link to='/home' className='link'>Sobre Nosotros</Link></li>
            <li><Link to='/home' className='link'>Contacto</Link></li>
          </ul>
            </div>
          </div>
        </div>
        </header>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  h2{
    color: #000;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  z-index: 1;
  padding: -.0rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  li{
    color: #000;
    text-decoration: none;
    margin-right: 4rem;
  }
  
  .links{
    display: flex;
    z-index: 2;
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      margin-left: 3.2rem;
      justify-content: space-between;
      color: #000;
      font-size: 1.2rem;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      li{
        font-size: 1rem;
        color: #000;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    li{
      font-size: 2rem;
      margin-top: 1rem;
      color: #000;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #fff;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 0 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
