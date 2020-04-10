import React from 'react';
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css";
import YouTube from "react-youtube";
import Slider from "react-slick";

const MovieDetailsVideo = (props) => {
    const settings2 = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow:2,
        slidesToScroll: 2,
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay:2
        }
    };
    const {data} = props;
    return (
            <Slider {...settings2}>
                {data && data.map(el => {
                    return <YouTube opts={opts} videoId={el.key} />
                })}
            </Slider>
    );
};

export default MovieDetailsVideo;