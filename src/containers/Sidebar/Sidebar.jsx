import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getGenres} from "../../store/actions/genresAction";
import {Link, NavLink} from "react-router-dom";
import './Sidebar.sass';

const Sidebar = ({toggleSidebar}) => {
    const dispatch = useDispatch();
    const genresData = useSelector(state => state.genres.genres.genres);
    const loading = useSelector(state => state.movie.loading);
    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch]);
    return (
        <>
            { loading ? <div style={{background: '#000'}} /> :
            <nav className={!toggleSidebar ? `sidebar-navigation hidden-sidebar` : `sidebar-navigation show-sidebar`}>
                <i className='fas fa-times d-md-none d-lg-none d-xl-none'/>
                <Link to='/' className="image-wrap">
                    <img src={require('./logo.png')} alt=""/>
                </Link>
                <ul>
                    <NavLink exact activeClassName='active' to='/'>
                        <li>Popular</li>
                    </NavLink>
                    <NavLink to='/top-rated'>
                        <li>Top Rated</li>
                    </NavLink>
                    <NavLink to='/upcoming'>
                        <li>Upcoming</li>
                    </NavLink>
                    <hr/>
                    <h3>genres</h3>
                    {genresData && genresData.map((el, index) => {
                        return <NavLink exact={`/genres/${el.id}`} activeClassName={'active'} to={`/genres/${el.id}`}>
                            <li key={index}>
                                <i className="fas fa-play-circle mr-2"/>{el.name}</li>
                        </NavLink>

                    })}
                </ul>
            </nav>
            }
        </>
    );
};

export default Sidebar;