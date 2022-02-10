import React from 'react'
import { wishlistService } from '../../services/WishlistService'
import './displaywishlist.scss'
import bookimage from '../../logo/book.png'
function DisplayWishList(props) {

    const [wishlistitem, setWishlistitem] = React.useState()

    React.useEffect(() => {
        wishlistService.getWishlist().then((result) => {

            setWishlistitem(result.data.data)

        }).catch(() => {

        })
    }, [])

    return (
        <>
            <div className='displaywish-container'>
                <div className='wishlist-heading'>
                    My Wishlist
                </div>
                <div className='wishlist'>

                    Wishlist({props.wishquantity})
                    <div className='book-det'>
                        <img className="img" src={bookimage} ></img>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default DisplayWishList