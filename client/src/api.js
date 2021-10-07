import axios from 'axios';

const axiosInstance = axios.create({
<<<<<<< HEAD
    baseURL: 'http://localhost:8000'
=======
    baseURL: 'https://shrinkio.herokuapp.com/'
>>>>>>> 9b16b75adf2e648f299c511fca940ef493058508
});

export default axiosInstance;
