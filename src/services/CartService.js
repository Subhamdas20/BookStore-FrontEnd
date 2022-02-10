
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
    getcart: (data) => {
        return AxiosService.getallService(`${url}/get_cart_item`,header)
    },
    deletecart: (data) => {
        return AxiosService.deleteService(`${url}/remove_cart_item/${data}`,data,header)
    },
    updatecart: (data) => {
        return AxiosService.updateService(`${url}/cart_item`,data,header)
    },
}