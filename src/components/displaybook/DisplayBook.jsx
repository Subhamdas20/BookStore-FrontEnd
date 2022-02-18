import React from 'react';
import { ProductService } from '../../services/ProductService';
import './DisplayBook.scss'
import bookimage from '../../logo/book.png'
import { CartService } from '../../services/CartService';
import { wishlistService } from '../../services/WishlistService';
import { buttonClasses, getButtonBaseUtilityClass } from '@mui/material';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux'
import { getbooks } from '../../store/actions';

function DisplayBook(props) {
    const [msg, setMsg] = React.useState()
    React.useEffect(() => {
        props.getCart()
       
        props.getwishlist()
        getBooksData()

    }, [])
    const dispatch = useDispatch()
    const getBooksData = async () => {
        ProductService.getAllproducts().then((res) => {
            dispatch(getbooks(res.data.data))
        }).catch(() => {
        })
    }
    const mybooks = useSelector((state) => state.getbook)

    const addCart = (book) => {
        let data = {
            "_id": book._id
        }
        CartService.addtocart(data).then((result) => {
            props.getCart()
            setMsg(true)
        }).catch(() => {
        })
        console.log(mybooks.books)
    }
    const wishlist = (book) => {
        let data = {
            "_id": book._id
        }
        wishlistService.addtoWishlist(data).then(() => {
            props.getwishlist()
            setMsg(false)
        }).catch(() => {

        })

    }
    const buttons = (book) => {
        let butn = ''
        const obj = (props.cart).find((data) => data.bookName === book.bookName)
        const wishl = (props.wishlist).find((data) => data.bookName === book.bookName)

        if (obj) {
            butn = <button className='already-cart'>
                Added to cart
            </button>
        }
        else if (wishl) {
            butn = <button className='already-wishlist'>
                Added to wishlist
            </button>
        }
        else {

            butn = <div className='buttn-grp'>

                <div onClick={() => { addCart(book) }}>

                    {/* <div onClick={() => { wishlist(book) }} > */}
                    <React.Fragment>
                        <Button className='cart-btn'
                            sx={{ fontSize: "10px" }}
                            onClick={handleClick({
                                vertical: 'bottom',
                                horizontal: 'right'
                            })}
                        >
                            Add to Cart
                        </Button>
                    </React.Fragment>
                    {/* </div> */}
                </div>

                <div onClick={() => { wishlist(book) }} >
                    <React.Fragment>
                        <Button className='wishlist'
                            onClick={handleClick({
                                vertical: 'bottom',
                                horizontal: 'right',
                            })}
                        >
                            WISHLIST
                        </Button>
                    </React.Fragment>

                </div>
            </div>


        }
        return butn
    }

    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };


    return (
        <>
            <div className='book-containers'>
                <p className="books">Books </p>
                {
                    mybooks.books ? <p className="item"> ({mybooks.books.length})</p> : ""
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
                    mybooks.books ?
                        mybooks.books.map((book, index) => {
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

                                    {
                                        buttons(book)
                                    }

                                </div>
                            </div>
                        })
                        :
                        ""

                }
                <div>



                </div>
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={handleClose}
                    message={msg ? "Added to Cart" : "Added to Wishlist"}
                    key={vertical + horizontal}
                />
            </div>
            <div className='paginationg'>
                <Stack spacing={2}>
                    <Pagination count={10} />
                </Stack>
            </div>
        </>);
}

export default DisplayBook;
