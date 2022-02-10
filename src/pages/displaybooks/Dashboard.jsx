import React from 'react';
import DisplayBook from '../../components/displaybook/DisplayBook';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { CartService } from '../../services/CartService';
import { wishlistService } from '../../services/WishlistService';

function Dashboard() {

  const [quantity,setQuantity]=React.useState(0)
  const [wishquantity,setWishquantity]=React.useState(0)
  const getCart =()=>{
    CartService.getcart().then((result)=>{
    //   var i=0;
    //     result.data.data.map((data)=>{
    //         i=i+data.quantity
    //     })
    //     setQuantity(i)
    console.log(result.data.data.length,"length")
        setQuantity(result.data.data.length)
    }).catch(()=>{

    })
}
const getwishlist =()=>{
        
  wishlistService.getWishlist().then((result)=>{
  var i=0;
    result.data.data.map((data)=>{
        i=i+data.quantity
    })
    setWishquantity(i)
  
}).catch(()=>{

})
}

  return <div>
    <div className='dashboard'>
      <Header quantity={quantity} wishquantity={wishquantity}/>
      <DisplayBook getCart={getCart} getwishlist={getwishlist}/>
      <Footer/>
    </div>
  </div>;
}

export default Dashboard;
