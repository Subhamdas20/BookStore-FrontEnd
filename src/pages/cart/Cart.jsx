import React from 'react'
import Displaycart from '../../components/displaycart/Displaycart'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { CartService } from '../../services/CartService'

function Cart() {
    const [quantity,setQuantity]=React.useState(0)
    React.useEffect(()=>{
        getCart()
    },[])

    const getCart =()=>{
        
      CartService.getcart().then((result)=>{
      
        setQuantity(result.data.data.length)
      }).catch(()=>{
  
      })
  }
  
  return (
    <div>
        <Header quantity={quantity}/>
        <Displaycart quantity={quantity} getCart={getCart}/>
        <Footer/>
    </div>
  )
}

export default Cart