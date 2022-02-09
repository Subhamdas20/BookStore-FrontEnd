import React from 'react';
import DisplayBook from '../../components/displaybook/DisplayBook';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { CartService } from '../../services/CartService';

function Dashboard() {

  const [quantity,setQuantity]=React.useState(0)

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

  return <div>
    <div className='dashboard'>
      <Header quantity={quantity}/>
      <DisplayBook getCart={getCart}/>
      <Footer/>
    </div>
  </div>;
}

export default Dashboard;
