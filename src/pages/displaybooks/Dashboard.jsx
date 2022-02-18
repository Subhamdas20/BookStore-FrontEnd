import React from 'react';
import DisplayBook from '../../components/displaybook/DisplayBook';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { CartService } from '../../services/CartService';
import { wishlistService } from '../../services/WishlistService';

function Dashboard() {

  return <div>
    <div className='dashboard'>
      <Header  />
      <DisplayBook   />
      <Footer/>
    </div>
  </div>;
}

export default Dashboard;
