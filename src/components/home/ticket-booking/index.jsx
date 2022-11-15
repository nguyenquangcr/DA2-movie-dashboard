import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//css
import './style.scss'
import { useDispatch } from "react-redux";
import { connect } from "react-redux"
import { actGetListDetailFilm } from '../../../redux/action/movie.action';

const TicketBooking = (props) => {
    const [maPhim, setmaPhim] = useState()

    const [state, setState] = useState(
        {
            maLichChieu: "",
            maRap: "",
            dateChieu: "",
            statusFilm: false,
            statusRap: false,
            statusDate: false,
            statusSuat: false,
            statusButton: false,
        }
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actGetListDetailFilm(maPhim))
    }, [maPhim])


    //Chon phim
    const handleOnchangeFilm = event => {
        if (event.target.value) {
            setmaPhim(event.target.value)
            setState({
                ...state,
                statusFilm: true
            })
        }
    }
    const renderListFilm = () => {        //1
        return props.listFilm && props.listFilm.map((item, index) => {
            return (
                <option value={item.maPhim} key={index}>{item.tenPhim}</option>
            )
        })
    }

    //chon rap
    const handleOnchangeCinema = event => {
        let maRapUpdate = event.target.value
        setState({
            ...state,
            // statusRap: true,
            maRap: maRapUpdate
        })
    }

    const renderRap = () => {         //2
        return props.listDetailFilm.heThongRapChieu && props.listDetailFilm.heThongRapChieu.map((item, index) => {
            return (
                <option key={index} value={item.maHeThongRap}>{item.tenHeThongRap}</option>
            )
        })
    }
    //date
    const renderDate = () => {
        if (state.maRap) {
            return props.listDetailFilm.heThongRapChieu && props.listDetailFilm.heThongRapChieu.map(item => {
                if (item.maHeThongRap === state.maRap) {
                    return item.cumRapChieu && item.cumRapChieu.map((product) => {
                        let date = "";
                        return product.lichChieuPhim.map((status, index) => {
                            // console.log(status);
                            if ((new Date(status.ngayChieuGioChieu).toLocaleDateString()) !== date) {
                                date = new Date(status.ngayChieuGioChieu).toLocaleDateString()
                                return (
                                    <option key={index}
                                        value={new Date(status.ngayChieuGioChieu).toLocaleDateString()}
                                    >
                                        {new Date(status.ngayChieuGioChieu).toLocaleDateString('vi-VN', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                                    </option>
                                )
                            }
                        })
                    })
                }
            })
        }
    }

    const handleOnchangeDate = (event) => {
        let ngayChieuUpdate = event.target.value;
        setState({
            ...state,
            dateChieu: ngayChieuUpdate
        })
    }

    //gio chieu
    const renderGio = () => {
        if (state.maRap) {
            return props.listDetailFilm.heThongRapChieu && props.listDetailFilm.heThongRapChieu.map(item => {
                if (item.maHeThongRap === state.maRap) {
                    return item.cumRapChieu.map(product => {
                        return product.lichChieuPhim.map((status, index) => {
                            if ((new Date(status.ngayChieuGioChieu).toLocaleDateString()) === state.dateChieu) {
                                return (
                                    <option key={index} value={status.maLichChieu} >
                                        {new Date(status.ngayChieuGioChieu).toLocaleTimeString('vi-VN'
                                            , { hour: '2-digit', }
                                        )}Gio
                                        {new Date(status.ngayChieuGioChieu).toLocaleTimeString('vi-VN'
                                            , { minute: '2-digit' }
                                        )} Phut
                                    </option>
                                )
                            }
                        })
                    })
                }
            })
        }
    }

    const handleOnchangeGio = event => {
        let maLichChieu = event.target.value
        setState({
            ...state,
            maLichChieu,
            statusButton: true
        })
    }

    //submit
    const renderSubmit = () => {
        if (state.statusButton) {
            return (
                <Link className="ticket-booking-button" to={`/dat-ve/${state.maLichChieu}`}>Mua vé</Link>
            )
        } else {
            return <Link className="ticket-booking-button disable" to="/">Mua vé</Link>
        }
    }


    return (
        <div className="ticket-booking">
            <div className="select-group ticket-booking-group">
                <select onChange={handleOnchangeFilm} className="form-control ticket-booking-select">
                    <option value="chon-phim" style={{ display: "none" }}>
                        Chọn phim
                    </option>
                    {renderListFilm()}
                </select>
            </div>
            <div className="select-group ticket-booking-group">
                <select onChange={handleOnchangeCinema} className="form-control ticket-booking-select">
                    <option value="chon-rap" style={{ display: "none" }}>Chọn rạp</option>
                    {renderRap()}
                </select>
            </div>
            <div className="select-group ticket-booking-group">
                <select onChange={handleOnchangeDate} className="form-control ticket-booking-select">
                    <option value="chon-ngay" style={{ display: "none" }}>
                        Chọn ngày chiếu
                    </option>
                    {renderDate()}
                </select>
            </div>
            <div className="select-group ticket-booking-group">
                <select onChange={handleOnchangeGio} className="form-control ticket-booking-select">
                    <option value="chon-ngay" style={{ display: "none" }}>
                        Chọn giờ chiếu
                    </option>
                    {renderGio()}
                </select>
            </div>
            <div className="center ticket-booking-action">
                {renderSubmit()}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        listFilm: state.movie.movieList,
        listDetailFilm: state.movie.listDetailFilm,
        //statusLogin: state.homeReducers.statusLogin
    }
}

export default connect(mapStateToProps)(TicketBooking)