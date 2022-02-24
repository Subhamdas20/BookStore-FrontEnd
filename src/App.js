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
import ProtectedRoute from "./components/protectedroute/ProtectedRoute";


const wishlistContext = React.createContext();
const cartContext = React.createContext();
const stateContext = React.createContext();

function App() {

  return (
   <div>
    <Router>
    <Routes>
      <Route exact path="/" element={<Mainpage/>} />
      <Route  path="/dashboard" element={<Dashboard/>} />
      <Route exact path="/cart" element={<Cart/>} />
      <Route exact path="/checkout" element={<Checkout/>} />
      <Route exact path="/wishlist" element={<Wishlist/>} />
{/* 
      <ProtectedRoute  path="/dashboard" element={<Dashboard/>} />
      <ProtectedRoute exact path="/cart" element={<Cart/>} />
      <ProtectedRoute exact path="/checkout" element={<Checkout/>} />
      <ProtectedRoute exact path="/wishlist" element={<Wishlist/>} /> */}
      
      </Routes>
    </Router>
    
    </div>
   
  );
}

export default App;
