import React from 'react';

const Experience = () => {
  return (
    <section className="my-5 pt-1 pb-4">
        <h2 className="heading fs-1 fw-500 my-4">Experience</h2>
      <div className="">
        <div className="experience-content">
          <div className="experience-item custom-card box-shadow p-3 ">
            <h3 className="company-name fs-3">Doodle Incorporation</h3>
            <p className="duration">Sep 2023 - April 2025</p>
            <p className="position">Jr. Software Engineer</p>
            <ul className="responsibilities">
              <li>Solved more than 350 bugs and developed 20 features in varius projects including wozaif.com, tribel.com. Improved performance by 30% in wozaif.</li>
              <li>Implemented on-page SEO, accessibility standards, and security measures</li>
              <li>Collaborated with Scrum Masters and team leads to architect scalable solutions followed Agile methodologies and tracking progress using Jira.</li>
              <li>PMaintained a MERN stack jwelery management project by directly collaborating with client for four months</li>
            </ul>
          </div>

          <div className="experience-item custom-card box-shadow  p-3">
            <h3 className="company-name fs-3">Shadhin Technology</h3>
            <p className="duration">April 2022 - December 2022</p>
            <p className="position">Solution Developer(Frontend)</p>
            <ul className="responsibilities">
              <li>Add functional features with responsive layouts using React.js in Bid advisor project</li>
              <li>I managed 70% front-end side and front-end team leader guided me in that project</li>
              <li>I maximized performance about 50% using lazyloading, proper layouting, code splitting and proper utilizing caching and redux store besides many feature and 200 bug fixing.</li>
              <li>Regular co-operating with team leads and mates helps a lot to being professional.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;