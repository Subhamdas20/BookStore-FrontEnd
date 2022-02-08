
import AxiosService from "./AxiosService";

let url = 'http://localhost:5000/bookstore_user';

export const ProductService = {
    getAllproducts: (data) => {
        return AxiosService.getService(`${url}/getallproduct`, data)
    },
   
}

