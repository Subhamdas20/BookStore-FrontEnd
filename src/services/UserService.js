
import AxiosService from "./AxiosService";

let url = 'http://localhost:5000/bookstore_user';

export const UserService = {
    login: (data) => {
        return AxiosService.postService(`${url}/login`, data)
    },
    signup: (data) => {
        return AxiosService.postService(`${url}/register`, data)
    },
}

