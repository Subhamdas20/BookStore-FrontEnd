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
import { CartService } from "./services/CartService";
import { wishlistService } from "./services/WishlistService";

const wishlistContext = React.createContext();
const cartContext = React.createContext();
const stateContext = React.createContext();

function App() {
  const [quantity,setQuantity]=React.useState(0)
  const [wishquantity,setWishquantity]=React.useState(0)
  const [cart, setCart] = React.useState([])
  const[wishlist,setWishlist]= React.useState([])
  const getCart =()=>{ 
    CartService.getcart().then((result)=>{ 
      setQuantity(result.data.data.length)
      setCart(result.data.data)
    }).catch(()=>{
    })
}
const getwishlist =()=>{
  wishlistService.getWishlist().then((result)=>{
    setWishquantity(result.data.data.length)
    setWishlist(result.data.data)
}).catch(()=>{

})
}
  return (
   <wishlistContext.Provider value={getwishlist}>
    <cartContext.Provider value={getCart}>
    <stateContext.Provider value={{quantity:[quantity,setQuantity],wishquantity:[wishquantity,setWishquantity],
    cart:[cart, setCart],wishlist:[wishlist,setWishlist]}}>

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
    </stateContext.Provider>
    </cartContext.Provider>
    </wishlistContext.Provider>
  );
}

export default App;
