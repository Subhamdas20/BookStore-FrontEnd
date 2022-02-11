import React from 'react'
import { wishlistService } from '../../services/WishlistService'
import './displaywishlist.scss'
import bookimage from '../../logo/book.png'
import { CartService } from '../../services/CartService'
import Wishlist from '../../pages/wishlist/Wishlist'

function DisplayWishList(props) {

    React.useEffect(() => {
        props.getwishlist()
    }, [])

    const addtocart = (data) => {
        let data1 = {
            "_id": data.product_id
        }
        CartService.addtocart(data1).then((result) => {
            props.getCart()
            props.getwishlist()
        }).catch(() => {
        })
    }
    const remove = (book) => {
        let data = book.product_id;
        wishlistService.removeWishlist(data).then(() => {
            props.getCart()
            props.getwishlist()
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
                    Wishlist({props.wishquantity})
                    {
                        props.wishlist ?
                        props.wishlist.map((data) => {
                                return <div className='book-detail'>
                                    <div className='book-det'>
                                        <img className="img" src={bookimage} ></img>
                                        <div className='book--name'>
                                            {data.bookName}
                                            <div className='author--name'>
                                                {data.author}
                                            </div>
                                            <div className='btn'>
                                                <div><button className='addcart-btn' onClick={() => { addremove(data) }}>Add TO Cart</button></div>
                                                <div><button className='remove-wish' onClick={() => { remove(data) }}>Remove</button></div>
                                            </div>
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