import React from 'react';
import { ProductService } from '../../services/ProductService';
import './DisplayBook.scss'
import bookimage from '../../logo/book.png'
import { CartService } from '../../services/CartService';
import { wishlistService } from '../../services/WishlistService';
import { buttonClasses, getButtonBaseUtilityClass } from '@mui/material';

function DisplayBook(props) {

    const [books, setBooks] = React.useState([])

    React.useEffect(() => {
        props.getCart()
        getBooks();
        props.getwishlist()
    }, [])


    const getBooks = () => {
        ProductService.getAllproducts().then((result) => {
            setBooks(result.data)
        }).catch(() => {
        })
    }

    const addCart = (book) => {
        let data = {
            "_id": book._id
        }
        CartService.addtocart(data).then((result) => {
            getBooks();
            props.getCart()

        }).catch(() => {
        })

    }
    const wishlist = (book) => {
        let data = {
            "_id": book._id
        }
        wishlistService.addtoWishlist(data).then(() => {
            getBooks();
            props.getwishlist()
        }).catch(() => {

        })

    }
    const buttons = (book) => {
        let butn=''
        const obj = (props.cart).find((data)=>data.bookName===book.bookName)
        const wishl= (props.wishlist).find((data)=>data.bookName===book.bookName)
        
        if(obj){
            butn =  <button className='already-cart'>
            Added to cart
            </button>
        }
        else if(wishl){
            butn =  <button className='already-wishlist'>
            Added to wishlist
            </button>
        }
        else{
            butn = <div className='buttn-grp'><button className='bag' onClick={() => { addCart(book) }}>ADD TO BAG</button>
                    <button className='wishlist' onClick={() => { wishlist(book) }} >WISHLIST</button></div>
        }
        return butn
    }

    return (
        <>
            <div className='book-containers'>
                <p className="books">Books </p>
                {
                    books.data ? <p className="item"> ({books.data.length})</p> : ""
                }
                
                <select name="sort by relevance" className="price">
                    <option value="">Sort by relevance</option>
                    <option value="">Price:Low to high</option>
                    <option value="">Price:High to low</option>
                    <option value="">Newest arrivals</option>
                </select>
            </div>

            <div className='map-containers'>
                {
                    books.data ?
                        books.data.map((book, index) => {
                            return <div className='books-display' >
                                <div className="image-display" >
                                    <div >
                                        <img className="image" src={bookimage} ></img>
                                    </div>
                                </div>
                                <div className="content">
                                    <span className='book-name'>{book.bookName}</span><br></br>
                                    <span className='author'>By {book.author}</span>
                                    <div className="rate">
                                        <span className='rating'>4.5*  </span>
                                        <span className='text'> (20)</span>
                                    </div>
                                    <div className="pricebook">
                                        <span className=''>Rs:- {book.price}</span>
                                    </div>
                                    <div className='order'>
                                        {
                                        buttons(book)
                                       }
                                    </div>
                                </div>
                            </div>
                        })
                        :
                        ""
                }
            </div>
        </>);
}

export default DisplayBook;
