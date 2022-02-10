import React from 'react'
import DisplayWishList from '../../components/displaywishlist/DisplayWishList'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { CartService } from '../../services/CartService'
import { wishlistService } from '../../services/WishlistService'


function Wishlist() {
    const [quantity,setQuantity]=React.useState(0)
    const [wishquantity,setWishquantity]=React.useState(0)
    React.useEffect(()=>{
        getCart()
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
  const getCart =()=>{
    CartService.getcart().then((result)=>{
        setQuantity(result.data.data.length)
    }).catch(()=>{

    })
}
  return (
    <div>
    <Header quantity={quantity} wishquantity={wishquantity}/>
    <DisplayWishList getwishlist={getwishlist} getCart={getCart} wishquantity={wishquantity} />
    <Footer/>
    </div>
  )
}

export default Wishlist