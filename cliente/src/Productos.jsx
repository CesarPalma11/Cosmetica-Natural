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
            <input
                className='searcher'
                autoComplete='off'
                type="search"
                placeholder="¿Que Buscas?"
                id="Buscador"
                value={q}
                onChange={(e) => setQ(e.target.value)}
            />
            
        </div>
        <div className='container-products'>
            
          <ul>
            {
              search(profileData).map((product, index) => {
                return (
                  <div className='container-styles'>
                  <li key={index}>
                    <Link 
                    className='container-link'
                    to={`/productos/${product.id}`}
                    >
                      <img src={product.images} alt={index}></img>
                      <h1 className='container-products-name'>{product.name}</h1>
                      <p className='price-products-soap-container'>${product.price}</p>
                    </Link>
                    <button className='btn-products-all' onClick={() => addtocart (product)}>Agregar al carrito</button>
                  </li>
                  </div>
                )
              })
            }
            </ul>
        </div>
    </main>
);
}


export default Productos;