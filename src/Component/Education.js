import React from 'react';

const Education = () => {
  return (
    <section className="container-fluid px-0 my-4 my-md-5 py-3 py-md-4">
      <p className="pink-color fw-semibold mb-1" style={{ letterSpacing: '2px' }}>ACADEMIC BACKGROUND</p>
      <h2 className="fw-bold mb-4">Education</h2>

      <div className="row g-4">
        <div className="col-12 col-md-6">
          <div className="custom-card box-shadow p-3 p-md-4 h-100">
            <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2 mb-2">
              <h3 className="fs-5 fw-bold mb-0">Comilla University</h3>
              <span className="badge bg-secondary rounded-pill px-3 py-2">2022 – 2024</span>
            </div>
            <p className="pink-color fw-semibold mb-2">Executive Master's in Computer Science (EMCS)</p>
            <p className="text-secondary mb-0" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
              Advanced coursework in Distributed Systems, Software Engineering, Database Architecture, and Computer Algorithms.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="custom-card box-shadow p-3 p-md-4 h-100">
            <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2 mb-2">
              <h3 className="fs-5 fw-bold mb-0">Noakhali Science and Technology University</h3>
              <span className="badge bg-secondary rounded-pill px-3 py-2">2016 – 2021</span>
            </div>
            <p className="pink-color fw-semibold mb-2">Graduation (B.Sc.) in Applied Mathematics</p>
            <p className="text-secondary mb-0" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
              Strong quantitative foundation in Computational Mathematics, Numerical Analysis, Statistics, Discrete Mathematics, and Problem Solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

