import React from 'react';
import {useSelector} from "react-redux";
import Spinner from "../Spinner/Spinner";
import {Link} from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import NotFound from "../MoviePages/NotFound/NotFound";

const SearchResult = () => {
    const searchData = useSelector(state => state.search.query);
    const loading = useSelector(state => state.search.loading);
    return (
        <div className='container'>
            <div className="row">
                {loading ? <Spinner/> : !searchData.length ? <NotFound/> :  searchData && searchData.map((el, index) => {
                    return <div key={index}
                                className='card-wrapper col-md-3 col-sm-4 col-6 animated fadeInUp px-2 pb-2 mb-4'>
                        <Link to={`/movie/${el.id}`}>
                            <div className="card-container">
                                <div className="img-container">
                                    <Link to={`/movie/${el.id}`}>
                                        <img src={el.poster_path ? `https://image.tmdb.org/t/p/w300/${el.poster_path}` : require('../../assets/404.png')} alt=""/>
                                    </Link>
                                </div>
                                <div className="text d-flex justify-content-center align-items-center pt-3 pb-2">
                                    <span>{el.original_title}</span>
                                </div>
                                <div className="stars d-flex justify-content-center pb-2">
                                    <StarRatingComponent
                                        name="rate1"
                                        editing={false}
                                        renderStarIcon={() => <span><i className='fa fa-star'/></span>}
                                        starCount={5}
                                        value={el.vote_average / 1.5}
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>
                })}
            </div>
        </div>
    );
};

export default SearchResult;