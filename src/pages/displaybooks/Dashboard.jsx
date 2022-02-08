import React from 'react';
import DisplayBook from '../../components/displaybook/DisplayBook';
import Header from '../../components/header/Header';

function Dashboard() {
    
  return <div>
  <div className='dashboard'>
  <Header/>
    <DisplayBook/>
  </div>
    
  </div>;
}

export default Dashboard;
