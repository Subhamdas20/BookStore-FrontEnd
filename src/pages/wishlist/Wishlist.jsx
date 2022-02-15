import React from 'react'
import DisplayWishList from '../../components/displaywishlist/DisplayWishList'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { CartService } from '../../services/CartService'
import { wishlistService } from '../../services/WishlistService'


function Wishlist() {
    const [quantity,setQuantity]=React.useState(0)
    const [wishquantity,setWishquantity]=React.useState(0)
    const[wishlist,setWishlist]= React.useState([])
    const [cart, setCart] = React.useState([])

    React.useEffect(()=>{
        getCart()
        getwishlist()
     
    },[])

    const getwishlist =()=>{
        wishlistService.getWishlist().then((result)=>{
          setWishquantity(result.data.data.length)
          setWishlist(result.data.data)
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
    <DisplayWishList wishlist={wishlist} getwishlist={getwishlist} getCart={getCart} wishquantity={wishquantity} />
    <Footer/>
    </div>
  )
}

export default Wishlist