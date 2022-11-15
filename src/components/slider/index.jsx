import React from 'react'
import { useSelector } from 'react-redux';
import './style.scss';
import Slider from 'react-slick';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const SlickHeader = () => {

    const movieSoon = useSelector(state => state.movie.listSoonMovie)
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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

    const rederSlider = () => {
        return movieSoon && movieSoon.map((item, index) => {
            return (
                <Link to={`/phim/${item.biDanh}-${item.maPhim}`} className="banner-slider-item" key={index}>
                    <div className="banner-slider-content">
                        <div className="banner-slider-image">
                            <img src={item.hinhAnh} alt={item.tenPhim} />
                        </div>
                        <div className="banner-slider-overlay">
                            <div className="banner-slider-time">{new Date(item.ngayKhoiChieu).toLocaleDateString('vi-VN', { weekday: 'long', month: 'numeric', day: 'numeric', year: 'numeric' })}</div>
                            <div className="banner-slider-title">
                                {item.tenPhim}
                            </div>
                            <div className="banner-slider-star">
                                <i className="fa fa-star"></i> <span>{item.danhGia}/</span>10
                            </div>
                        </div>
                    </div>
                </Link>
            )
        })
    }
    return (
        <div>
            <Slider className="banner-slider" {...settings}>
                {rederSlider()}
            </Slider>
        </div>
    )
}

export default SlickHeader