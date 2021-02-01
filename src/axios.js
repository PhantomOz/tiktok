import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tiktokclome.herokuapp.com/"
});

export default instance