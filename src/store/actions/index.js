
import axios from 'axios';

export function getbooks(books){
    return{
        type:"GetBooks",
        payload:books
    }
}
export function getCartItem(books){
    return{
        type:"GetCartItem",
        payload:books
    }
}