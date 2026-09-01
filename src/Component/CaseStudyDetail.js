import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import caseStudiesData from './caseStudiesData';
import Footer from './Footer';

const CaseStudyDetail = () => {
    const { slug } = useParams();

    const study = caseStudiesData.find(item => item.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!study) {
        return (
            <div className="text-center py-5">
                <h2 className="fw-bold mb-3">Case Study Not Found</h2>
                <p className="text-secondary mb-4">The requested case study could not be located.</p>
                <Link to="/case-studies" className="btn btn-danger px-4 py-2">
                    Back to Case Studies
                </Link>
            </div>
        );
    }

    const isPlaylistStudy = study.id === 'my-playlist-folder-management';
    const isOtpStudy = study.id === 'otp-api-abuse-prevention';
    const isPerfStudy = study.id === 'api-performance-optimization';
    const isPushStudy = study.id === 'scaling-push-notification-delivery';

    return (
        <div className="case-study-detail-page py-3 py-md-4">
            {/* Top Navigation: Back to Case Studies & Portfolio Home */}
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 mb-md-5">
                <Link
                    to="/case-studies"
                    className="btn downLoad-resume d-inline-flex align-items-center text-decoration-none px-3 py-2 border-0"
                >
                    <i className="fas fa-arrow-left me-2 pink-color"></i>
                    <span className="fw-semibold small">Back to Case Studies</span>
                </Link>
                <Link to="/" className="btn btn-link text-secondary text-decoration-none small">
                    Portfolio Home
                </Link>
            </div>

            {/* Case Study Header Banner */}
            <div className="custom-card box-shadow border-0 p-4 p-md-5 mb-5 text-start" style={{ borderRadius: '16px' }}>
                <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
                    <span className="badge bg-danger1 rounded-pill px-3 py-1 fw-semibold" style={{ fontSize: '0.75rem' }}>
                        {study.category}
                    </span>
                    <span className="text-muted small">•</span>
                    <span className="text-secondary small fw-semibold">{study.role}</span>
                    <span className="text-muted small">•</span>
                    <span className="text-muted small">{study.timeline}</span>
                </div>
                <h2 className="fw-bold hero-name mb-3">
                    {study.title}
                </h2>
                <p className="text-secondary mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                    {study.shortDescription}
                </p>

                {/* Technologies List */}
                <div className="d-flex flex-wrap gap-2 pt-3 border-top">
                    {study.technologies.map((tech, i) => (
                        <span key={i} className="badge bg-light text-dark border px-3 py-2 fw-medium" style={{ fontSize: '0.82rem' }}>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Structured Technical Sections */}
            <div className="row g-4 text-start">
                <div className="col-12">

                    {/* Section 1: Overview */}
                    <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                        <div className="d-flex align-items-center mb-3">
                            <i className="fas fa-info-circle pink-color fs-4 me-3"></i>
                            <h3 className="fw-bold fs-5 mb-0 text-dark">Overview</h3>
                        </div>
                        <p className="text-secondary mb-0" style={{ lineHeight: '1.8', fontSize: '0.98rem' }}>
                            {study.overview}
                        </p>
                    </div>

                    {/* RENDER SPECIFIC CASE STUDY 01: MY PLAYLIST */}
                    {isPlaylistStudy && (
                        <>
                            {/* The Initial Assumption */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-hourglass-start pink-color fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">The Initial Assumption</h3>
                                </div>
                                <p className="text-secondary mb-0" style={{ lineHeight: '1.8' }}>
                                    {study.initialAssumption}
                                </p>
                            </div>

                            {/* Database Design */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-database pink-color fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">Database Design</h3>
                                </div>
                                <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                                    {study.databaseDesign.description}
                                </p>
                                {/* ER Diagram Placeholder Box */}
                                <div className="p-4 rounded mb-4 text-center border case-study-diagram-box" style={{ borderStyle: 'dashed' }}>
                                    <i className="fas fa-project-diagram pink-color fs-2 mb-2"></i>
                                    <h6 className="fw-bold text-dark mb-1">Database / ER Diagram Placeholder</h6>
                                    <p className="text-muted small mb-0" style={{ maxWidth: '650px', margin: '0 auto' }}>
                                        {study.databaseDesign.placeholderText}
                                    </p>
                                </div>
                            </div>

                            {/* Data Integrity & Business Rules */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-tasks pink-color fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">Data Integrity & Business Rules</h3>
                                </div>
                                <p className="text-secondary mb-3" style={{ lineHeight: '1.8' }}>
                                    Before finalizing API behavior, explicit business rules and constraint edge cases were evaluated:
                                </p>
                                <ul className="list-unstyled mb-0">
                                    {study.dataIntegrity.map((rule, i) => (
                                        <li key={i} className="d-flex align-items-start mb-2">
                                            <i className="fas fa-check-circle pink-color mt-1 me-2" style={{ fontSize: '0.85rem' }}></i>
                                            <span className="text-secondary" style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>{rule}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Authentication & Authorization */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-user-shield pink-color fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">Authentication & Authorization</h3>
                                </div>
                                <p className="text-secondary mb-0" style={{ lineHeight: '1.8' }}>
                                    {study.authSecurity}
                                </p>
                            </div>

                            {/* Rate Limiting */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-tachometer-alt pink-color fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">Rate Limiting</h3>
                                </div>
                                <p className="text-secondary mb-0" style={{ lineHeight: '1.8' }}>
                                    {study.rateLimiting}
                                </p>
                            </div>

                            {/* Origin Restrictions */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-globe pink-color fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">Origin Restrictions</h3>
                                </div>
                                <p className="text-secondary mb-0" style={{ lineHeight: '1.8' }}>
                                    {study.originRestrictions}
                                </p>
                            </div>

                            {/* Testing & Deployment */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-vial pink-color fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">Testing & Deployment</h3>
                                </div>
                                <p className="text-secondary mb-0" style={{ lineHeight: '1.8' }}>
                                    {study.testingAndDeployment}
                                </p>
                            </div>
                        </>
                    )}

                    {/* RENDER SPECIFIC CASE STUDY 02: OTP API ABUSE PREVENTION */}
                    {isOtpStudy && (
                        <>
                            {/* The Attack */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-shield-virus text-danger1 fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">The Attack</h3>
                                </div>
                                <p className="text-secondary mb-0" style={{ lineHeight: '1.8' }}>
                                    {study.attackDetails.description}
                                </p>
                            </div>

                            {/* Why Phone-Based Limits Were Insufficient */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-mobile-alt pink-color fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">Why Phone-Based Limits Were Insufficient</h3>
                                </div>
                                <p className="text-secondary mb-0" style={{ lineHeight: '1.8' }}>
                                    {study.phoneLimitFailure}
                                </p>
                            </div>

                            {/* Why IP Blocking Was Not Enough */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-network-wired pink-color fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">Why IP Blocking Was Not Enough</h3>
                                </div>
                                <p className="text-secondary mb-0" style={{ lineHeight: '1.8' }}>
                                    {study.ipBlockingFailure}
                                </p>
                            </div>

                            {/* PassKey System */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-key pink-color fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">PassKey System Architecture</h3>
                                </div>
                                <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                                    {study.passkeySystem.description}
                                </p>

                                {/* PassKey System Architecture Diagram Box */}
                                <div className="p-4 rounded mb-4 text-center border case-study-diagram-box" style={{ borderStyle: 'dashed' }}>
                                    <i className="fas fa-project-diagram pink-color fs-2 mb-2"></i>
                                    <h6 className="fw-bold text-dark mb-2">PassKey Flow Architecture</h6>
                                    <code className="d-block text-dark py-2 px-3 rounded border mx-auto font-monospace small case-study-code-block" style={{ maxWidth: '600px', whiteSpace: 'pre-wrap' }}>
                                        {study.passkeySystem.placeholderDiagramText}
                                    </code>
                                </div>

                                {/* Flow Steps */}
                                <div className="row g-3">
                                    {study.passkeySystem.flowSteps.map((st, i) => (
                                        <div key={i} className="col-12 col-md-6 col-lg-3">
                                            <div className="p-3 rounded border text-center h-100 case-study-step-card">
                                                <span className="badge rounded-circle bg-danger1 text-white mb-2 d-inline-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px', fontSize: '0.78rem' }}>
                                                    {st.step}
                                                </span>
                                                <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.85rem' }}>{st.title}</h6>
                                                <p className="text-muted small mb-0" style={{ fontSize: '0.78rem', lineHeight: '1.5' }}>
                                                    {st.detail}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Additional CAPTCHA Layer */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-robot pink-color fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">Additional CAPTCHA Layer</h3>
                                </div>
                                <span className="badge bg-warning text-dark mb-3 px-3 py-1 fw-semibold" style={{ fontSize: '0.78rem' }}>
                                    Planned Enhancement / Next Security Layer
                                </span>
                                <p className="text-secondary mb-0" style={{ lineHeight: '1.8' }}>
                                    {study.plannedCaptcha}
                                </p>
                            </div>

                            {/* Security Considerations */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-shield-alt text-success fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">Security Considerations</h3>
                                </div>
                                <p className="text-secondary mb-0" style={{ lineHeight: '1.8' }}>
                                    {study.securityConsiderations}
                                </p>
                            </div>
                        </>
                    )}

                    {/* RENDER SPECIFIC CASE STUDY 03: API PERFORMANCE OPTIMIZATION */}
                    {isPerfStudy && (
                        <>
                            {/* The Problem */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-exclamation-triangle text-warning fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">The Problem</h3>
                                </div>
                                <p className="text-secondary mb-3" style={{ lineHeight: '1.8' }}>
                                    {study.problem.description}
                                </p>
                                <div style={{ backgroundColor: '#6d112f0d' }} className="p-3 rounded  border-start border-4 border-danger">
                                    <p className="fw-semibold text-dark mb-0" style={{ fontStyle: 'italic', color: '#333 !important', fontSize: '0.95rem' }}>
                                        "{study.problem.question}"
                                    </p>
                                </div>
                            </div>

                            {/* Investigation */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-search-minus pink-color fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">Investigation</h3>
                                </div>
                                <p className="text-secondary mb-0" style={{ lineHeight: '1.8' }}>
                                    {study.investigation.description}
                                </p>
                            </div>

                            {/* Four Optimizations Breakdown */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-cogs pink-color fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">Layered Optimizations Breakdown</h3>
                                </div>

                                <div className="row g-4 mt-1">
                                    {study.optimizations.map((opt, i) => (
                                        <div key={i} className="col-12 col-md-6">
                                            <div className="p-4 rounded border h-100 case-study-step-card bg-white">
                                                <div className="d-flex align-items-center mb-2">
                                                    <span className="badge rounded-circle bg-danger1 text-white me-2 d-inline-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px', fontSize: '0.78rem' }}>
                                                        {opt.number}
                                                    </span>
                                                    <h5 className="fw-bold text-dark mb-0 fs-6">{opt.title}</h5>
                                                </div>
                                                <p className="text-secondary small mb-0" style={{ lineHeight: '1.6', fontSize: '0.88rem' }}>
                                                    {opt.description}
                                                </p>
                                                {opt.cacheFlowDiagram && (
                                                    <div className="mt-3 p-2 rounded  border text-center font-monospace text-dark" style={{ fontSize: '0.75rem', backgroundColor: "#6d112f0d" }}>
                                                        {opt.cacheFlowDiagram}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Optimization Strategy Architecture */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-layer-group pink-color fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">Optimization Strategy & Architecture</h3>
                                </div>
                                <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                                    {study.optimizationStrategy.description}
                                </p>
                                <div className="row g-3">
                                    {study.optimizationStrategy.layers.map((layer, idx) => (
                                        <div key={idx} className="col-12 col-sm-6 col-md-3">
                                            <div className="p-3 rounded border text-center h-100 case-study-step-card">
                                                <i className="fas fa-server pink-color mb-2"></i>
                                                <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.85rem' }}>{layer.name}</h6>
                                                <p className="text-muted small mb-0" style={{ fontSize: '0.78rem', lineHeight: '1.5' }}>
                                                    {layer.detail}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Results & Metrics */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4 bg-light" style={{ borderRadius: '14px', borderLeft: '4px solid #198754' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-chart-line text-success fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">Results & Performance Impact</h3>
                                </div>
                                <p className="text-secondary mb-3" style={{ lineHeight: '1.8' }}>
                                    {study.results.summary}
                                </p>
                                <div style={{ backgroundColor: '#6d112f0d' }} className="d-inline-block  px-4 py-3 rounded border shadow-sm">
                                    <span className="fw-bold text-success fs-5 d-block">
                                        <i className="fas fa-bolt me-2"></i>
                                        {study.results.highlight}
                                    </span>
                                </div>
                            </div>
                        </>
                    )}

                    {/* RENDER SPECIFIC CASE STUDY 04: SCALING PUSH NOTIFICATION DELIVERY */}
                    {isPushStudy && (
                        <>
                            {/* The Problem */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-exclamation-triangle text-warning fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">The Problem</h3>
                                </div>
                                <p className="text-secondary mb-3" style={{ lineHeight: '1.8' }}>
                                    {study.problem.description}
                                </p>
                                <div className="p-3 rounded bg-light border-start border-4 border-danger">
                                    <p className="fw-semibold text-dark mb-0" style={{ fontStyle: 'italic', fontSize: '0.95rem' }}>
                                        "{study.problem.question}"
                                    </p>
                                </div>
                            </div>

                            {/* Initial Investigation & Emergency Mitigation */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-search-minus pink-color fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">Initial Investigation & Emergency Mitigation</h3>
                                </div>
                                <p className="text-secondary mb-0" style={{ lineHeight: '1.8' }}>
                                    {study.initialInvestigation}
                                </p>
                            </div>

                            {/* Finding the Root Cause & Timing Pattern */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-clock pink-color fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">Finding the Root Cause & Timing Pattern</h3>
                                </div>
                                <p className="text-secondary mb-3" style={{ lineHeight: '1.8' }}>
                                    {study.findingRootCause.description}
                                </p>
                                <div className="p-3 rounded bg-light border-start border-4 border-info">
                                    <p className="text-dark mb-0" style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>
                                        <i className="fas fa-bullseye pink-color me-2"></i>
                                        {study.findingRootCause.timingPattern}
                                    </p>
                                </div>
                            </div>

                            {/* Root Cause Analysis */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-bug text-danger1 fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">Root Cause Analysis</h3>
                                </div>
                                <p className="text-secondary mb-3" style={{ lineHeight: '1.8' }}>
                                    {study.rootCause.description}
                                </p>
                                <div className="p-3 rounded mb-3 text-center border font-monospace text-dark case-study-diagram-box" style={{ borderStyle: 'dashed' }}>
                                    <code className="d-block py-2 px-3 rounded bg-light border text-danger1 fw-bold" style={{ fontSize: '0.9rem' }}>
                                        {study.rootCause.memoryImpact}
                                    </code>
                                </div>
                                <p className="text-secondary mb-0" style={{ lineHeight: '1.8' }}>
                                    {study.rootCause.explanation}
                                </p>
                            </div>

                            {/* Solution: Batch Processing */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-boxes pink-color fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">The Solution: Batch Processing Architecture</h3>
                                </div>
                                <p className="text-secondary mb-2" style={{ lineHeight: '1.8' }}>
                                    {study.solution.description}
                                </p>
                                <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                                    {study.solution.batchDetails}
                                </p>
                                <div className="row g-3">
                                    {study.solution.flowSteps.map((st, i) => (
                                        <div key={i} className="col-12 col-sm-6 col-md-3">
                                            <div className="p-3 rounded border text-center h-100 case-study-step-card">
                                                <span className="badge rounded-circle bg-danger1 text-white mb-2 d-inline-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px', fontSize: '0.78rem' }}>
                                                    {i + 1}
                                                </span>
                                                <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.85rem' }}>{st.step}</h6>
                                                <p className="text-muted small mb-0" style={{ fontSize: '0.78rem', lineHeight: '1.5' }}>
                                                    {st.detail}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Before vs After Comparison */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-exchange-alt pink-color fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">Before vs After Comparison</h3>
                                </div>
                                <div className="row g-4">
                                    <div className="col-12 col-md-6">
                                        <div className="p-4 rounded border border-danger bg-light h-100">
                                            <h5 className="fw-bold text-danger1 mb-3 fs-6">
                                                <i className="fas fa-times-circle me-2"></i>Before Optimization
                                            </h5>
                                            <ul className="list-unstyled mb-0">
                                                {study.beforeAfter.before.map((item, idx) => (
                                                    <li key={idx} className="d-flex align-items-start mb-2">
                                                        <i className="fas fa-arrow-right text-danger1 mt-1 me-2" style={{ fontSize: '0.8rem' }}></i>
                                                        <span className="text-secondary small">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="p-4 rounded border border-success bg-light h-100">
                                            <h5 className="fw-bold text-success mb-3 fs-6">
                                                <i className="fas fa-check-circle me-2"></i>After Batch Processing
                                            </h5>
                                            <ul className="list-unstyled mb-0">
                                                {study.beforeAfter.after.map((item, idx) => (
                                                    <li key={idx} className="d-flex align-items-start mb-2">
                                                        <i className="fas fa-check text-success mt-1 me-2" style={{ fontSize: '0.8rem' }}></i>
                                                        <span className="text-secondary small">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Production Mitigation vs Permanent Solution */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-shield-alt pink-color fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">Emergency Mitigation vs Permanent Solution</h3>
                                </div>
                                <div className="row g-4">
                                    <div className="col-12 col-md-6">
                                        <div className="p-4 rounded border bg-white h-100">
                                            <span className="badge bg-warning text-dark mb-2 px-3 py-1 fw-semibold" style={{ fontSize: '0.75rem' }}>
                                                {study.mitigationVsSolution.emergencyMitigation.title}
                                            </span>
                                            <h6 className="fw-bold text-dark mb-2">{study.mitigationVsSolution.emergencyMitigation.action}</h6>
                                            <p className="text-secondary small mb-0" style={{ lineHeight: '1.6' }}>
                                                {study.mitigationVsSolution.emergencyMitigation.impact}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="p-4 rounded border bg-white h-100">
                                            <span className="badge bg-success text-white mb-2 px-3 py-1 fw-semibold" style={{ fontSize: '0.75rem' }}>
                                                {study.mitigationVsSolution.permanentSolution.title}
                                            </span>
                                            <h6 className="fw-bold text-dark mb-2">{study.mitigationVsSolution.permanentSolution.action}</h6>
                                            <p className="text-secondary small mb-0" style={{ lineHeight: '1.6' }}>
                                                {study.mitigationVsSolution.permanentSolution.impact}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Results & Performance Impact */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4 bg-light" style={{ borderRadius: '14px', borderLeft: '4px solid #198754' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-chart-line text-success fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">Results & System Impact</h3>
                                </div>
                                <p className="text-secondary mb-0" style={{ lineHeight: '1.8' }}>
                                    {study.results}
                                </p>
                            </div>

                            {/* Key Engineering Lessons */}
                            <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-lightbulb pink-color fs-4 me-3"></i>
                                    <h3 className="fw-bold fs-5 mb-0 text-dark">Key Engineering Lessons</h3>
                                </div>
                                <ul className="list-unstyled mb-0">
                                    {study.keyLessons.map((lesson, idx) => (
                                        <li key={idx} className="d-flex align-items-start mb-3">
                                            <i className="fas fa-check-circle pink-color mt-1 me-3" style={{ fontSize: '1rem' }}></i>
                                            <span className="text-secondary" style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>{lesson}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}

                    {/* Shared Section: Challenges & Trade-offs */}
                    <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                        <div className="d-flex align-items-center mb-3">
                            <i className="fas fa-balance-scale pink-color fs-4 me-3"></i>
                            <h3 className="fw-bold fs-5 mb-0 text-dark">Challenges & Trade-offs</h3>
                        </div>
                        <p className="text-secondary mb-0" style={{ lineHeight: '1.8' }}>
                            {study.challengesAndTradeoffs}
                        </p>
                    </div>

                    {/* Shared Section: Results / Current Status */}
                    {isOtpStudy && (
                        <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-4" style={{ borderRadius: '14px' }}>
                            <div className="d-flex align-items-center mb-3">
                                <i className="fas fa-chart-line text-success fs-4 me-3"></i>
                                <h3 className="fw-bold fs-5 mb-0 text-dark">Results / Current Status</h3>
                            </div>
                            <p className="text-secondary mb-0" style={{ lineHeight: '1.8' }}>
                                {study.currentStatus}
                            </p>
                        </div>
                    )}

                    {/* Shared Section: Result / Lessons Learned */}
                    <div className="custom-card box-shadow border-0 p-4 p-md-4 mb-5 border-start border-4 border-danger" style={{ borderRadius: '14px' }}>
                        <div className="d-flex align-items-center mb-3">
                            <i className="fas fa-graduation-cap pink-color fs-4 me-3"></i>
                            <h3 className="fw-bold fs-5 mb-0 text-dark">Engineering Takeaway</h3>
                        </div>
                        <p className="text-dark fw-medium mb-0" style={{ lineHeight: '1.8', whiteSpace: 'pre-line', fontSize: '1rem' }}>
                            {study.takeaway}
                        </p>
                    </div>

                    {/* Bottom Navigation: Back to Case Studies */}
                    <div className="d-flex justify-content-between align-items-center mb-5 pt-3 border-top">
                        <Link to="/case-studies" className="btn btn-outline-danger1 px-4 py-2 fw-semibold">
                            <i className="fas fa-arrow-left me-2"></i>
                            Back to Case Studies
                        </Link>
                        <Link to="/" className="btn btn-link text-secondary text-decoration-none small">
                            Back to Portfolio Home
                        </Link>
                    </div>

                </div>
            </div>

            {/* Persistent App Footer */}
            <Footer />
        </div>
    );
};

export default CaseStudyDetail;
