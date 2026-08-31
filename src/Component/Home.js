import React, { useEffect, useState } from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import './Home.css';
import MyPortfolio from './MyPortfolio';
import WhatIDo from './MyServices';
import SideNavbar from './SideNavbar';
import Skills from './Resume';
import Experience from './Experience';
import Education from './Education';

const Home = () => {
    const [expanded, setExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleToggle = (isExp) => {
        setExpanded(typeof isExp === 'boolean' ? isExp : !expanded);
    };

    // Calculate responsive layout dimensions
    const mainContentStyle = isMobile
        ? {
            marginLeft: 0,
            width: '100%',
            paddingTop: '56px',
            minHeight: '100vh'
        }
        : {
            marginLeft: expanded ? '240px' : '64px',
            width: expanded ? 'calc(100% - 240px)' : 'calc(100% - 64px)',
            minHeight: '100vh'
        };

    return (
        <div style={{ position: 'relative', padding: "2%", width: '100%', overflowX: 'hidden' }}>
            <SideNavbar expanded={expanded} onToggle={handleToggle} isMobile={isMobile} />

            <main style={mainContentStyle} className="main-content-layout">
                <div style={{ maxWidth: "1400px", margin: '0 auto' }} className="px-2 px-sm-3 px-md-4 py-3 py-md-4">
                    <section id="section-1"><Header /></section>
                    <section id="section-1.2"><Experience /></section>
                    <section id="section-2"><WhatIDo /></section>
                    <section id="section-3"><MyPortfolio /></section>
                    <section id="section-4"><Skills /></section>
                    <section id="section-4.5"><Education /></section>
                    <section id="section-5"><Contact /></section>
                    <Footer />
                </div>
            </main>
        </div>
    );
};

export default Home;