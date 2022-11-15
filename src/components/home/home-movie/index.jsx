import React, { useState } from 'react';

//css
import './style.scss';
import AOS from "aos";
import "aos/dist/aos.css";
import ShowMovie from './show-movie';
import SoonMovie from './soon-movie';
const HomeMovie = () => {

    const [isValid, setIsValid] = useState(true);
    const renderTiltleShowMovie = () => {
        return isValid ? "active" : ""
    }
    const renderTiletleSoonMovie = () => {
        return isValid ? "" : "active"
    }
    const renderHtml = () => {
        return isValid ? <ShowMovie/>  : <SoonMovie />
    }
    AOS.init()
    return (
        <section className="scmovie section-padding">
            <div className="container" >
                <ul className="scmovie-tabs">
                    <li className={renderTiltleShowMovie()} onClick={() => {setIsValid(true)}}>
                        #Phim đang chiếu
                    </li>
                    <li className={renderTiletleSoonMovie()} onClick={() => {setIsValid(false)}}>
                        #Phim sắp chiếu
                    </li>
                </ul>
                <div className="scmovie-list">
                    {renderHtml()}
                </div>
            </div>
        </section>
    )
}

export default HomeMovie;
