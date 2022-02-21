import React from 'react'
import { wishlistService } from '../../services/WishlistService'
import './displaywishlist.scss'
import bookimage from '../../logo/book.png'
import { CartService } from '../../services/CartService'
import Wishlist from '../../pages/wishlist/Wishlist'
import {stateContext} from '../../App'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useSelector, useDispatch } from 'react-redux'
import { getwishlistItem,getCartItem } from '../../store/actions'

function DisplayWishList(props) {
  
    const dispatch = useDispatch()
    const getMyWishList = useSelector((state) => state.getwishlistItems)
    React.useEffect(() => {
        getCartData()
        getwishlistData()
        console.log(getMyWishList)
    }, [])

    const getwishlistData =  () => {                        
        wishlistService.getWishlist().then((res)=>{
            dispatch(getwishlistItem(res.data.data))                 //setting initial state of redux
        }).catch(()=>{})
    }
    
    const getCartData =  () => {                        
        CartService.getcart().then((res)=>{
            dispatch(getCartItem(res.data.data))                 //setting initial state of redux
        }).catch(()=>{})
    }


    const addtocart = (data) => {
        let data1 = {
            "_id": data.product_id
        }
        CartService.addtocart(data1).then((result) => {
        }).catch(() => {
        })
       
    }
    const remove = (book) => {
        let data = book.product_id;
        wishlistService.removeWishlist(data).then(() => {
            getCartData()
            getwishlistData()
        }).catch(() => {
        })
    }
    const addremove = (data) => {
        addtocart(data)
        remove(data)
    }
    return (
        <>
            <div className='displaywish-container'>
                <div className='wishlist-heading'>
                    My Wishlist
                </div>
                <div className='wishlist'>
                {getMyWishList.books ? <div className='wish-head'>
                 Wishlist({getMyWishList.books.length}) 
                </div>
                : ""}
                    
                    {
                        getMyWishList.books ?
                        getMyWishList.books.map((data) => {
                                return <div className='book-detail'>
                                    <div className='book-det'>
                                        <img className="img" src={bookimage} ></img>
                                        <div className='book--name'>
                                            {data.bookName}
                                            <div className='author--name'>
                                                {data.author}
                                            </div>
                                            </div>
                                            <div className='btn'>
                                                <div><button className='addcart-btn' onClick={() => { addremove(data) }}>
                                                <ShoppingCartOutlinedIcon  />
                                                </button></div>
                                                <div><button className='remove-wish' onClick={() => { remove(data) }}>
                                                <DeleteOutlinedIcon/></button></div>
                                            </div>
                                        
                                    </div>

                                </div>
                            })
                            : ""
                    }
                </div>
            </div>
        </>
    )
}

export default DisplayWishList