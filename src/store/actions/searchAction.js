import {REQUEST_MOVIE_SEARCH, SEARCH_MOVIE} from "./types";
import axiosMovie from "../../axiosMovie";
import {API_KEY} from "../../config";

const fetchSearchMovie = () => ({
    type: REQUEST_MOVIE_SEARCH
})


export const searchMovie = (searchQuery) => async dispatch => {
    dispatch(fetchSearchMovie())
    const res = await axiosMovie.get(`search/movie?api_key=${API_KEY}&query=${searchQuery}`)
    dispatch(searchAction(res.data.results))
}




const searchAction = value => ({
    type: SEARCH_MOVIE,
    payload: value
});