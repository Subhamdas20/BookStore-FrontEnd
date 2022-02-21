import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import education from '../../logo/education.png'
import './Header.scss'
import Badge from '@mui/material/Badge';
import { useNavigate } from "react-router-dom";
import { CartService } from '../../services/CartService';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useSelector, useDispatch } from 'react-redux'

function Header(props) {
    const navigate = useNavigate();

    const homepage = () => {
        navigate('/dashboard')
    }
    const cart = () => {
        navigate('/cart')
    }
    const wish = () =>{
        navigate('/wishlist')
    }
    const getMyCart = useSelector((state) => state.getCartItem)
    const getMyWishList = useSelector((state) => state.getwishlistItems)

    const [search,setSearch] = React.useState({
        search:""
    })
    const searchInput =(e)=>{
        props.search(e.target.value)

    }
  
    return <>
        <div className='homePage'>
            <img className='image' src={education} alt='this is book logo' onClick={() => homepage()} />
            <p className='imagetitle' onClick={() => homepage()} >Bookstore</p>
            <div className='searchbar'>
                <SearchOutlinedIcon htmlColor="grey" />
                <input type='search'  name="search" className='search' placeholder='Search...'  onChange={(e)=>searchInput(e)} ></input>
            </div>
            <div className='details'>
                <div className='icon'>
                    <PermIdentityTwoToneIcon htmlColor="white" />
                </div>
                <div className='person'>{localStorage.getItem("name")}</div>
            </div>
            <div className='wishd' onClick={() => wish()}>
                <div className='wishdetails'>
                    <div >
                   { getMyWishList.books?<Badge badgeContent={getMyWishList.books.length} color="primary" sx={{color:"#ffffff"},{background:"#A03037"}}>
                            <FavoriteBorderOutlinedIcon htmlColor="white" />
                        </Badge>
                        :""}
                    </div>

                </div>
                <div className='wish'>
                    Wishlist
                </div>
            </div>
            <div className='details-cart' onClick={() => cart()}>
                <div className=''>
               { getMyCart.books? <Badge badgeContent={getMyCart.books.length} color="primary">
                        <ShoppingCartOutlinedIcon htmlColor="white" />
                    </Badge> 
                    : ""
               }
                </div>
                <div className='cart'>
                    Cart
                </div>

            </div>
        </div>


    </>;
}

export default Header;
