import React from "react";

import Mainpage from "./pages/loginsignup/Loginsignup";
 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Dashboard from "./pages/displaybooks/Dashboard";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Wishlist from "./pages/wishlist/Wishlist";


const wishlistContext = React.createContext();
const cartContext = React.createContext();
const stateContext = React.createContext();

function App() {

  return (
   <div>
    <Router>
    <Routes>
      <Route exact path="/" element={<Mainpage/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/wishlist" element={<Wishlist/>} />
      
      </Routes>
    </Router>
    
    </div>
   
  );
}

export default App;
