import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const SoonMovie = (props) => {
    const renderHtml = () => {
        return props.listSoonMovie && props.listSoonMovie.map((item, index) => {
            if (index < 5) {
                return (
                    <div className="detail-scmovie-item" key={index}>
                        <div className="detail-scmovie-image">
                            <Link to={`/phim/${item.biDanh}-${item.maPhim}`}>
                                <img src={item.hinhAnh} alt={item.tenPhim} />
                            </Link>
                        </div>
                        <div className="detail-scmovie-content">
                            <Link to={`/phim/${item.biDanh}-${item.maPhim}`} className="detail-scmovie-title">
                                {item.tenPhim}
                            </Link>
                            <div className="detail-scmovie-desc" dangerouslySetInnerHTML={{ __html: item.moTa }}></div>
                        </div>
                    </div>
                )
            }
        })
    }

    return (
        renderHtml()
    )
}

const mapStateToProps = state => {
    return {
        listSoonMovie: state.movie.listSoonMovie
    }
}

export default connect(mapStateToProps)(SoonMovie);
