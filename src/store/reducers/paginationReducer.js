import {CURRENT_PAGE, GENRES_PAGINATION} from "../actions/types";

const initialState = {
    currentPage: null,
    genresPagination: null
};



const paginationReducer = (state = initialState, action) => {
    switch(action.type) {
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case GENRES_PAGINATION:
            return {
                ...state,
                genresPagination: action.payload
            }
        default:
            return state
    }
};


export default paginationReducer



