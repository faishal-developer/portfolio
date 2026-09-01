import React, { useState } from 'react';

const Contact = () => {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('md.faishal.dev@gmail.com');
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    const handleCopyPhone = () => {
        navigator.clipboard.writeText('+880-1853837981');
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2500);
    };

    return (
        <div className="container-fluid px-0 my-4 my-md-5 py-3 py-md-4 text-center">
            <p className='pink-color fw-semibold mb-1' style={{ letterSpacing: '2px' }}>GET IN TOUCH</p>
            <h2 className="fw-bold mb-3">Contact Me</h2>
            <p className="text-secondary mx-auto mb-4 mb-md-5" style={{ maxWidth: '650px', fontSize: '1rem', lineHeight: '1.7' }}>
                I am actively open to mid-level Full Stack Software Engineer roles, production backend/frontend contracts, and distributed remote teams. Feel free to reach out directly through any of the channels below.
            </p>

            <div className="row g-4 justify-content-center text-start">
                {/* Email Card */}
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="custom-card box-shadow p-3 p-md-4 h-100 d-flex flex-column justify-content-between">
                        <div>
                            <div className="pink-color mb-3">
                                <i className="fas fa-envelope-open-text fs-2"></i>
                            </div>
                            <h3 className="fs-5 fw-bold mb-1">Email</h3>
                            <p className="text-secondary small mb-3">Direct mailbox</p>
                            <p className="fw-semibold text-break mb-3" style={{ fontSize: '0.9rem' }}>
                                md.faishal.dev@gmail.com
                            </p>
                        </div>
                        <div className="d-flex gap-2 flex-wrap">
                            <a href="mailto:md.faishal.dev@gmail.com" className="btn btn-sm btn-danger px-2 px-sm-3 py-2 flex-grow-1 text-decoration-none text-center">
                                <i className="fas fa-paper-plane me-1"></i> Send Mail
                            </a>
                            <button onClick={handleCopyEmail} className="btn btn-sm btn-outline-secondary px-3 py-2" title="Copy Email">
                                <i className={copiedEmail ? "fas fa-check text-success" : "far fa-copy"}></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Phone Card */}
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="custom-card box-shadow p-3 p-md-4 h-100 d-flex flex-column justify-content-between">
                        <div>
                            <div className="pink-color mb-3">
                                <i className="fas fa-phone-volume fs-2"></i>
                            </div>
                            <h3 className="fs-5 fw-bold mb-1">Phone & WhatsApp</h3>
                            <p className="text-secondary small mb-3">Direct call or message</p>
                            <p className="fw-semibold text-break mb-3" style={{ fontSize: '0.92rem' }}>
                                +880-1853837981
                            </p>
                        </div>
                        <div className="d-flex gap-2 flex-wrap">
                            <a href="tel:+8801853837981" className="btn btn-sm btn-danger px-2 px-sm-3 py-2 flex-grow-1 text-decoration-none text-center">
                                <i className="fas fa-phone me-1"></i> Call Now
                            </a>
                            <button onClick={handleCopyPhone} className="btn btn-sm btn-outline-secondary px-3 py-2" title="Copy Phone">
                                <i className={copiedPhone ? "fas fa-check text-success" : "far fa-copy"}></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* LinkedIn Card */}
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="custom-card box-shadow p-3 p-md-4 h-100 d-flex flex-column justify-content-between">
                        <div>
                            <div className="pink-color mb-3">
                                <i className="fab fa-linkedin-in fs-2"></i>
                            </div>
                            <h3 className="fs-5 fw-bold mb-1">LinkedIn</h3>
                            <p className="text-secondary small mb-3">Professional network</p>
                            <p className="fw-semibold text-break mb-3" style={{ fontSize: '0.9rem' }}>
                                /in/md-faishal-4bb8b3219
                            </p>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/md-faishal-4bb8b3219/" target="_blank" rel="noreferrer" className="btn btn-sm btn-danger w-100 py-2 text-decoration-none text-center">
                                <i className="fab fa-linkedin me-1"></i> Connect on LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* GitHub Card */}
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="custom-card box-shadow p-3 p-md-4 h-100 d-flex flex-column justify-content-between">
                        <div>
                            <div className="pink-color mb-3">
                                <i className="fab fa-github fs-2"></i>
                            </div>
                            <h3 className="fs-5 fw-bold mb-1">GitHub</h3>
                            <p className="text-secondary small mb-3">Code & contributions</p>
                            <p className="fw-semibold text-break mb-3" style={{ fontSize: '0.9rem' }}>
                                @faishal-developer
                            </p>
                        </div>
                        <div>
                            <a href="https://github.com/faishal-developer" target="_blank" rel="noreferrer" className="btn btn-sm btn-danger w-100 py-2 text-decoration-none text-center">
                                <i className="fab fa-github me-1"></i> View GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;