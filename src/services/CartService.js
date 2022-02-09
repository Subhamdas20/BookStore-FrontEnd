
import AxiosService from "./AxiosService";

let url = 'http://localhost:5000/bookstore_user';

const header = {
    headers: {
        Authorization : localStorage.getItem("token"),
    },
}

export const CartService = {
    addtocart: (data) => {
        return AxiosService.postService(`${url}/add_cart_item`, data,header)
    },
   
}