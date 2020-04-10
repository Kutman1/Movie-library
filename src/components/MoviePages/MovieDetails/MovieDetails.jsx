import React, {useEffect, useState} from 'react';
import './MovieDetails.sass'
import {useDispatch, useSelector} from "react-redux";
import {getDetailsMovie} from "../../../store/actions/movieAction";
import StarRatingComponent from "react-star-rating-component";
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import Similar from "../Similar/Similar";
import MovieDetailsVideo from "../../../Videos/movieDetailsVideo/MovieDetailsVideo";

const MovieDetails = (props) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.movie.movieDetails);
    const [similarData, setSimilar] = useState(null);
    useEffect(() => {
        dispatch(getDetailsMovie(props.match.params.id))
    }, [dispatch, props.match.params.id]);

    useEffect(() => {
        setSimilar(data.similar)
    }, [])
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (
        <div className='moviedetails mt-5'>
            {data && <div className="container">
                <div className="row">
                    <div
                        className="col-md-4 offset-md-1 col-sm-6 offset-sm-3 col-xs-6 offset-xs-3 d-flex flex-column main-img-container">
                        <img src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} alt=""/>
                    </div>
                    <div className="col-md-7 col-sm-12">
                        <div className="col-md-12">
                            <div className="text-container animated fadeIn movie-text">
                                <h3>{data.title}</h3>
                                <StarRatingComponent
                                    name="rate1"
                                    editing={false}
                                    renderStarIcon={() => <span><i className='fa fa-star'/></span>}
                                    starCount={5}
                                    value={data.vote_average / 1.5}
                                />
                                <h6 className='mt-3 mb-3'>{data.tagline}</h6>
                                <div className="genres-details">
                                    genres:
                                    {data.genres && data.genres.map((el, index) => {
                                        return <span className='genres-tag' key={el.id}>{el.name}</span>
                                    })}
                                </div>

                                <div className="release-date">
                                    <div>Release date:</div>
                                    <span className="desc-tag">{data.release_date}</span>
                                </div>
                                <div className="duration">
                                    <div>duration:</div>
                                    <span className='desc-tag'>{data.runtime + 'min'}</span>
                                </div>
                                <div className="budget-spent">
                                    <div>budget spent:</div>
                                    <span className='desc-tag'>${data.budget}</span>
                                </div>

                                <div className="budget-spent">
                                    <div>total income:</div>
                                    <span className='desc-tag'>${data.revenue && data.revenue.toFixed(2)}</span>
                                </div>
                                <p className='mt-3'>{data.overview}</p>
                            </div>
                        </div>
                        <div className="cast-container col-md-12 mt-5 animated fadeInRight">
                            <div className="cast-container col-md-12 mt-5">
                                <Slider {...settings}>
                                    {data.credits && data.credits.cast.map((el, index) => (
                                        <div className='text-center actor-container'>
                                            <Link to={`/people/${el.id}`}>
                                                <img
                                                    src={el.profile_path ? `https://image.tmdb.org/t/p/w200${el.profile_path}` : 'https://pngimage.net/wp-content/uploads/2018/06/no-profile-image-png-4.png'}
                                                    alt={el.name} style={{width: '100%'}}/>
                                                <span>{el.name}</span>
                                            </Link>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-12">
                        <h2 className='text-center mt-5 mb-5'>Videos</h2>
                        <MovieDetailsVideo data={data.videos && data.videos.results}/>
                    </div>
                    <div className="col-md-12 mt-5">
                        <h2 className='text-center mt-5 mb-5'>Similar</h2>
                        {!similarData ? <span className='notSimilar'>No Similar</span> :  <Similar similarData={similarData} similar={setSimilar}/>}
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default MovieDetails;