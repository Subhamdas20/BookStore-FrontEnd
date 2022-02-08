
import axios from 'axios';

const AxiosService = {

    postService: (url, data, header = false) => {
        return axios.post(url, data, header);
    },
  
}
export default AxiosService;