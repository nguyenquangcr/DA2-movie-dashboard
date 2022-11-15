import React from 'react'
import { connect } from "react-redux";
//css
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from "aos"
import "aos/dist/aos.css"
import { Link } from 'react-router-dom';

const SoonMovie = (props) => {
    const renderHtml = () => {
        return props.listSoonMovie && props.listSoonMovie.map((item, index) => {
            return (
                <Link to={`/phim/${item.biDanh}-${item.maPhim}`} className="scmovie-list-item" key={index}>
                    <div className="scmovie-list-content">
                        <div className="scmovie-list-image">
                            <img src={item.hinhAnh} alt={item.tenPhim} />
                        </div>
                        <div className="scmovie-list-overlay">
                            <p className="scmovie-list-time">{new Date(item.ngayKhoiChieu).toLocaleDateString('vi-VN', { weekday: 'long', month: 'numeric', day: 'numeric', year: 'numeric' })}</p>
                            <p className="scmovie-list-title">{item.tenPhim}</p>
                            <p className="scmovie-list-star"><i className="fa fa-star"></i> <span>{item.danhGia}/</span>10</p>
                        </div>
                    </div>
                </Link>
            )
        })
    }

    AOS.init()
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
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
    }
    return (
        <Slider {...settings} className="my-movie">
            {renderHtml()}
        </Slider>
    )
}

const mapStateToProps = state => {
    return {
        listSoonMovie: state.movie.listSoonMovie
    }
}

export default connect(mapStateToProps)(SoonMovie);
