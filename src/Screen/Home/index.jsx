import React, { useEffect } from 'react';
import SlickHeader from '../../components/slider';
import Footer from '../../components/footer';
import { useLayoutEffect, useState } from "react";

import HomeMovie from '../../components/home/home-movie';
import TicketBooking from '../../components/home/ticket-booking';
import Cinema from '../../components/home/cinema';
import Header from '../../components/header';

const Home = () => {

    useEffect(() => {
        document.title = 'Block Buster';
    }, [])

    function useMediaQuery() {
        const [screenSize, setScreenSize] = useState([0, 0]);

        useLayoutEffect(() => {
            function updateScreenSize() {
                setScreenSize([window.innerWidth, window.innerHeight]);
            }
            window.addEventListener("resize", updateScreenSize);
            updateScreenSize();
            return () => window.removeEventListener("resize", updateScreenSize);
        }, []);

        return screenSize;
    }
    const [width] = useMediaQuery();
    return (
        <>
            <div className="header">
                <Header />
                <div className="container">
                    <SlickHeader />
                    {width >= 992 ? <TicketBooking /> : null}
                </div>
            </div>
            <div className="section-container">
                <HomeMovie />

                <Cinema />

            </div>

            <Footer />
        </>
    )
}


export default Home;
