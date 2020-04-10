import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import {useDispatch} from "react-redux";
import {searchMovie} from "../../store/actions/searchAction";
import './Search.sass'
const Search = (props) => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const onHandleSubmit = (e) => {
        e.preventDefault();
        if(value.length > 0) {
            props.history.push(`/search/${value}`);
            dispatch(searchMovie(value))
        }
        setValue('')
    };

    return (
        <form className='search-input mb-2'>
            <input value={value} placeholder='Search Movie...' onChange={(e) => setValue(e.target.value) } />
            <button  type='submit' onClick={onHandleSubmit}><i className="fas fa-search" /></button>
        </form>
    );
};

export default withRouter(Search);