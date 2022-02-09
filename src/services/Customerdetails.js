
import AxiosService from "./AxiosService";

let url = 'http://localhost:5000/bookstore_user';

const header = {
    headers: {
        Authorization: localStorage.getItem("token"),
    },
}

export const Customerdetails = {
    addcustomerdetails: (data) => {
        return AxiosService.postService(`${url}/customer_details`, data, header)
    },

}