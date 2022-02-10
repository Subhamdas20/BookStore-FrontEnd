import React from 'react'
import DisplayWishList from '../../components/displaywishlist/DisplayWishList'
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
    //   var j=0;
    //     result.data.data.map((data)=>{
    //         j=j+data.quantity
    //     })
    //     setQuantity(j)
        setQuantity(result.length)
        
    }).catch(()=>{

    })
}
  return (
    <div>
    <Header wishquantity={wishquantity} quantity={quantity}/>
    <DisplayWishList wishquantity={wishquantity} />
    </div>
  )
}

export default Wishlist