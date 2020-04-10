import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovies, movieBackground} from "../../store/actions/movieAction";
import {Link} from "react-router-dom";
import StarRatingComponent from 'react-star-rating-component';
import './Content.sass'
import Spinner from "../../components/Spinner/Spinner";
import PaginationComponent from "../../components/Pagination/Pagination";
import {paginationPage} from "../../store/actions/genresAction";
import SliderComponent from "../../components/Slider/Slider";
import Title from "../../components/Title/Title";

const Content = () => {
    const dispatch = useDispatch();
    const dataMovie = useSelector(state => state.movie.movie);
    const loading = useSelector(state => state.movie.loading);
    const cinemaBackground = useSelector(state => state.movie.cinemaBackground);
    const paginate = useSelector(state => state.paginate.currentPage);

    useEffect(() => {
        dispatch(getMovies(paginate))
    }, [paginate, dispatch]);
    let pagination = [];
    for (let i = 1; i <= dataMovie.total_pages; i++) {
        pagination.push(i)
    }
    const handlePagination = current => {
        dispatch(paginationPage(current))
    };
    return (
        <div className='content'>
            <SliderComponent slide={dataMovie.results && dataMovie.results.slice(0, 3)} />
            <Title title='Popular' />
            <div className="content-background" style={{background: `url(${cinemaBackground})`}}></div>
            <div className='container'>
                <div className="row">
                    {loading ?
                        <Spinner/>
                        : dataMovie.results && dataMovie.results.map((el, index) => {
                        return <div key={index}
                                    className='card-wrapper col-md-3 col-sm-4 col-6 animated fadeInUp px-2 pb-2 mb-4'
                                    onMouseLeave={() => dispatch(movieBackground(null))}
                                    onMouseMove={() => dispatch(movieBackground(`https://image.tmdb.org/t/p/w500/${el.backdrop_path}`))}>
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
                    <div className=" col-md-12 col-sm-12 page-nav d-flex justify-content-center pt-5">
                       <PaginationComponent paginate={paginate} handlePagination={handlePagination} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;