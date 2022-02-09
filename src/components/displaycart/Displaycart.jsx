import React from 'react'
import { CartService } from '../../services/CartService'
import './displaycart.scss'
import book from '../../logo/book.png'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
function Displaycart(props) {

    const [cart, setCart] = React.useState([])
    const [orderbutton, setOrderbutton] = React.useState(true)
    const [checkout, setCheckout] = React.useState(true)
    React.useEffect(() => {
        CartService.getcart().then((result) => {

            setCart(result.data.data)

        }).catch(() => {
        })
        // setOrderbutton(true)
    }, [])



    const changebutton = () => {
        setOrderbutton(false)
    }
    const orderSummary = () => {
        setCheckout(false)
    }

    return (
        <>
            <h3 className='heading'>Home/ My cart</h3>
            <div className='cart-container'>

                <h3 className='my-cart'>My Cart({props.quantity})</h3>
                {
                    cart.map((books) => {
                        return <div >
                            <div className='content-container'>
                                <div className='image-cart'><img src={book} alt="image" style={{ height: "105px" }, { width: "100 px" }} /></div>
                                <div className='cart-description'>
                                    <div className='book-nam'>{books.bookName}</div>
                                    <div className='author-nam'>{books.author}</div>
                                    <div className='pricetage'>{books.price}</div>
                                </div>
                            </div>
                            <div className='update-cart'>
                                <RemoveCircleOutlineOutlinedIcon htmlColor="grey" />
                                <div className='cart-quantity'>1</div>
                                <AddCircleOutlineOutlinedIcon htmlColor="grey" />
                                <div className='remove'>Remove</div>
                            </div>
                        </div>
                    })
                }
                {
                    orderbutton ? <button className='button-order' onClick={() => { changebutton() }}>Place order</button>
                        : ""
                }

            </div>
            {
                orderbutton ? <div className='customer-details'>
                    <div className='inside-details'>Customer Details</div></div>
                    :
                    <div className='customer-detail'>
                        <div className='inside-customerdetails'>
                            <h3 className='heading'>Customer Details</h3>

                            <div className='text-fields'>
                                <div className='name-field'>
                                    <TextField size="medium" id="outlined-basic" label="Full Name" variant="outlined" style={{ width: "250px" }} />
                                </div>
                                <div className='mobile-num'>
                                    <TextField id="outlined-basic" label="Mobile Number" variant="outlined" style={{ width: "250px" }} />
                                </div>
                            </div>
                            <div className='text-fields'>
                                <div className='name-field'>
                                    <TextField size="medium" id="outlined-basic" label="Pin code" variant="outlined" style={{ width: "250px" }} />
                                </div>
                                <div className='mobile-num'>
                                    <TextField id="outlined-basic" label="Locality" variant="outlined" style={{ width: "250px" }} />
                                </div>
                            </div>
                            <div className='Address'>
                                <TextField id="outlined-basic" label="Address" variant="outlined" style={{ width: "532px" }} multiline="true" rows="4" />
                            </div>
                            <div className='text-fields'>
                                <div className='name-field'>
                                    <TextField size="medium" id="outlined-basic" label="City/town" variant="outlined" style={{ width: "250px" }} />
                                </div>
                                <div className='mobile-num'>
                                    <TextField id="outlined-basic" label="Landmark" variant="outlined" style={{ width: "250px" }} />
                                </div>
                            </div>
                            <div className='type'>Type</div>
                            <div className='radio'>
                                <FormControlLabel value="Home" control={<Radio />} label="Home" />
                                <FormControlLabel value="Work" control={<Radio />} label="Work" />
                                <FormControlLabel value="Other" control={<Radio />} label="Other" />
                            </div>
                            <button className='continue-button' onClick={() => orderSummary()}>Continue</button>
                        </div>

                    </div>

            }


            {
                checkout ?

                    <div className='customer-details'>
                        <div className='inside-details'>Order Summary</div>
                    </div>
                    :
                    <div className='order-details'>
                        <div className='inside-orderdetails'>Order Summary</div>
                        {
                            cart.map((books) => {
                                return <div >
                                    <div className='content-containers'>
                                        <div className='image-carts'><img src={book} alt="image" style={{ height: "105px" }, { width: "100 px" }} /></div>
                                        <div className='cart-descriptions'>
                                            <div className='book-nams'>{books.bookName}</div>
                                            <div className='author-nams'>{books.author}</div>
                                            <div className='pricetages'>{books.price}</div>
                                        </div>

                                    </div>

                                </div>
                            })

                        }
                        <button className='checkout-button'>checkout</button>
                    </div>
            }


        </>
    )
}

export default Displaycart