import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import genresReducer from "./reducers/genresReducer";
import movieReducer from "./reducers/movieReducer";
import paginationReducer from "./reducers/paginationReducer";
import searchReducer from "./reducers/searchReducer";

const reducers = combineReducers({
    genres: genresReducer,
    movie: movieReducer,
    paginate: paginationReducer,
    search: searchReducer
});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;