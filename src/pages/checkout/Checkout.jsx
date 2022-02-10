import React from 'react'
import Checkoutorder from '../../components/checkout/Checkoutorder'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { wishlistService } from '../../services/WishlistService'

function Checkout() {
  const [wishquantity,setWishquantity]=React.useState(0)
  React.useEffect(()=>{
     
      getwishlist()
   
  },[])

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
  return (
    <div>
    <Header wishquantity={wishquantity}/>
    <Checkoutorder getwishlist={getwishlist}/>
    <Footer/>
    </div>
  )
}

export default Checkout