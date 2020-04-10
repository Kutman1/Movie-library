import {CURRENT_PAGE, GENRES_PAGINATION, GET_GENRES} from "./types";
import axiosMovie from '../../axiosMovie';
import {API_KEY} from "../../config";



export const getGenres = () => {
    return async dispatch => {
        let res = await axiosMovie.get(`/genre/movie/list?api_key=${API_KEY}`);
        dispatch(genresAction(res.data))
    }
};

const genresAction = genres => ({
    type: GET_GENRES,
    payload: genres
});



export const paginationPage = current => ({
    type: CURRENT_PAGE,
    payload: current
});



//GET TOP RATED

