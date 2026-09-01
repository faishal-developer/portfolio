import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import SideNav, {
    NavItem
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Scrollspy from "react-scrollspy";
import faishal2 from '../image/faishal-edited.png';

function Drawer({ expanded, onToggle, isMobile }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const isHomePage = location.pathname === "/" || location.pathname === "/home";
    const isCaseStudiesPage = location.pathname.startsWith("/case-studies");

    const handleSectionClick = (e, sectionId) => {
        e.preventDefault();
        setMobileOpen(false);

        if (isHomePage) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", `#${sectionId}`);
            }
        } else {
            navigate(`/#${sectionId}`);
            // Give React Router time to mount the home view before scrolling
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    };

    const handleCaseStudiesClick = (e) => {
        e.preventDefault();
        setMobileOpen(false);
        if (location.pathname === "/case-studies") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            navigate("/case-studies");
        }
    };

    return (
        <>
            {/* Desktop / Tablet Fixed Sidebar (>= 768px) */}
            <div className="d-none d-md-block desktop-sidebar-container">
                <SideNav
                    expanded={expanded}
                    onToggle={(isExp) => {
                        if (typeof onToggle === 'function') {
                            onToggle(isExp);
                        }
                    }}
                    style={{ backgroundColor: 'black', position: 'fixed', top: 0, bottom: 0, left: 0, zIndex: 1030 }}
                >
                    <NavItem className='nav-item-sidebar' eventKey="profile-header">
                        <Link to="/" className="d-flex align-items-center text-decoration-none" style={{ cursor: 'pointer' }}>
                            <img style={{ maxWidth: '44px', borderRadius: '50%' }} src={faishal2} alt='faishal' className="mx-2" />
                            <span className={!expanded ? 'd-none' : 'd-inline-block text-light fw-bold align-middle ms-2'}>
                                Md Faishal
                            </span>
                        </Link>
                    </NavItem>
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected={isCaseStudiesPage ? "case-studies" : "home"}>
                        {isHomePage ? (
                            <Scrollspy
                                className="px-1"
                                items={['section-1', 'section-1.2', 'section-2', 'section-3', 'section-4', 'section-4.5', 'section-5']}
                                currentClassName="is-current"
                            >
                                <a className='nav-item-a' href="#section-1" onClick={(e) => handleSectionClick(e, 'section-1')}>
                                    <NavItem className='nav-item-sidebar' eventKey="home">
                                        <i className="fa fa-fw fa-home" style={{ fontSize: "1.5em" }} />
                                        <span className={!expanded ? 'd-none' : 'd-inline-block'}>Home</span>
                                    </NavItem>
                                </a>
                                <a className='nav-item-a' href="#section-1.2" onClick={(e) => handleSectionClick(e, 'section-1.2')}>
                                    <NavItem className='nav-item-sidebar' eventKey="experience">
                                        <i style={{ fontSize: "1.5em" }} className="fa-solid fa-briefcase"></i>
                                        <span className={!expanded ? 'd-none' : 'd-inline-block'}>Experience</span>
                                    </NavItem>
                                </a>
                                <a className='nav-item-a' href="#section-2" onClick={(e) => handleSectionClick(e, 'section-2')}>
                                    <NavItem className='nav-item-sidebar' eventKey="services">
                                        <i style={{ fontSize: "1.5em" }} className="fas fa-cogs"></i>
                                        <span className={!expanded ? 'd-none' : 'd-inline-block'}>What I Do</span>
                                    </NavItem>
                                </a>
                                <a className='nav-item-a' href="#section-3" onClick={(e) => handleSectionClick(e, 'section-3')}>
                                    <NavItem className='nav-item-sidebar' eventKey="portfolio">
                                        <i style={{ fontSize: "1.5em" }} className="fas fa-layer-group"></i>
                                        <span className={!expanded ? 'd-none' : 'd-inline-block'}>Projects</span>
                                    </NavItem>
                                </a>
                                <a className={`nav-item-a ${isCaseStudiesPage ? 'is-current' : ''}`} href="/case-studies" onClick={handleCaseStudiesClick}>
                                    <NavItem className='nav-item-sidebar' eventKey="case-studies">
                                        <i style={{ fontSize: "1.5em" }} className="fas fa-file-code"></i>
                                        <span className={!expanded ? 'd-none' : 'd-inline-block'}>Case Studies</span>
                                    </NavItem>
                                </a>
                                <a className='nav-item-a' href="#section-4" onClick={(e) => handleSectionClick(e, 'section-4')}>
                                    <NavItem className='nav-item-sidebar' eventKey="skills">
                                        <i style={{ fontSize: "1.5em" }} className="fas fa-code"></i>
                                        <span className={!expanded ? 'd-none' : 'd-inline-block'}>Skills</span>
                                    </NavItem>
                                </a>
                                <a className='nav-item-a' href="#section-4.5" onClick={(e) => handleSectionClick(e, 'section-4.5')}>
                                    <NavItem className='nav-item-sidebar' eventKey="education">
                                        <i style={{ fontSize: "1.5em" }} className="fas fa-graduation-cap"></i>
                                        <span className={!expanded ? 'd-none' : 'd-inline-block'}>Education</span>
                                    </NavItem>
                                </a>
                                <a className='nav-item-a' href="#section-5" onClick={(e) => handleSectionClick(e, 'section-5')}>
                                    <NavItem className='nav-item-sidebar' eventKey="contact">
                                        <i style={{ fontSize: "1.5em" }} className="fas fa-address-book"></i>
                                        <span className={!expanded ? 'd-none' : 'd-inline-block'}>Contact</span>
                                    </NavItem>
                                </a>
                            </Scrollspy>
                        ) : (
                            <div className="px-1">
                                <a className='nav-item-a' href="/#section-1" onClick={(e) => handleSectionClick(e, 'section-1')}>
                                    <NavItem className='nav-item-sidebar' eventKey="home">
                                        <i className="fa fa-fw fa-home" style={{ fontSize: "1.5em" }} />
                                        <span className={!expanded ? 'd-none' : 'd-inline-block'}>Home</span>
                                    </NavItem>
                                </a>
                                <a className='nav-item-a' href="/#section-1.2" onClick={(e) => handleSectionClick(e, 'section-1.2')}>
                                    <NavItem className='nav-item-sidebar' eventKey="experience">
                                        <i style={{ fontSize: "1.5em" }} className="fa-solid fa-briefcase"></i>
                                        <span className={!expanded ? 'd-none' : 'd-inline-block'}>Experience</span>
                                    </NavItem>
                                </a>
                                <a className='nav-item-a' href="/#section-2" onClick={(e) => handleSectionClick(e, 'section-2')}>
                                    <NavItem className='nav-item-sidebar' eventKey="services">
                                        <i style={{ fontSize: "1.5em" }} className="fas fa-cogs"></i>
                                        <span className={!expanded ? 'd-none' : 'd-inline-block'}>What I Do</span>
                                    </NavItem>
                                </a>
                                <a className='nav-item-a' href="/#section-3" onClick={(e) => handleSectionClick(e, 'section-3')}>
                                    <NavItem className='nav-item-sidebar' eventKey="portfolio">
                                        <i style={{ fontSize: "1.5em" }} className="fas fa-layer-group"></i>
                                        <span className={!expanded ? 'd-none' : 'd-inline-block'}>Projects</span>
                                    </NavItem>
                                </a>
                                <a className={`nav-item-a ${isCaseStudiesPage ? 'is-current' : ''}`} href="/case-studies" onClick={handleCaseStudiesClick}>
                                    <NavItem className='nav-item-sidebar' eventKey="case-studies">
                                        <i style={{ fontSize: "1.5em" }} className="fas fa-file-code"></i>
                                        <span className={!expanded ? 'd-none' : 'd-inline-block'}>Case Studies</span>
                                    </NavItem>
                                </a>
                                <a className='nav-item-a' href="/#section-4" onClick={(e) => handleSectionClick(e, 'section-4')}>
                                    <NavItem className='nav-item-sidebar' eventKey="skills">
                                        <i style={{ fontSize: "1.5em" }} className="fas fa-code"></i>
                                        <span className={!expanded ? 'd-none' : 'd-inline-block'}>Skills</span>
                                    </NavItem>
                                </a>
                                <a className='nav-item-a' href="/#section-4.5" onClick={(e) => handleSectionClick(e, 'section-4.5')}>
                                    <NavItem className='nav-item-sidebar' eventKey="education">
                                        <i style={{ fontSize: "1.5em" }} className="fas fa-graduation-cap"></i>
                                        <span className={!expanded ? 'd-none' : 'd-inline-block'}>Education</span>
                                    </NavItem>
                                </a>
                                <a className='nav-item-a' href="/#section-5" onClick={(e) => handleSectionClick(e, 'section-5')}>
                                    <NavItem className='nav-item-sidebar' eventKey="contact">
                                        <i style={{ fontSize: "1.5em" }} className="fas fa-address-book"></i>
                                        <span className={!expanded ? 'd-none' : 'd-inline-block'}>Contact</span>
                                    </NavItem>
                                </a>
                            </div>
                        )}
                    </SideNav.Nav>
                </SideNav>
            </div>

            {/* Mobile Top Navigation (< 768px) */}
            <div className="d-md-none">
                <header
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '56px',
                        backgroundColor: '#000000',
                        zIndex: 1045,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0 1rem',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
                    }}
                >
                    <a href="/#section-1" className="d-flex align-items-center text-decoration-none text-light" onClick={(e) => handleSectionClick(e, 'section-1')}>
                        <img style={{ width: '34px', height: '34px', borderRadius: '50%' }} src={faishal2} alt='faishal' className="me-2" />
                        <span className="fw-bold fs-6">Md Faishal</span>
                    </a>
                    <button
                        className="btn text-light p-1 border-0"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle navigation menu"
                    >
                        <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'} fs-4 pink-color`}></i>
                    </button>
                </header>

                {/* Mobile Menu Backdrop & Links */}
                {mobileOpen && (
                    <div className="mobile-nav-backdrop animate__animated animate__fadeIn">
                        <nav className="d-flex flex-column pt-2">
                            <a href="/#section-1" className="mobile-nav-link" onClick={(e) => handleSectionClick(e, 'section-1')}>
                                <i className="fas fa-home"></i> Home
                            </a>
                            <a href="/#section-1.2" className="mobile-nav-link" onClick={(e) => handleSectionClick(e, 'section-1.2')}>
                                <i className="fas fa-briefcase"></i> Experience
                            </a>
                            <a href="/#section-2" className="mobile-nav-link" onClick={(e) => handleSectionClick(e, 'section-2')}>
                                <i className="fas fa-cogs"></i> What I Do
                            </a>
                            <a href="/#section-3" className="mobile-nav-link" onClick={(e) => handleSectionClick(e, 'section-3')}>
                                <i className="fas fa-layer-group"></i> Projects
                            </a>
                            <a href="/case-studies" className={`mobile-nav-link ${isCaseStudiesPage ? 'active' : ''}`} onClick={handleCaseStudiesClick}>
                                <i className="fas fa-file-code"></i> Case Studies
                            </a>
                            <a href="/#section-4" className="mobile-nav-link" onClick={(e) => handleSectionClick(e, 'section-4')}>
                                <i className="fas fa-code"></i> Skills
                            </a>
                            <a href="/#section-4.5" className="mobile-nav-link" onClick={(e) => handleSectionClick(e, 'section-4.5')}>
                                <i className="fas fa-graduation-cap"></i> Education
                            </a>
                            <a href="/#section-5" className="mobile-nav-link" onClick={(e) => handleSectionClick(e, 'section-5')}>
                                <i className="fas fa-address-book"></i> Contact
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </>
    );
}

export default Drawer;