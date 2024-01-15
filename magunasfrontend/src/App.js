import { Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Category from './Components/Category';
import Products from './Components/Products';
import Cart from './Components/Cart';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/categories/:id' element={<Category />} />
        <Route path='/categories/:id/products/:productId' element={<Products />} />
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
      </CartProvider>
    </div>
   

  );
}

export default App;
