import React from 'react';
import Contact from './Contact';
import DownLoadResume from './DownLoadResume';
import Footer from './Footer';
import Header from './Header';
import './Home.css'
import MyPortfolio from './MyPortfolio';
import WhatIDo from './MyServices';

const Home = () => {
    return (
        <>
            <Header />
            <WhatIDo />
            <MyPortfolio />
            <DownLoadResume />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;