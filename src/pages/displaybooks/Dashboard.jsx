import React from 'react';
import DisplayBook from '../../components/displaybook/DisplayBook';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

function Dashboard() {

//   const [search,setSearch] = React.useState({
//     search:""
// })
// const searchInput =(e)=>{
//     setSearch((previousstate)=>{
//         return{...previousstate,[e.target.name]:e.target.value}
//     })
//     console.log(search)
  
// }
const [searchText,setSearchText]=React.useState("")

const search=(value)=>{
  setSearchText(value)
}
  return <div>
    <div className='dashboard'>
      <Header search={search} />
      <DisplayBook searchText={searchText}  />
      <Footer/>
    </div>
  </div>;
}

export default Dashboard;
