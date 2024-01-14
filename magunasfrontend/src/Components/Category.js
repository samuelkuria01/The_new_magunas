import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Category() {
  const { id } = useParams();
  console.log('Category ID:', id);

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/categories/${id}/products`);
        if (!response.ok) {
          throw new Error(`Error fetching data. Status: ${response.status}`);
        }
        const data = await response.json();

        console.log('Received Data:', data);

        setProducts(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setError(e.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className='categorycontainer'>

<div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>

<div className='categoryheader'>
        <h2>category name</h2>
        <div className='searchcont'>
            <input 
            type="text"
            placeholder='Search...'
            className='search-input'
            ></input>
            <i id='magnify' class="fa-solid fa-magnifying-glass fa-beat-fade"></i>
        </div>
        </div>


          <div className='productcontainer'>
          {products.map((product) => (
            <div className='categorycards' key={product.id}>
              <div className='catecard-wrapper'>
              <Link to={`/categories/${id}/products/${product.id}`}>
                <img alt='maguu' src={product.image} />
              </Link>              
                <div className='producttext'>
                  <h5 className='productname'>{product.title}</h5>
                  <p className='pname'>Ksh: {product.price}</p>
                  <p>Product ID: {product.id}</p> {/* Add this line for debugging */}

                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      )}
    </div>
    
    </div>
  );
}

export default Category;



