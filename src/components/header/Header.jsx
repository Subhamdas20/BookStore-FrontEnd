import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import education from '../../logo/education.png'
import './Header.scss'

function Header() {
    return <>
        
            <div className='homePage'>
                <img className='image' src={education} alt='this is book logo' />
                <p className='imagetitle' >Bookstore</p>
                <div className='searchbar'>
                    <SearchOutlinedIcon htmlColor="grey"/>
                    <input type='search' className='search' placeholder='Search...'></input>
                </div>
                <div className='details'>
                    <div className='icon'>
                        <PermIdentityTwoToneIcon htmlColor="white"/>
                     </div>
                     <div className='person'>Subham</div>
                </div>
                <div className='details-cart'>
                    <div className=''>
                    <ShoppingCartOutlinedIcon htmlColor="white" />
                    </div>
                    <div className='cart'>
                    Cart
                    </div>
                    
                </div>
            </div>
      

    </>;
}

export default Header;
