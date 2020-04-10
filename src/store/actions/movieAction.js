import {
    GET_DETAILS_MOVIE,
    GET_GENRES_MOVIE,
    GET_MOVIES,
    GET_MOVIES_UPCOMING,
    GET_TOP_RATED,
    MOVIE_BACKGROUND,
    REQUEST_MOVIE, UPDATED_ID
} from "./types";
import axiosMovie from "../../axiosMovie";
import {API_KEY} from "../../config";

export const fetchMovies = () => ({
    type: REQUEST_MOVIE
})

export const getMovies = (countPage) => async dispatch => {
    dispatch(fetchMovies());
    const result = await axiosMovie.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=${countPage}`);
    setTimeout(() => {
        window.scroll(0, 0);
        dispatch(movieAction(result.data))
    }, 1000)

};


const movieAction = movie => ({
    type: GET_MOVIES,
    payload: movie
});


export const movieBackground = background => ({
    type: MOVIE_BACKGROUND,
    payload: background
});

//getGenresMovie


export const getGenresMovie = (id, countPage) => async dispatch => {
    dispatch(fetchMovies());
    const response = await axiosMovie.get(`discover/movie?api_key=${API_KEY}&with_genres=${id}&page=${countPage}`);
    setTimeout(() => {
        dispatch(genresMovieAction(response.data))
    }, 1000)
};


const genresMovieAction = gMovie => ({
    type: GET_GENRES_MOVIE,
    payload: gMovie
})


//GET DetailsMovie


export const getDetailsMovie = (id) => async dispatch => {
    dispatch(fetchMovies())
    const response = await axiosMovie.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits,similar`)
    setTimeout(() => {
        window.scroll(0, 0);
        dispatch(getMovieDetailsAction(response.data))
    }, 1000)

}


const getMovieDetailsAction = movie => ({
    type: GET_DETAILS_MOVIE,
    payload: movie
})

//TOP RATED
export const topRated = (page) => async dispatch => {
    dispatch(fetchMovies());
    const res = await axiosMovie.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`);
    setTimeout(() => {
        dispatch(topRatedAction(res.data))

    }, 1000)
};
const topRatedAction = movie => ({
    type: GET_TOP_RATED,
    payload: movie
});

//UPCOMING


export const upcoming = (page) => async dispatch => {
    dispatch(fetchMovies());
    const res = await axiosMovie.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`)
    setTimeout(() => {
        dispatch(upcomingAction(res.data))
    }, 1000)
}

const upcomingAction = movie => ({
    type: GET_MOVIES_UPCOMING,
    payload: movie
});

//update


export const updateApp = id => ({
    type: UPDATED_ID,
    payload: id
})