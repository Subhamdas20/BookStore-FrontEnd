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

    return <>
        <div className='homePage'>
            <img className='image' src={education} alt='this is book logo' onClick={() => homepage()} />
            <p className='imagetitle' onClick={() => homepage()} >Bookstore</p>
            <div className='searchbar'>
                <SearchOutlinedIcon htmlColor="grey" />
                <input type='search' className='search' placeholder='Search...'></input>
            </div>
            <div className='details'>
                <div className='icon'>
                    <PermIdentityTwoToneIcon htmlColor="white" />
                </div>
                <div className='person'>{localStorage.getItem("name")}</div>
            </div>
            <div className='wishd' onClick={() => wish()}>
                <div className='wishdetails'>
                    <div>
                        <Badge badgeContent="0" color="primary">
                            <FavoriteBorderOutlinedIcon htmlColor="white" />
                        </Badge>
                    </div>

                </div>
                <div className='wish'>
                    Wishlist
                </div>
            </div>
            <div className='details-cart' onClick={() => cart()}>
                <div className=''>
                    <Badge badgeContent={props.quantity} color="primary">
                        <ShoppingCartOutlinedIcon htmlColor="white" />
                    </Badge>
                </div>
                <div className='cart'>
                    Cart
                </div>

            </div>
        </div>


    </>;
}

export default Header;
