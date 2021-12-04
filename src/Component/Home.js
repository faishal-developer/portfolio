import React, { useEffect, useState } from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import './Home.css'
import MyPortfolio from './MyPortfolio';
import WhatIDo from './MyServices';
import SideNavbar from './SideNavbar';
import Skills from './Resume';

const Home = () => {
    const [isWide, setIsWide] = useState( { maxWidth: '90%', marginLeft: '10%' } )
    const [width, setWidth] = useState()
    window.addEventListener( 'resize', function ( event ) {
        setWidth( window.innerWidth )
    } );

    useEffect( () => {
        setWidth( window.innerWidth )
        if ( width < 650 ) {
            setIsWide( { maxWidth: '100%', marginLeft: '0%' } )
        }
    }, [width] )

    const handleWidth = ( iswidth ) => {
        console.log( iswidth );
        if ( !iswidth ) {
            setIsWide( { maxWidth: '80%', marginLeft: '20%', transition: '.2s' } )
        } else {
            setIsWide( { maxWidth: '90%', marginLeft: '10%', transition: '.2s' } )
        }
    }
    return (
        <>
            <div>
                <SideNavbar width={width} handleWidth={handleWidth} />

                <div style={isWide} className="py-5">
                    <section id="section-1"><Header /></section>
                    <section id="section-2"><WhatIDo /></section>
                    <section id="section-3"><MyPortfolio /></section>
                    <section id="section-4"><Skills /></section>
                    <section id="section-5"><Contact /></section>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;