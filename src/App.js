
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';






function App() {
  return (
    <div className="App">
    <CartProvider>
    <BrowserRouter className='App_browser'>
    <NavBar />
    <Routes>
      <Route  path="/" element={<ItemListContainer  greeting={'♪✭Todo lo que necesitás para triunfar✭♪'}/>} />
      <Route  path="/category/:categoryId" element={< ItemListContainer greeting={'Productos por categoría'}/>} />
      <Route  path="/item/:itemId" element={<ItemDetailContainer />} />
      <Route path='/cart' element={<Cart />}/>
      <Route path='/checkout' element={<Checkout />} />
      <Route  path='*' element={<h1>404 NOT FOUND</h1>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </div>
  );
}

export default App;

