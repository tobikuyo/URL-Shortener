import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://shrinkio.herokuapp.com/'
});

export default axiosInstance;
