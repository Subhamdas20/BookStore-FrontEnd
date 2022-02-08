
import axios from 'axios';

const AxiosService = {

    postService: (url, data, header = false) => {
        return axios.post(url, data, header);
    },
    getService: (url, data, header = false) => {
        return axios.get(url, data, header);
    },
}
export default AxiosService;