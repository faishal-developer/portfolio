import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import './Home.css';
import MyPortfolio from './MyPortfolio';
import WhatIDo from './MyServices';
import Skills from './Resume';
import Experience from './Experience';
import Education from './Education';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.replace('#', '');
            const element = document.getElementById(sectionId);
            if (element) {
                // Short delay ensures all lazy or heavy DOM elements are positioned
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location.hash]);

    return (
        <div className="home-view">
            <section id="section-1"><Header /></section>
            <section id="section-1.2"><Experience /></section>
            <section id="section-2"><WhatIDo /></section>
            <section id="section-3"><MyPortfolio /></section>
            <section id="section-4"><Skills /></section>
            <section id="section-4.5"><Education /></section>
            <section id="section-5"><Contact /></section>
            <Footer />
        </div>
    );
};

export default Home;