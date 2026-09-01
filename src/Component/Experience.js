import React from 'react';

const Experience = () => {
  return (
    <section className="container-fluid px-0 my-4 my-md-5 py-3 py-md-4">
      <p className="pink-color fw-semibold mb-1" style={{ letterSpacing: '2px' }}>EXPERIENCE</p>
      <h2 className="fw-bold mb-4">Professional Experience</h2>

      <div className="row g-4">
        {/* Divergent Technologies Limited */}
        <div className="col-12 col-lg-6">
          <div className="experience-item custom-card box-shadow p-3 p-md-4 h-100">
            <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2 mb-1">
              <h3 className="company-name fs-5 fw-bold mb-0">Divergent Technologies Limited</h3>
              <span className="badge bg-secondary rounded-pill px-3 py-2">May 2025 – August 2026</span>
            </div>
            <p className="position pink-color fw-semibold mb-3">Software Engineer</p>

            <div className="project-highlight mb-3">
              <h5 className="fw-bold fs-6 mb-2">
                <i className="fas fa-headphones pink-color me-2"></i>Kabbik — Audiobook Platform (300K+ Active Users)
              </h5>
              <ul className="responsibilities text-secondary mb-0 ps-3" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                <li><strong>40% Cost Reduction:</strong> Migrated key services from AWS EC2 to DigitalOcean Droplets and frontend/static services to Vercel while eliminating redundant DBs & backups.</li>
                <li><strong>73% Latency Drop (3s → 800ms):</strong> Optimized critical endpoints via Redis caching, browser cache headers, database indexing, and removing logging overhead.</li>
                <li><strong>Security & Anti-Bot:</strong> Blocked automated OTP scripting attacks via daily-rotated device IDs & per-device rate limits, extending OTP supply lifespan from 3-4 days to 30+ days.</li>
                <li><strong>Push Notification Scale:</strong> Scaled delivery for ~300K push tokens by implementing 30 batches/min processing and fixing EC2 memory leaks.</li>
                <li><strong>Payments & Fullstack Ownership:</strong> Implemented recurring bKash subscriptions, maintained Robi/GP/Stripe gateways, resolved payment webhook reconciliations, and managed production operations across AWS & DigitalOcean.</li>
              </ul>
            </div>

            <div className="project-highlight pt-2 border-top">
              <h5 className="fw-bold fs-6 mb-2">
                <i className="fas fa-book-open pink-color me-2"></i>Kabbik eBook Backend & RAS Military System
              </h5>
              <ul className="responsibilities text-secondary mb-0 ps-3" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                <li><strong>Kabbik eBook:</strong> Built NestJS backend APIs for content management, user progress tracking, subscriptions/orders, and promo codes for Google Play Store app.</li>
                <li><strong>RAS System:</strong> Built pixel-perfect frontend for military personnel management, tracking soldier records, appointments, leaves, and punishments with offline support.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Doodle Incorporation */}
        <div className="col-12 col-lg-6">
          <div className="experience-item custom-card box-shadow p-3 p-md-4 h-100">
            <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2 mb-1">
              <h3 className="company-name fs-5 fw-bold mb-0">Doodle Incorporation</h3>
              <span className="badge bg-secondary rounded-pill px-3 py-2">Sep 2023 – April 2025</span>
            </div>
            <p className="position pink-color fw-semibold mb-3">Junior Software Engineer</p>

            <div className="project-highlight mb-3">
              <h5 className="fw-bold fs-6 mb-2">
                <i className="fas fa-briefcase pink-color me-2"></i>Wozaif & Tribel.com (20-Member Agile Team)
              </h5>
              <ul className="responsibilities text-secondary mb-0 ps-3" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                <li>Delivered 20+ features and resolved 350+ production issues across Wozaif.com and Tribel.com within an Agile/Scrum environment.</li>
                <li>Engineered GraphQL data pipelines using AWS AppSync for high-cardinality dynamic data.</li>
                <li>Replaced full static generation with Server-Side Rendering (SSR) for dynamic pages, drastically reducing build times and boosting scalability.</li>
              </ul>
            </div>

            <div className="project-highlight pt-2 border-top">
              <h5 className="fw-bold fs-6 mb-2">
                <i className="fas fa-newspaper pink-color me-2"></i>Tribel Blog Modernization & Damas
              </h5>
              <ul className="responsibilities text-secondary mb-0 ps-3" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                <li>Rebuilt legacy jQuery blog into modern React, TypeScript, Redux, and GraphQL/AppSync architecture featuring infinite scrolling, pagination, search, and intelligent caching.</li>
                <li>Maintained and enhanced a React, MongoDB, and Tailwind CSS jewelry management system in direct client collaboration for 4 months.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Shadhin Lab LLC */}
        <div className="col-12 col-lg-6">
          <div className="experience-item custom-card box-shadow p-3 p-md-4 h-100">
            <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2 mb-1">
              <h3 className="company-name fs-5 fw-bold mb-0">Shadhin Lab LLC</h3>
              <span className="badge bg-secondary rounded-pill px-3 py-2">April 2022 – Dec 2022</span>
            </div>
            <p className="position pink-color fw-semibold mb-3">Frontend Developer</p>

            <ul className="responsibilities text-secondary ps-3" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
              <li><strong>Bid Advisor:</strong> Engineered the complete frontend for a USA-based bid management platform from scratch with responsive desktop, tablet, and mobile layouts.</li>
              <li><strong>ComponentHub:</strong> Extracted 50+ reusable components from Bid Advisor, CoderTrust, and My Fuel Pump into a shared component library with docs & props, cutting component duplication by ~80% across 3 projects for 15+ developers.</li>
              <li>Resolved 200+ bugs while optimizing re-renders and front-end performance under team-lead mentorship.</li>
            </ul>
          </div>
        </div>

        {/* Noakhali Residential College */}
        <div className="col-12 col-lg-6">
          <div className="experience-item custom-card box-shadow p-3 p-md-4 h-100">
            <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2 mb-1">
              <h3 className="company-name fs-5 fw-bold mb-0">Noakhali Residential College</h3>
              <span className="badge bg-secondary rounded-pill px-3 py-2">Oct 2021 – April 2022</span>
            </div>
            <p className="position pink-color fw-semibold mb-3">ICT Lecturer</p>

            <ul className="responsibilities text-secondary ps-3" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
              <li>Instructed 50+ students in foundational web technologies, HTML, modern JavaScript basics, and C programming syntax.</li>
              <li>Taught database fundamentals, entity-relationship concepts, and number theory for computing.</li>
              <li>Fostered structured problem-solving and algorithmic thinking among early-stage computer science students.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;