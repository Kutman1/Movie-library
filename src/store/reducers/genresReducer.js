import {GET_GENRES, GET_TOP_RATED} from "../actions/types";

const initialState = {
    genres: [],
    topRated: []
};



const genresReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case GET_TOP_RATED:
            return {
                ...state,
                topRated: action.payload
            }
        default:
            return state
    }
};


export default genresReducer;