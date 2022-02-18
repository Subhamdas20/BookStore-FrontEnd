import React from 'react'
import DisplayWishList from '../../components/displaywishlist/DisplayWishList'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { CartService } from '../../services/CartService'
import { wishlistService } from '../../services/WishlistService'


function Wishlist() {
  

 
  return (
    <div>
    <Header  />
    <DisplayWishList  />
    <Footer/>
    </div>
  )
}

export default Wishlist