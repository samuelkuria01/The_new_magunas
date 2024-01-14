import { Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Category from './Components/Category';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/categories/:id' element={<Category />} />
        <Route path='/categories/:id/products/:productId' element={<Products />} />
      </Routes>
     
    </div>
  );
}

export default App;
