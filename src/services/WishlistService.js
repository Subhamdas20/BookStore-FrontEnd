
import AxiosService from "./AxiosService";

let url = 'http://localhost:5000/bookstore_user';

const header = {
    headers: {
        Authorization : localStorage.getItem("token"),
    },
}

export const wishlistService = {
    addtoWishlist: (data) => {
        return AxiosService.postService(`${url}/add_wishlist_item`, data,header)
    },
    getWishlist: (data) => {
        return AxiosService.getallService(`${url}/get_wishlist_item`, header)
    },
   
}