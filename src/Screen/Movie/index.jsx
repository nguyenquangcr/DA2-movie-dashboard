import React, { useEffect } from 'react';
import Footer from '../../components/footer';

import Movie from '../../components/movie';
import Header from '../../components/header';

const Home = () => {

    useEffect(() => {
        document.title = 'Block Buster - Danh sách phim';
    }, [])

    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className="section-container">
                <Movie />
            </div>
            <Footer />
        </>
    )
}


export default Home;
