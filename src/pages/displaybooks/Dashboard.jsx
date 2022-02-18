import React from 'react';
import DisplayBook from '../../components/displaybook/DisplayBook';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { CartService } from '../../services/CartService';
import { wishlistService } from '../../services/WishlistService';

function Dashboard() {

  const [wishquantity,setWishquantity]=React.useState(0)
 
  const [wishlist,setWishlist] = React.useState([])
  
const getwishlist =()=>{
  wishlistService.getWishlist().then((result)=>{
    setWishlist(result.data.data)
    setWishquantity(result.data.data.length)

}).catch(()=>{

})
}
  return <div>
    <div className='dashboard'>
      <Header  wishquantity={wishquantity}/>
      <DisplayBook  wishlist={wishlist}  getwishlist={getwishlist}/>
      <Footer/>
    </div>
  </div>;
}

export default Dashboard;
