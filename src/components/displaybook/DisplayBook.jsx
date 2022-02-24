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
import { getbooks, getCartItem, getwishlistItem } from '../../store/actions';
import { useNavigate } from "react-router-dom";
import usePagination from '../pagination/usePagination';



function DisplayBook(props) {
    
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [page, setPage] = React.useState(1); 
    const [msg, setMsg] = React.useState('')
    const mybooks = useSelector((state) => state.getbook)
    const getMyCart = useSelector((state) => state.getCartItem)
    const getMyWishList = useSelector((state) => state.getwishlistItems)
    const PER_PAGE = 7;
  
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;
 

    React.useEffect(() => {
        // console.log(getMyCart,mybooks)
        getBooksData()

        // searchBook()
        getCartData()
        getwishlistData()

        if (!localStorage.getItem("token")) {
            navigate('/')
        }
    }, [dispatch,props.searchText])

   
     


    const getBooksData = () => {
        // console.log("bookdata");
        ProductService.getAllproducts().then((res) => {
            if (props.searchText) {
                let filterData = res.data.data.filter(x => x.bookName.toLowerCase().includes(props.searchText.toLowerCase()))
                dispatch(getbooks(filterData))
            }
            else {
                // getBooksData()
                dispatch(getbooks(res.data.data))
            }
            // dispatch(getbooks(res.data.data))
        }).catch(() => {
        })
    }
    const getCartData = () => {
        // console.log("cartdata");
        CartService.getcart().then((res) => {
            dispatch(getCartItem(res.data.data))
        }).catch(() => { })
    }
    const getwishlistData = () => {
        // console.log("wishdata");
        wishlistService.getWishlist().then((res) => {
            dispatch(getwishlistItem(res.data.data))                 //setting initial state of redux
        }).catch(() => { })
    }

   // const mybooks = useSelector((state) => state.getbook)  //accessing state variables


    const addCart = (book) => {
        console.log(getMyWishList)
        let data = {
            "_id": book._id
        }
        CartService.addtocart(data).then((result) => {
            setMsg(true)
            getCartData()
        }).catch(() => {
        })

    }

    const wishlist = (book) => {
        let data = {
            "_id": book._id
        }
        wishlistService.addtoWishlist(data).then(() => {

            setMsg(false)
            getwishlistData()
        }).catch(() => {

        })


    }
   
    const buttons = (book) => {
        console.log("btn")
        let butn = ''
        const obj = getMyCart.books ? (getMyCart.books).find((data) => data.bookName === book.bookName) : ""
        const wishl = getMyWishList.books ? (getMyWishList.books).find((data) => data.bookName === book.bookName) : ""

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
                    <React.Fragment>
                        <Button className='cart-btn'
                            sx={{ fontSize: "10px" }}
                            // onClick={handleClick({
                            //     vertical: 'bottom',
                            //     horizontal: 'right'
                            // }
                            // )}
                        >
                            Add to Cart
                        </Button>
                    </React.Fragment>

                </div>

                <div onClick={() => { wishlist(book) }} >
                    <React.Fragment>
                        <Button className='wishlist'
                            // onClick={handleClick({
                            //     vertical: 'bottom',
                            //     horizontal: 'right',
                            // })}
                        >
                            WISHLIST
                        </Button>
                    </React.Fragment>

                </div>
            </div>


        }
        return butn
    }

    

    const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };
    const sortBook = (e) => {
        console.log(e.target.value);
        let val = e.target.value;
        switch (val) {
            case "lToH":
                lToH();
                break;
            case "AtoZ":
                AtoZ()
                break;
            case "HToL":
                hTOl()
                break;

            default:
                break;
        }
    }
    const lToH = () => {
        let loh = mybooks.books.sort((a, b) => a.price - b.price)
        dispatch(getbooks(loh))
    }
    const AtoZ = () => {
        let aToz = mybooks.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
        console.log(aToz);
        dispatch(getbooks(aToz))
    }
    const hTOl = () => {
        let htol = mybooks.books.sort((a, b) => a.price - b.price).reverse();
        dispatch(getbooks(htol))
    }

  
    

    var booklength=mybooks.books?mybooks.books : 0;
    const count = Math.ceil(booklength.length / PER_PAGE);
    const _DATA = usePagination(booklength , PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
      };

      
    return (
        <>
            <div className='book-containers'>
                <p className="books">Books </p>
                {
                    mybooks.books ? <p className="item"> ({mybooks.books.length})</p> : ""
                }
                <select name="sortBy" className="price" onChange={(e) => sortBook(e)}>
                    <option value="AtoZ">Sort by relevance</option>
                    <option value="lToH">Price:Low to high</option>
                    <option value="HToL">Price:High to low</option>
                    <option value="">Newest arrivals</option>
                </select>
            </div>

            <div className='map-containers'>
                {
                   
                        _DATA.currentData() ? _DATA.currentData().map((book, index) => {
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
                    // onClose={handleClose}
                    message={msg ? "Added to Cart" : "Added to Wishlist"}
                    key={vertical + horizontal}
                />
                
                </div>
                <Pagination
                    count={count}
                    size="large"
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChange}
                />
            </>);
}

            export default DisplayBook;
