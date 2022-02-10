
import axios from 'axios';

const AxiosService = {

    postService: (url, data, header = false) => {
        return axios.post(url, data, header);
    },
    getService: (url, data, header = false) => {
        return axios.get(url, data, header);
    },
    getallService: (url, header = false) => {
        return axios.get(url, header);
    },
    deleteService: (url, data,header ) => {
        return axios.delete(url,header);
    },
    updateService: (url, data,header ) => {
        return axios.put(url,data,header);
    },
}
export default AxiosService;