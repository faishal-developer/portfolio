import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import faishal from '../image/faishal-edited.png';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isHomePage = location.pathname === "/" || location.pathname === "/home";

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleSectionClick = (e, sectionId) => {
        e.preventDefault();
        if (isHomePage) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', `#${sectionId}`);
            }
        } else {
            navigate(`/#${sectionId}`);
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <footer className="footer-section mt-5 pt-4 pb-3" role="contentinfo">
            {/* Elegant Neumorphic Divider */}
            <div className="footer-divider mb-5"></div>

            <div className="container-fluid px-0">
                <div className="row g-4 justify-content-between mb-4">
                    {/* Brand / Profile Column */}
                    <div className="col-12 col-lg-5 col-xl-4 text-start">
                        <div className="d-flex align-items-center mb-3">
                            <img 
                                src={faishal} 
                                alt="Md Faishal" 
                                className="footer-avatar me-3" 
                            />
                            <div>
                                <h3 className="fs-5 fw-bold mb-0 text-dark">Md Faishal</h3>
                                <span className="pink-color fw-semibold small">Full Stack Software Engineer</span>
                            </div>
                        </div>
                        <p className="text-secondary small mb-3" style={{ lineHeight: '1.7', maxWidth: '380px' }}>
                            Full Stack Software Engineer specialized in building scalable web applications, performant backend architectures, and modern user experiences.
                        </p>
                        <div className="d-inline-flex align-items-center bg-white rounded-pill px-3 py-1 border shadow-sm">
                            <span className="badge-pulse me-2"></span>
                            <span className="text-dark small fw-medium" style={{ fontSize: '0.8rem' }}>Open to opportunities</span>
                        </div>
                    </div>

                    {/* Quick Navigation Column */}
                    <div className="col-6 col-sm-6 col-lg-3 col-xl-3 text-start">
                        <h6 className="footer-heading text-uppercase fw-bold mb-3">Quick Navigation</h6>
                        <ul className="list-unstyled footer-nav-list mb-0">
                            <li><a href="#section-1" onClick={(e) => handleSectionClick(e, 'section-1')} className="footer-link"><i className="fas fa-chevron-right me-2 footer-link-arrow"></i>Home</a></li>
                            <li><a href="#section-1.2" onClick={(e) => handleSectionClick(e, 'section-1.2')} className="footer-link"><i className="fas fa-chevron-right me-2 footer-link-arrow"></i>Experience</a></li>
                            <li><a href="#section-2" onClick={(e) => handleSectionClick(e, 'section-2')} className="footer-link"><i className="fas fa-chevron-right me-2 footer-link-arrow"></i>What I Do</a></li>
                            <li><a href="#section-3" onClick={(e) => handleSectionClick(e, 'section-3')} className="footer-link"><i className="fas fa-chevron-right me-2 footer-link-arrow"></i>Projects</a></li>
                            <li><Link to="/case-studies" className="footer-link"><i className="fas fa-chevron-right me-2 footer-link-arrow"></i>Case Studies</Link></li>
                            <li><a href="#section-4" onClick={(e) => handleSectionClick(e, 'section-4')} className="footer-link"><i className="fas fa-chevron-right me-2 footer-link-arrow"></i>Skills</a></li>
                            <li><a href="#section-4.5" onClick={(e) => handleSectionClick(e, 'section-4.5')} className="footer-link"><i className="fas fa-chevron-right me-2 footer-link-arrow"></i>Education</a></li>
                            <li><a href="#section-5" onClick={(e) => handleSectionClick(e, 'section-5')} className="footer-link"><i className="fas fa-chevron-right me-2 footer-link-arrow"></i>Contact</a></li>
                        </ul>
                    </div>

                    {/* Connect & Reach Out Column */}
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-4 text-start">
                        <h6 className="footer-heading text-uppercase fw-bold mb-3">Connect & Reach Out</h6>
                        <p className="text-secondary small mb-3">
                            Open to mid-level engineering positions, frontend/backend contracts, and remote teams.
                        </p>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                            <a 
                                href="https://github.com/faishal-developer" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="social-icon-shadow footer-social-btn"
                                aria-label="GitHub Profile"
                                title="GitHub"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/md-faishal-4bb8b3219/" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="social-icon-shadow footer-social-btn"
                                aria-label="LinkedIn Profile"
                                title="LinkedIn"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a 
                                href="https://www.facebook.com/mohammod.faysal.14" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="social-icon-shadow footer-social-btn"
                                aria-label="Facebook Profile"
                                title="Facebook"
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a 
                                href="mailto:md.faishal.dev@gmail.com" 
                                className="social-icon-shadow footer-social-btn"
                                aria-label="Send Email"
                                title="Email"
                            >
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                        <div className="text-secondary small">
                            <div className="d-flex align-items-center mb-1">
                                <i className="fas fa-paper-plane pink-color me-2" style={{ width: '16px' }}></i>
                                <a href="mailto:md.faishal.dev@gmail.com" className="text-secondary text-decoration-none footer-link">
                                    Send Direct Email
                                </a>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-phone-alt pink-color me-2" style={{ width: '16px' }}></i>
                                <a href="tel:+8801853837981" className="text-secondary text-decoration-none footer-link">
                                    +880 1853-837981
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sub-footer Bottom Bar */}
                <div className="footer-bottom pt-4 border-top d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 text-center text-md-start">
                    <p className="text-muted small mb-0" style={{ fontSize: '0.85rem' }}>
                        © {new Date().getFullYear()}. All rights reserved by Md Faishal.
                    </p>
                    <button 
                        onClick={scrollToTop} 
                        className="btn btn-sm footer-back-to-top d-inline-flex align-items-center gap-2"
                        aria-label="Scroll back to top"
                    >
                        <span>Back to top</span>
                        <i className="fas fa-arrow-up"></i>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;