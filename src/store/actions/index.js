
import axios from 'axios';

export function getbooks(books){
    return{
        type:"GetBooks",
        payload:books
    }
}