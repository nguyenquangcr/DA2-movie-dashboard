import React from 'react'

const MovieItem = (props) => {
    console.log(props.movie.tenPhim);
    return (
        <div>
            <h1>{props.movie.tenPhim}</h1>
            <img src={props.movie.hinhAnh} alt="Girl in a jacket" width="250" height="250"></img>
        </div>
    )
}
export default MovieItem;
