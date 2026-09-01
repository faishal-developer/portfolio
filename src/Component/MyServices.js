import React from 'react';

const WhatIDo = () => {
    return (
        <div className="container-fluid px-0 my-4 my-md-5 py-3 py-md-4">
            <p className='pink-color fw-semibold mb-1' style={{ letterSpacing: '2px' }}>FEATURES</p>
            <h2 className='fw-bold mb-4'>WHAT I DO</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div className="col">
                    <div className='custom-card box-shadow p-3 p-md-4 h-100'>
                        <div className="py-2 text-center"><i className="dev-icon pink-color fas fa-laptop-code"></i></div>
                        <h3 className="fs-5 fw-bold text-center mb-3">Full Stack Web Development</h3>
                        <p className="text-secondary" style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>
                            Architecting scalable, production-ready web applications using TypeScript, Next.js, React, and Node.js. Delivering clean component hierarchies, state management, and SSR/SSG rendering strategies.
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className='custom-card box-shadow p-3 p-md-4 h-100'>
                        <div className="py-2 text-center"><i className="dev-icon pink-color fas fa-server"></i></div>
                        <h3 className="fs-5 fw-bold text-center mb-3">Backend, APIs & Databases</h3>
                        <p className="text-secondary" style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>
                            Designing high-throughput REST & GraphQL APIs with Express and NestJS. Implementing relational (MySQL, PostgreSQL) and NoSQL (MongoDB) databases, Redis caching, and robust payment integrations (bKash, Stripe).
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className='custom-card box-shadow p-3 p-md-4 h-100'>
                        <div className="py-2 text-center"><i className="dev-icon pink-color fas fa-cloud"></i></div>
                        <h3 className="fs-5 fw-bold text-center mb-3">Cloud & Performance</h3>
                        <p className="text-secondary" style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>
                            Deploying and optimizing cloud architectures across AWS (Lambda, EC2, S3, RDS) and DigitalOcean. Reducing infrastructure costs, slashing API latency (up to 73%), and managing production reliability.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;