import React from 'react'
import Displaycart from '../../components/displaycart/Displaycart'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { CartService } from '../../services/CartService'
import { wishlistService } from '../../services/WishlistService'

function Cart() {
  
    const [quantity,setQuantity]=React.useState(0)
    const [wishquantity,setWishquantity]=React.useState(0)
    const [cart, setCart] = React.useState([])
    const[wishlist,setWishlist]= React.useState([])
    React.useEffect(()=>{

        getwishlist()
    },[])

  
  const getwishlist =()=>{
    wishlistService.getWishlist().then((result)=>{
      setWishquantity(result.data.data.length)
  }).catch(()=>{

  })
}
  
  return (
    <div>
        <Header wishquantity={wishquantity} />
        <Displaycart />
        <Footer/>
    </div>
  )
}

export default Cart