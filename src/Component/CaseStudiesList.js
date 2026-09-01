import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import caseStudiesData from './caseStudiesData';
import Footer from './Footer';

const CaseStudiesList = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Backend & Database Architecture', 'Backend & Security Engineering', 'Backend & Performance Optimization', 'Backend & Scalability Engineering'];

    const filteredCaseStudies = selectedCategory === 'All'
        ? caseStudiesData
        : caseStudiesData.filter(item => item.category === selectedCategory);

    return (
        <div className="case-studies-page py-3 py-md-4">
            {/* Top Navigation Bar: Back to Portfolio */}
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 mb-md-5">
                <Link to="/" className="btn downLoad-resume d-inline-flex align-items-center text-decoration-none px-3 py-2 border-0">
                    <i className="fas fa-arrow-left me-2 pink-color"></i>
                    <span className="fw-semibold small">Back to Portfolio</span>
                </Link>
                <div className="d-inline-flex align-items-center bg-white rounded-pill px-3 py-1 border shadow-sm mt-2 mt-sm-0">
                    <span className="badge-pulse me-2"></span>
                    <span className="text-dark small fw-medium" style={{ fontSize: '0.82rem' }}>Technical Engineering Case Studies</span>
                </div>
            </div>

            {/* Page Header & Intro */}
            <div className="text-center mb-4 mb-md-5">
                <p className="pink-color fw-bold text-uppercase mb-2" style={{ letterSpacing: '2px', fontSize: '0.9rem' }}>
                    ENGINEERING BREAKDOWNS
                </p>
                <h1 className="fw-bold hero-name mb-3">
                    Case <span className="pink-color">Studies</span>
                </h1>
                <p className="text-secondary mx-auto" style={{ maxWidth: '720px', fontSize: '1.05rem', lineHeight: '1.8' }}>
                    Production technical case studies documenting database architecture, API security, abuse prevention, and backend engineering decisions.
                </p>
            </div>

            {/* Category Filter Chips */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
                {categories.map((cat, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedCategory(cat)}
                        className={`btn px-3 py-2 rounded-pill fw-semibold transition-all ${selectedCategory === cat
                            ? 'btn-active shadow-sm'
                            : 'btn-outline-secondary bg-white text-dark border shadow-sm'
                            }`}
                        style={{ fontSize: '0.85rem' }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Case Studies Card Grid */}
            <div className="row g-4 row-cols-1 row-cols-md-2 mb-5">
                {filteredCaseStudies.map((study, index) => (
                    <div key={study.id} className="col d-flex">
                        <div className="custom-card box-shadow w-100 border-0 d-flex flex-column justify-content-between p-4" style={{ borderRadius: '14px' }}>
                            <div>
                                {/* Category Badge & Numbering */}
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="badge bg-danger1 rounded-pill px-3 py-1 fw-semibold" style={{ fontSize: '0.75rem' }}>
                                        {study.category}
                                    </span>
                                    <span className="text-muted fw-bold small" style={{ fontSize: '0.82rem' }}>
                                        CASE STUDY 0{index + 1}
                                    </span>
                                </div>

                                {/* Title */}
                                <h4 className="fw-bold mb-2 text-dark fs-5" style={{ lineHeight: '1.4' }}>
                                    {study.title}
                                </h4>

                                {/* Short Description */}
                                <p className="text-secondary small mb-3" style={{ lineHeight: '1.6', fontSize: '0.9rem' }}>
                                    {study.shortDescription}
                                </p>

                                {/* Technologies */}
                                <div className="d-flex flex-wrap gap-1 mb-4">
                                    {study.technologies.map((tech, i) => (
                                        <span key={i} className="badge bg-light text-dark border" style={{ fontSize: '0.72rem', fontWeight: 500 }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* View Details Link */}
                            <div className="pt-3 border-top">
                                <Link
                                    to={`/case-studies/${study.slug}`}
                                    className="btn btn-outline-danger1 w-100 fw-semibold d-flex align-items-center justify-content-center py-2"
                                    style={{ borderRadius: '8px', fontSize: '0.88rem' }}
                                >
                                    <span>Read Technical Case Study</span>
                                    <i className="fas fa-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Component */}
            <Footer />
        </div>
    );
};

export default CaseStudiesList;
