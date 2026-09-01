import React from 'react';
import { Link } from 'react-router-dom';
import data from './portfolioData';

const MyPortfolio = () => {
    const getStatusBadgeClass = (type) => {
        switch (type) {
            case 'live':
                return 'badge bg-success';
            case 'mobile':
                return 'badge bg-info text-dark';
            case 'offline':
                return 'badge bg-secondary';
            case 'sunsetted':
                return 'badge bg-dark';
            case 'internal':
                return 'badge bg-warning text-dark';
            default:
                return 'badge bg-secondary';
        }
    };

    return (
        <div className='portfolio my-4 my-md-5 py-3 py-md-4'>
            <div className="container-fluid px-0">
                <div className="text-center mb-4 mb-md-5">
                    <p className="pink-color fw-semibold mb-1" style={{ letterSpacing: '2px' }}>FEATURED PRODUCTION WORK</p>
                    <h2 className="fw-bold mb-3">Engineering Projects</h2>
                    <p className="text-secondary mx-auto" style={{ maxWidth: '700px', fontSize: '1rem', lineHeight: '1.7' }}>
                        Real-world production systems, scalable backends, cloud migrations, performance optimizations, and design systems I have architected and contributed to.
                    </p>
                </div>

                <div className="row row-cols-1 g-4 row-cols-md-2 row-cols-lg-3 text-start">
                    {
                        data.map((item, i) => (
                            <div key={i} className="col">
                                <div className=" custom-card box-shadow h-100 border-0 overflow-hidden" style={{ borderRadius: '12px' }}>
                                    {/* Thumbnail container */}
                                    <div className="position-relative overflow-hidden" style={{ height: "190px" }}>
                                        <img
                                            style={{ height: "100%", width: "100%", objectFit: "cover" }}
                                            src={item.image}
                                            alt={item.heading}
                                        />
                                        <div
                                            className="position-absolute top-0 start-0 end-0 bottom-0 d-flex flex-column justify-content-between p-3"
                                            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%)' }}
                                        >
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className={`${getStatusBadgeClass(item.statusType)} rounded-pill px-3 py-1 fw-semibold`} style={{ fontSize: '0.72rem' }}>
                                                    {item.statusBadge}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-white-50 small mb-0 fw-semibold" style={{ fontSize: '0.78rem' }}>
                                                    {item.company}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="card-body p-3 p-md-4 d-flex flex-column justify-content-between">
                                        <div>
                                            <p className="pink-color small fw-bold mb-1" style={{ fontSize: '0.8rem' }}>
                                                {item.role}
                                            </p>
                                            <h5 className="card-title fw-bold text-dark mb-2 fs-6" style={{ lineHeight: '1.4' }}>
                                                {item.heading}
                                            </h5>
                                            <p className="card-text text-secondary small mb-3" style={{ lineHeight: '1.6' }}>
                                                {item.summary}
                                            </p>

                                            {/* Key highlights / impact snippet */}
                                            <div className="p-2 rounded mb-3" style={{ borderLeft: '3px solid #FF014F' }}>
                                                <p className="small text-dark mb-0 fw-semibold" style={{ fontSize: '0.76rem', lineHeight: '1.4' }}>
                                                    <i className="fas fa-bolt pink-color me-1"></i> {item.impact}
                                                </p>
                                            </div>

                                            {/* Tech Stack Pills */}
                                            <div className="d-flex flex-wrap gap-1 mb-3">
                                                {item.techStack.slice(0, 5).map((tech, idx) => (
                                                    <span key={idx} className="badge bg-light text-dark border me-1 mb-1" style={{ fontSize: '0.72rem' }}>
                                                        {tech}
                                                    </span>
                                                ))}
                                                {item.techStack.length > 5 && (
                                                    <span className="badge bg-light text-secondary border mb-1" style={{ fontSize: '0.72rem' }}>
                                                        +{item.techStack.length - 5}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Actions */}
                                            <div className="d-flex gap-2 flex-wrap pt-2 border-top">
                                                {item.liveLink && (
                                                    <a
                                                        className="btn btn-sm btn-danger px-2 px-sm-3 py-2 text-decoration-none fw-semibold flex-grow-1 text-center"
                                                        href={item.liveLink}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        <i className="fas fa-external-link-alt me-1"></i> Live Platform
                                                    </a>
                                                )}
                                                <Link
                                                    to="/case-studies"
                                                    className={`btn btn-sm ${item.liveLink ? 'btn-outline-secondary flex-grow-1' : 'btn-danger w-100'} px-2 px-sm-3 py-2 fw-semibold text-decoration-none text-center`}
                                                >
                                                    <i className="fas fa-file-code me-1"></i> View Case Studies
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* Deep-Dive Case Studies Exploration Banner */}
                <div className=" custom-card box-shadow border-0 p-4 p-md-4 mt-5 text-start" style={{ borderRadius: '14px' }}>
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                        <div>
                            <span className="badge bg-danger1 rounded-pill px-3 py-1 fw-semibold small mb-2">SYSTEM ARCHITECTURE & ANALYSIS</span>
                            <h4 className="fw-bold text-dark mb-1 fs-5">Want deeper insights into my architecture decisions?</h4>
                            <p className="text-secondary small mb-0" style={{ maxWidth: '650px', lineHeight: '1.6' }}>
                                Explore comprehensive, production case studies detailing OTP anti-abuse defenses, high-concurrency cloud migrations, and scalable enterprise architectures.
                            </p>
                        </div>
                        <div className="d-flex flex-shrink-0">
                            <Link to="/case-studies" className="btn btn-danger1 px-4 py-2 fw-semibold d-inline-flex align-items-center">
                                <span>Explore Case Studies</span>
                                <i className="fas fa-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;
