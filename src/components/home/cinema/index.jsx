import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { actionDetailLocation, actionGetListMovieByLocation, getBookingRequest } from '../../../redux/action/cinema.action';
import './cinema.scss';

const Cinema = (props) => {
    const dispatch = useDispatch();
    const [cumRapFirst, setcumRapFirst] = useState('BHDStar');
    const [activeRap, setactiveRap] = useState('BHDStar');
    const [maCumRapLocation, setmaCumRapLocation] = useState('bhd-star-cineplex-3-2');
    const [activeCumRap, setactiveCumRap] = useState('bhd-star-cineplex-3-2');
    //
    const listCumRap = props.listMovieDetailByLocation === null ? '' : props.listMovieDetailByLocation[0].lstCumRap
    const renderMovieByLocation = () => {
        return listCumRap && listCumRap.map((item, index) => {
            if (item.maCumRap === maCumRapLocation) {
                return (
                    <div key={index}>
                        {
                            item.danhSachPhim.map((product, indexA) => {
                                let date = "";
                                return (
                                    <div className="mvschedule-movielist-item" key={indexA}>
                                        <div className="mvschedule-movielist-content">
                                            <div className="mvschedule-movielist-image">
                                                <Link to={`/phim/${product.maPhim}`}>
                                                    <img src={product.hinhAnh} alt={product.tenPhim} />
                                                </Link>
                                            </div>
                                            <div>
                                                <Link className="mvschedule-movielist-title" to={`/phim/${product.biDanh}-${product.maPhim}`}>
                                                    {product.tenPhim}
                                                </Link>
                                                <div className="mvschedule-movielist-desc">Thời lượng: <span>120 phút</span></div>
                                            </div>
                                        </div>
                                        {
                                            product.lstLichChieuTheoPhim.map((xuatChieu, index) => {
                                                if ((new Date(xuatChieu.ngayChieuGioChieu).toLocaleDateString()) !== date) {
                                                    date = new Date(xuatChieu.ngayChieuGioChieu).toLocaleDateString();
                                                    return (
                                                        <div key={index}>
                                                            <div className="mvschedule-movielist-showtimes-date">
                                                                {new Date(xuatChieu.ngayChieuGioChieu).toLocaleDateString('vi-VN', { weekday: 'long', month: 'numeric', day: 'numeric', year: 'numeric' })}
                                                            </div>
                                                            <div className="mvschedule-movielist-showtimes">
                                                                {
                                                                    product.lstLichChieuTheoPhim.map((xuatChieu, index) => {
                                                                        if ((new Date(xuatChieu.ngayChieuGioChieu).toLocaleDateString()) === date) {
                                                                            return (
                                                                                <Link to={`/dat-ve/${xuatChieu.maLichChieu}`} className="mvschedule-movielist-showtimes-item" key={index}>
                                                                                    <div className="mvschedule-movielist-showtimes-content">
                                                                                        <span>{new Date(xuatChieu.ngayChieuGioChieu).toLocaleTimeString('vi-VN', { hour: '2-digit', })}:{new Date(xuatChieu.ngayChieuGioChieu).toLocaleTimeString('vi-VN', { minute: '2-digit' })}</span>
                                                                                        <label> ~ </label>{new Date(xuatChieu.ngayChieuGioChieu).toLocaleTimeString('vi-VN', { hour: '2-digit', })}:{new Date(xuatChieu.ngayChieuGioChieu).toLocaleTimeString('vi-VN', { minute: '2-digit' })}
                                                                                    </div>
                                                                                </Link>
                                                                            )
                                                                        }
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        })
    }

    useEffect(() => {
        dispatch(getBookingRequest())
    }, [])

    useEffect(() => {
        dispatch(actionDetailLocation(cumRapFirst))
        dispatch(actionGetListMovieByLocation(cumRapFirst))
    }, [cumRapFirst, activeRap])


    //render rap
    const renderRap = () => {
        return props.listCinema.map((item, index) => {
            return (
                <div className={activeRap === item.maHeThongRap ? 'mvschedule-cinema-item active' : 'mvschedule-cinema-item'} key={index} onClick={() => HandleChangeRap(item.maHeThongRap)}>
                    <img src={item.logo} alt='' />
                </div>
            )
        })
    }

    const HandleChangeRap = (maHeThongRap) => {
        setcumRapFirst(maHeThongRap);
        setactiveRap(maHeThongRap);
        if (maHeThongRap === 'CGV') {
            setmaCumRapLocation('cgv-aeon-binh-tan');
        } else if (maHeThongRap === 'BHDStar') {
            setmaCumRapLocation('bhd-star-cineplex-3-2');
        } else if (maHeThongRap === 'CineStar') {
            setmaCumRapLocation('cns-hai-ba-trung');
        } else if (maHeThongRap === 'Galaxy') {
            setmaCumRapLocation('glx-kinh-duong-vuong');
        } else if (maHeThongRap === 'LotteCinima') {
            setmaCumRapLocation('lotte-cantavil');
        } else if (maHeThongRap === 'MegaGS') {
            setmaCumRapLocation('megags-cao-thang');
        }
    }

    const handleMvScheduleLocationDetail = (e) => {
        e.target.previousSibling.classList.toggle('active');
    }

    //render he thong
    const renderLocation = () => {
        return props.detailLocation.map((item, index) => {
            return (
                <div className={activeCumRap === item.maCumRap ? 'mvschedule-location-item active' : 'mvschedule-location-item'} onClick={() => handleChangeLocation(item.maCumRap)} key={index}>
                    <div className="mvschedule-location-title">{item.tenCumRap}</div>
                    <div className="mvschedule-location-desc">{item.diaChi}</div>
                    <div className="mvschedule-location-detail" onClick={(e) => handleMvScheduleLocationDetail(e)}>[Chi tiết]</div>
                </div>
            )
        })
    }
    const handleChangeLocation = (maCumRap) => {
        setmaCumRapLocation(maCumRap);
        setactiveCumRap(maCumRap)
    }

    return (
        <section className="mvschedule section-padding">
            <div className="container">
                <div className="mvschedule-container">
                    <div className="mvschedule-cinema scroll-custom">
                        {renderRap()}
                    </div>
                    <div className="mvschedule-location scroll-custom">
                        {renderLocation()}
                    </div>
                    <div className="mvschedule-movielist scroll-custom">
                        {renderMovieByLocation()}
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        listCinema: state.cinema.listCinema,
        detailLocation: state.cinema.listDetailCinema,
        listMovieDetailByLocation: state.cinema.listMovieDetailByLocation
    }
}

export default connect(mapStateToProps)(Cinema);
