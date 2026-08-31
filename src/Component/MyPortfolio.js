import React, { useState } from 'react';
import data from './portfolioData';
import { Modal } from 'react-bootstrap';

const MyPortfolio = () => {
    const [activeProject, setActiveProject] = useState(null);

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
                                <div className="card custom-card box-shadow h-100 border-0 overflow-hidden" style={{ borderRadius: '12px' }}>
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
                                            <h3 className="fs-5 fw-bold mb-2 text-dark">
                                                {item.heading}
                                            </h3>

                                            {/* Impact highlight pill */}
                                            <div className="p-2 rounded mb-3" style={{ backgroundColor: 'rgba(255, 1, 79, 0.08)', borderLeft: '3px solid #FF014F' }}>
                                                <p className="pink-color small fw-bold mb-0" style={{ fontSize: '0.78rem', lineHeight: '1.4' }}>
                                                    <i className="fas fa-chart-line me-1"></i> {item.impact}
                                                </p>
                                            </div>

                                            {/* Summary */}
                                            <p className="text-secondary small mb-3" style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                                                {item.summary}
                                            </p>
                                        </div>

                                        <div>
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
                                                <button
                                                    onClick={() => setActiveProject(item)}
                                                    className={`btn btn-sm ${item.liveLink ? 'btn-outline-secondary flex-grow-1' : 'btn-danger w-100'} px-2 px-sm-3 py-2 fw-semibold text-decoration-none text-center`}
                                                >
                                                    <i className="fas fa-layer-group me-1"></i> Case Study & Architecture
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Project Deep-Dive Modal */}
            {activeProject && (
                <Modal show={true} onHide={() => setActiveProject(null)} centered size="lg" contentClassName="border-0 shadow-lg">
                    <Modal.Header closeButton style={{ backgroundColor: '#ECF0F3', borderBottom: '1px solid #dee2e6' }}>
                        <div>
                            <span className={`${getStatusBadgeClass(activeProject.statusType)} rounded-pill px-3 py-1 small fw-semibold me-2`}>
                                {activeProject.statusBadge}
                            </span>
                            <Modal.Title className="fw-bold fs-5 d-inline align-middle">
                                {activeProject.heading}
                            </Modal.Title>
                            <p className="text-secondary small mb-0 mt-1">
                                <span className="pink-color fw-semibold">{activeProject.role}</span> • {activeProject.company}
                            </p>
                        </div>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: '#ECF0F3' }} className="p-3 p-md-4 text-start">
                        <div className="row g-4">
                            <div className="col-12 col-md-5">
                                <img
                                    src={activeProject.image}
                                    alt={activeProject.heading}
                                    className="w-100 rounded box-shadow mb-3"
                                    style={{ maxHeight: '220px', objectFit: 'cover' }}
                                />
                                <div className="p-3 bg-white rounded box-shadow mb-3">
                                    <h6 className="pink-color fw-bold small text-uppercase mb-2">
                                        <i className="fas fa-info-circle me-1"></i> Project Availability
                                    </h6>
                                    <p className="small text-secondary mb-0" style={{ lineHeight: '1.5' }}>
                                        {activeProject.statusType === 'live' && "This project is live in active production with real-world end users."}
                                        {activeProject.statusType === 'mobile' && "This backend engine powers the live mobile application on Google Play Store."}
                                        {activeProject.statusType === 'offline' && "This is a secure, offline-first / air-gapped system built for military personnel management."}
                                        {activeProject.statusType === 'sunsetted' && "This project was built for a commercial client / company and has since been sunsetted."}
                                        {activeProject.statusType === 'internal' && "This is a proprietary internal engineering tool used across internal development teams."}
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-7">
                                <div className="mb-3">
                                    <h6 className="pink-color fw-bold small text-uppercase">
                                        <i className="fas fa-bullseye me-1"></i> Measurable Production Outcomes
                                    </h6>
                                    <p className="fw-semibold text-dark mb-0">{activeProject.impact}</p>
                                </div>

                                <div className="mb-3">
                                    <h6 className="pink-color fw-bold small text-uppercase">
                                        <i className="fas fa-sitemap me-1"></i> Architecture & Engineering Scope
                                    </h6>
                                    <p className="text-secondary small mb-0" style={{ lineHeight: '1.7', fontSize: '0.92rem' }}>
                                        {activeProject.architectureDetails}
                                    </p>
                                </div>

                                <div className="mb-3">
                                    <h6 className="pink-color fw-bold small text-uppercase">
                                        <i className="fas fa-check-circle me-1"></i> Key Technical Highlights
                                    </h6>
                                    <ul className="text-secondary small mb-0 ps-3" style={{ lineHeight: '1.6' }}>
                                        {activeProject.keyHighlights.map((highlight, idx) => (
                                            <li key={idx}>{highlight}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-4">
                                    <h6 className="pink-color fw-bold small text-uppercase">
                                        <i className="fas fa-tools me-1"></i> Technology Stack
                                    </h6>
                                    <div className="d-flex flex-wrap gap-1">
                                        {activeProject.techStack.map((tech, idx) => (
                                            <span key={idx} className="badge bg-light text-dark border px-2 py-1" style={{ fontSize: '0.75rem' }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="d-flex gap-2 flex-wrap">
                                    {activeProject.liveLink && (
                                        <a
                                            className="btn btn-sm btn-danger px-4 py-2 text-decoration-none fw-semibold"
                                            href={activeProject.liveLink}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <i className="fas fa-external-link-alt me-1"></i> Open Live Platform
                                        </a>
                                    )}
                                    <button
                                        onClick={() => setActiveProject(null)}
                                        className="btn btn-sm btn-secondary px-3 py-2"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
};

export default MyPortfolio;


