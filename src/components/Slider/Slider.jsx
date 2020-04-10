import React from 'react';
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import './Slider.sass'

const SliderComponent = (props) => {
    console.log(props)
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500
    }
    return (
        <div className='mb-5 slider-wrapper'>
            <Slider {...settings}>
                {props.slide && props.slide.map((el, index) => {
                    return <Link to={`/movie/${el.id}`}>
                        <div className="movie-slider-content"
                             style={{background: `url(https://image.tmdb.org/t/p/w1280${el.backdrop_path})`}}>
                            <div className="info-movie">
                                <span>now playing</span>
                                <h3>{el.title}</h3>
                                <div className='mark-movie'>
                                    <b>action</b> / <strong><i className="fas fa-star" /> {el.vote_average}</strong>
                                </div>
                            </div>
                        </div>
                    </Link>
                })}
            </Slider>
        </div>
    );
};

export default SliderComponent;