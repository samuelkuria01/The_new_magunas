import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart'

function Category() {
  const { addItem} = useCart()
  // const [addedItems, setAddedItems] = useState([])
  const { id } = useParams();
  console.log('Category ID:', id);

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


//     // Function to check if an item has been added
// const isItemAdded = (itemId) => {
//   return addedItems.includes(itemId);
// };

// // Function to add an item to the addedItems list
// const addItemToAddedItems = (itemId) => {
//   setAddedItems((prevAddedItems) => [...prevAddedItems, itemId]);
// };



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


          <div className='servecontainer'>
          {products.map((product) => (
            <div className='col-11 col-sm-6 col-md-6 col-lg-2 mx-0 mb-4' key={product.id}>
              <div className='col'>
                <div className='card p-0 overflow-hidden shadow'>
              <Link to={`/categories/${id}/products/${product.id}`}>
                <img class="card-img-top" alt='maguu' src={product.image} />
              </Link>              
                <div className='producttext'>
                  <div>
                  <h5 className='productname'>{product.title}</h5>
                  <p className='pname'>Ksh: {product.price}</p>
                  <p>Product ID: {product.id}</p> {/* Add this line for debugging */}
                  </div>
                  <div className='addcart'>
                    <button onClick={()=> addItem(product)}>addtocart</button>
                  {/* <button
                            onClick={() => {
                              if (!isItemAdded(product.id)) {
                                addItem(product);
                                addItemToAddedItems(product.id);
                              }
                            }}
                            className={`cssbuttons-io-button ${isItemAdded(product.id) ? 'ordered' : ''}`}
                            disabled={isItemAdded(product.id)}
                          >
                            <span>{isItemAdded(product.id) ? 'Ordered' : 'Add'}</span>
                          </button> */}
                          
                    </div>
                </div>
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



