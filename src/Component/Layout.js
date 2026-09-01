import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SideNavbar from './SideNavbar';
import './Home.css';

const Layout = ({ children }) => {
    const [expanded, setExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Automatic scroll-to-top on route change if no hash target is specified
    useEffect(() => {
        if (!location.hash) {
            if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
                try {
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'instant' in window ? 'auto' : 'smooth'
                    });
                } catch (e) {
                    window.scrollTo(0, 0);
                }
            }
        }
    }, [location.pathname, location.hash]);

    const handleToggle = (isExp) => {
        setExpanded(typeof isExp === 'boolean' ? isExp : !expanded);
    };

    // Calculate responsive layout dimensions matching existing system
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
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
