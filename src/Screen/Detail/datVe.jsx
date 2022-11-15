import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './booking.scss'

const DatVe = (props) => {

    const [maHeThongRap, setMaHeThongRap] = useState('');
    const [maCumRap, setMaCumRap] = useState('');
    const [day, setDay] = useState('');

    useEffect(() => {
        if (props.Detail) {
            setMaHeThongRap(props.Detail[0].maHeThongRap)
        }
    }, [props.Detail]);

    useEffect(() => {
        if (maHeThongRap) {
            return props.Detail && props.Detail.map(item => {
                if (item.maHeThongRap === maHeThongRap) {
                    setMaCumRap(item.cumRapChieu[0].maCumRap);
                }
            })
        }
    }, [maHeThongRap, props.Detail])

    useEffect(() => {
        if (maCumRap && maHeThongRap) {
            return props.Detail && props.Detail.map(item => {
                if (item.maHeThongRap === maHeThongRap) {
                    return item.cumRapChieu.map(product => {
                        if (product.maCumRap === maCumRap) {
                            setDay(new Date(product.lichChieuPhim[0].ngayChieuGioChieu).toLocaleDateString())
                        }
                    })
                }
            })
        }
    }, [maCumRap, maHeThongRap, props.Detail])

    const renderSystem = () => {
        return props.Detail && props.Detail.map(item => {
            return (
                <div onClick={() => setMaHeThongRap(item.maHeThongRap)}><img src={item.logo} alt='' style={{ width: '69px' }} /></div>
            )
        })
    }

    const renderLocation = () => {
        return props.Detail && props.Detail.map(item => {
            if (item.maHeThongRap === maHeThongRap) {
                return item.cumRapChieu && item.cumRapChieu.map(product => {
                    return (<div onClick={() => setMaCumRap(product.maCumRap)}>{product.tenCumRap}</div>)
                })
            }
        })
    }

    const renderDate = () => {
        return props.Detail && props.Detail.map(item => {
            if (item.maHeThongRap === maHeThongRap) {
                return item.cumRapChieu && item.cumRapChieu.map(product => {
                    if (product.maCumRap === maCumRap) {
                        let date = "";
                        return product.lichChieuPhim.map(dayTime => {
                            if ((new Date(dayTime.ngayChieuGioChieu).toLocaleDateString()) !== date) {
                                date = new Date(dayTime.ngayChieuGioChieu).toLocaleDateString()
                                return (
                                    <div onClick={() => setDay(new Date(dayTime.ngayChieuGioChieu).toLocaleDateString())}>
                                        {new Date(dayTime.ngayChieuGioChieu).toLocaleDateString('vi-VN', { weekday: 'long', month: 'numeric', day: 'numeric', year: 'numeric' })}
                                    </div>
                                )
                            }
                        })
                    }
                })
            }
        })
    }

    const renderHour = () => {
        return props.Detail && props.Detail.map(item => {
            if (item.maHeThongRap === maHeThongRap) {
                return item.cumRapChieu && item.cumRapChieu.map(product => {
                    if (product.maCumRap === maCumRap) {
                        return product.lichChieuPhim.map(dayTime => {
                            if ((new Date(dayTime.ngayChieuGioChieu).toLocaleDateString()) === day) {
                                return (
                                    <div>
                                        <Link to={`/dat-ve/${dayTime.maLichChieu}`}>
                                            {new Date(dayTime.ngayChieuGioChieu).toLocaleTimeString('vi-VN'
                                                , { hour: '2-digit', }
                                            )}Gio
                                         {new Date(dayTime.ngayChieuGioChieu).toLocaleTimeString('vi-VN'
                                                , { minute: '2-digit' }
                                            )} Phut
                                    </Link>
                                    </div>
                                )
                            }
                        })
                    }
                })
            }
        })
    }

    return (
        <div id='booking' className="booking">
            <h3 className="heading-left">Danh sách lịch chiếu</h3>
            <div className='row'>
                <div className='col-3'>{renderSystem()}</div>
                <div className='col-3'>{renderLocation()}</div>
                <div className='col-3'>{renderDate()}</div>
                <div className='col-3'>{renderHour()}</div>
            </div>
        </div>
    )
}

export default DatVe
