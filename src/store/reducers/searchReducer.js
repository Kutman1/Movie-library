import {REQUEST_MOVIE_SEARCH, SEARCH_MOVIE} from "../actions/types";

const initialState = {
    query: '',
    loading: false
};


const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_MOVIE_SEARCH:
            return {
                ...state,
                loading: true
            }
        case SEARCH_MOVIE:
            return {
                query: action.payload,
                loading: false
            }
        default:
            return state
    }
};


export default searchReducer