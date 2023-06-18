import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

//Context
import ProductCoontextProvider from './context/ProductsContextProvider';
import CartContextProvider from './context/CartContextProvider';
//Components
import Home from './components/Home';
import {Store} from "./components/Store";
import { ProductDetails } from './components/ProductDetails';
import { ShopCart } from './components/ShopCart';
import CategoryWomen from './components/CategoryWomen';
import CategoryJewelery from './components/CategoryJewelery';
import CategoryElectronics from './components/CategoryElectronics';
import CategoryMen from './components/CategoryMen';
import Navbarr from './components/shared/Navbarr';



function App() {
  return (
    <ProductCoontextProvider>
      <CartContextProvider>
        <Navbarr />
      <Routes>
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/products" element={<Store/>}/>
        <Route path="/Cart" element={<ShopCart />}/>
        <Route path="/Category/jewelery" element={<CategoryJewelery />}/>
        <Route path="/Category/electronics" element={<CategoryElectronics />}/>
        <Route path="/Category/men" element={<CategoryMen />}/>
        <Route path="/Category/women" element={<CategoryWomen />}/>
        <Route path="/home" element={<Home />}/>
        <Route path='/*' element={<Navigate to="/Home"/>}/>
      </Routes>
      </CartContextProvider>
    </ProductCoontextProvider>
  );
}

export default App;
