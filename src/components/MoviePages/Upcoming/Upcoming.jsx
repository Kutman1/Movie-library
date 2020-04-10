import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../../Spinner/Spinner";
import {movieBackground, upcoming} from "../../../store/actions/movieAction";
import {Link} from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import PaginationComponent from "../../Pagination/Pagination";

const Upcoming = (props) => {
    const [currentPage, setPage] = useState(null);
    const upcomingData = useSelector(state => state.movie.upcoming);
    const loading = useSelector(state => state.movie.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(upcoming(currentPage))
    }, [currentPage, dispatch]);

    const handlePagination = page => {
        setPage(page)
    };
    console.log(upcomingData)
    return (
        <div className='container mt-5'>
            <div className="row">
                {loading? <Spinner/> : upcomingData && upcomingData.results.map((el, index) => {
                    return <div key={index}
                                className='card-wrapper col-md-3 col-sm-4 col-6 animated fadeInUp px-2 pb-2 mb-4'>
                        <Link to={`/movie/${el.id}`}>
                            <div className="card-container">
                                <div className="img-container">
                                    <Link to={`/movie/${el.id}`}>
                                        <img src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`} alt=""/>
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
                <div className=" col-md-12 page-nav d-flex justify-content-center pt-5">
                    <PaginationComponent paginate={currentPage} handlePagination={handlePagination} />
                </div>
            </div>
        </div>
    );
};

export default Upcoming;