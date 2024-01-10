import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props, {search, setSearch, searchproduct} ) {


  

 

  return (
    <>
  
        
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <Link to='/' class="navbar-brand me-auto" ><img src='../img/logo_dt.png' alt='img' style={{width:'60px'}}></img></Link>
    

    <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header border-bottom">
        <h5 class="offcanvas-title fs-4" id="offcanvasNavbarLabel"><img src='../img/logo_dt.png' alt='img' style={{width:'60px'}}></img></h5>
        <button type="button" class="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
          <li class="nav-item mx-2">
            <Link to='/' className='nav-link active' aria-current="page">Inicio</Link>
          </li>
          <li class="nav-item mx-2">
            <Link to= '/products' className='nav-link'>Sobre Nosotros</Link>
          </li>
          <li class="nav-item dropdown mx-2">
            <Link to='/productos' className='nav-link dropdown-toggle' role='button' data-bs-toggle="dropdown">Tienda</Link>
            
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link to='/productos' class="dropdown-item">Jabones</Link></li>
              <li><Link to='/' class="dropdown-item" >Blanqueadores</Link></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><Link to='/' class="dropdown-item">¿Como usarlos?</Link></li>
            </ul>
          </li>
          <li class="nav-item mx-2">
            <Link to= '/contacto' className='nav-link'>Contacto</Link>
          </li>
        </ul>
      </div>
    </div>

    {/*------------------ + BAG COUNT CART + ---------------- */}
         
  <Link to="/cart">
          <div className='nav-bag'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="25"
            fill="currentColor"
            className="bi bi-handbag-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
          </svg>
          <span className='bag-quantity'>
          <sup>{props.count || ''}</sup>
          </span>
          </div>
      </Link>
      {/*------------------ - BAG COUNT CART - ---------------- */}

      <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" style={{marginTop:'-2rem'}} >
      <span class="navbar-toggler-icon" style={{border: 'none'}}></span>
    </button>
  </div>
</nav>

      
    </>
  );
}

export default Navbar;