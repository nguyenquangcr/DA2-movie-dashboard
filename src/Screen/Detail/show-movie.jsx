import React, { useEffect } from 'react'
import { useDispatch, connect } from "react-redux";
import { Link } from 'react-router-dom';
import { CircularProgress } from "@material-ui/core";
import { getMovieListRequest } from '../../redux/action/movie.action';

const ShowMovie = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovieListRequest())
    }
        , [dispatch]);

    const renderHtml = () => {
        return props.movieList && props.movieList.map((item, index) => {
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
    const { isLoading } = props;
    if (isLoading) {
        return <CircularProgress />;
    }
    return (
        renderHtml()
    )
}

const mapStateToProps = (state) => {
    return {
        movieList: state.movie.movieList,
        isLoading: state.common.isLoading,
    };
};

export default connect(mapStateToProps)(ShowMovie);
