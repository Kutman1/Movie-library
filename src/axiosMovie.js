import * as axios from "axios";


const axiosMovie = axios.create({
    baseURL: `https://api.themoviedb.org/3/`
});


export default axiosMovie