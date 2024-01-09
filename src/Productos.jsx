import React, { useState} from 'react'
import './Productos.css'
import { Link } from 'react-router-dom';
import ListOfProducts from './Components/Products';


const Productos = ({addtocart}) => {
  const [profileData] = useState(ListOfProducts);
const [q, setQ] = useState("");
const [searchTerm] = useState(["name", "cat"]);

function search(items) {
    return items.filter((item) => {
        return searchTerm.some((newItem) => {
            return (
                item[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(q.toLowerCase()) > -1
            );
        });
    });
}

return (
    <main>
        <div>
          <form className='d-flex' role='search'>
            <input
                className='form-control me-2'
                autoComplete='off'
                type="search"
                aria-label='Search'
                placeholder="¿Que Buscas?"
                id="Buscador"
                value={q}
                onChange={(e) => setQ(e.target.value)}
            />
          </form>
        </div>
        <div className='container'>
            <div className='row' style={{padding: '3rem'}}>
          
            {
              search(profileData).map((product, index) => {
                return (
                  <div className='col-md'>
                    <div className='card' style={{width: '260px', height:'490px',marginLeft:'15px', border: '1px solid #000', borderRadius: '20px', marginBottom: '2.2rem'}}>
                  <div key={index}>
                    <Link 
                    className='container-link'
                    target='_parent'
                    to={`/productos/${product.id}`}
                    >
                      <img  className='card-img-top' style={{marginTop: '-.0rem', marginBottom:'-.2rem'}} src={product.images} alt={index}></img>
                      <div className='card-body'>
                      <p className='card-text' style={{color: 'black'}}>{product.name}</p>
                      <p className='card-text' style={{color: 'black'}}>${product.price}</p>
                      </div>
                    </Link>
                    <div className='link-products-home' style={{marginTop: '0rem', marginLeft:'4rem', marginBottom:'3rem'}}>
                    <button className='btn btn-success' type='button' onClick={() => addtocart (product)}>Agregar al carrito</button>
                    </div>
                  </div>
                  </div>
                  </div>
                )
              })
            }
            
          </div>
        </div>
    </main>
);
}


export default Productos;