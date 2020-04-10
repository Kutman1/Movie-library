import {
    GET_DETAILS_MOVIE,
    GET_GENRES_MOVIE,
    GET_MOVIES, GET_MOVIES_UPCOMING,
    GET_TOP_RATED,
    MOVIE_BACKGROUND,
    REQUEST_MOVIE, UPDATED_ID
} from "../actions/types";

const initialState = {
    movie: [],
    loading: false,
    cinemaBackground: null,
    genresMovie: [],
    movieDetails: [],
    topRated: null,
    upcoming: null,
    updatedReducer: null
};


const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_MOVIE:
            return {
                ...state,
                loading: true
            };
        case GET_MOVIES:
            return {
                ...state,
                movie: action.payload,
                loading: false
            };
        case MOVIE_BACKGROUND:
            return {
                ...state,
                cinemaBackground: action.payload
            };
        case GET_GENRES_MOVIE:
            return {
                ...state,
                loading: false,
                genresMovie: action.payload
            };
        case GET_DETAILS_MOVIE:
            return {
                ...state,
                loading: false,
                movieDetails: action.payload
            };
        case GET_TOP_RATED:
            return {
                ...state,
                loading: false,
                topRated: action.payload
            };
        case GET_MOVIES_UPCOMING:
            return {
                ...state,
                loading: false,
                upcoming: action.payload
            };
        case UPDATED_ID:
            return {
                ...state,
                updatedReducer: action.payload
            };
        default:
            return state;
    }
};

export default movieReducer