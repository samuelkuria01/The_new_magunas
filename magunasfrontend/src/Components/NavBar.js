import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';



function NavBar() {
   
    const { totalItems} = useCart()

  return (
    <div className='Homecontainer'>
        <div className='homebox1'>
        <img className='magunaforo' alt='maguna' src='../Images/magunalogo.png'></img>
        <div className='searchcont'>
            <input 
            type="text"
            placeholder='Search...'
            className='search-input'
            ></input>
            <i id='magnify' class="fa-solid fa-magnifying-glass fa-beat-fade"></i>
        </div>
        <div className='signcart'>
            <div>
               <p></p>
            <button className='signcartbtn'>SignIn</button>
            </div>
            <div className='carticon'>
                        <Link to='cart'> 
                          <i class="fa-solid fa-cart-shopping">
                            <h6>{totalItems}</h6> 
                              </i>
                        </Link> 
                  </div>
        </div>
        </div>

        <div className='homebox2'>
            <button>
               <Link to='/'> All</Link>
            </button>
            

            <button >
               <Link to='category/freshfoods'>Food Products</Link>
            </button>

            <button >
               <Link to='category/vegesproducts'> Fruits & Veges</Link>
            </button>

            <button >
               <Link to='categories/4'> Beverages</Link>
            </button>

            <button>
               <Link to='/categories/5'> liquor</Link>
            </button>
            <button>
               <Link to='category/households'> Cleaning & Households</Link>
            </button>

            <button>
               <Link to='categories/6'> Baby Products</Link>
            </button>

            <button>
               <Link to='category/cosmetics'>Beauty & Cosmetics</Link>
            </button>
            <button>
               <Link to='categories/7'>Electricals</Link>
            </button>

            
        </div>


        
    </div>
  )
}

export default NavBar;
