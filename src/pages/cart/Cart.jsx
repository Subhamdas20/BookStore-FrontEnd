import React from 'react'
import Displaycart from '../../components/displaycart/Displaycart'
import Header from '../../components/header/Header'
import { CartService } from '../../services/CartService'

function Cart() {
    const [quantity,setQuantity]=React.useState(0)

    React.useEffect(()=>{
        getCart()
    },[])
    const getCart =()=>{
      CartService.getcart().then((result)=>{
        var i=0;
          result.data.data.map((data)=>{
              i=i+data.quantity
          })
          setQuantity(i)
      }).catch(()=>{
  
      })
  }
  
  return (
    <div>
        <Header quantity={quantity}/>
        <Displaycart quantity={quantity} />
    </div>
  )
}

export default Cart