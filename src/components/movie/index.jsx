import React, { useState } from 'react';

//css
import './style.scss';
import "aos/dist/aos.css";
import ShowMovie from './show-movie';
import SoonMovie from './soon-movie';
const HomeMovie = () => {
    return (
        <section className="scmovie section-padding">
            <div className="container" >
                <div className="mb-5">
                    <h3 class="heading-left">Phim đang chiếu</h3>
                    <ShowMovie/>
                </div>
                <div>
                    <h3 class="heading-left">Phim sắp chiếu</h3>
                    <SoonMovie />
                </div>
            </div>
        </section>
    )
}

export default HomeMovie;
