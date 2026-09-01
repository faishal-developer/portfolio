import React from 'react';
import Faishal1 from '../image/mdfaishal.png';
import Typewriter from 'typewriter-effect';

const Header = () => {
    return (
        <div className='container-fluid px-0'>
            <div className="row align-items-center">
                <div className="col-12 col-lg-8 my-4 my-md-5">
                    <div className='heading-info'>
                        <h6 className="text-uppercase mb-2">WELCOME TO MY WORLD</h6>
                        <h1 className="fw-bold hero-name mb-2">
                            Hi, I'm <span className='pink-color'>Md. Faishal</span>
                        </h1>
                        <h2 className='fw-bold hero-typewriter-title d-flex flex-wrap align-items-center mb-3'>
                            <span className='me-2'>a</span>
                            <span className='pink-color'>
                                <Typewriter
                                    wrapperClassName="pink-color"
                                    options={{
                                        strings: [
                                            'Full Stack Software Engineer',
                                            'Backend & Cloud Engineer',
                                            'React & Next.js Specialist',
                                            'TypeScript & Node.js Engineer'
                                        ],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </h2>
                        <p className="mt-3 text-secondary" style={{ lineHeight: '1.8', maxWidth: '680px', fontSize: '1rem' }}>
                            Full Stack Software Engineer with 3+ years of experience building scalable web applications using TypeScript, Node.js, MySQL, React, and Next.js. Experienced in backend development, payment gateway integration, performance optimization, and cloud infrastructure.
                        </p>
                    </div>
                    <div className='social-icon-header my-4 my-md-5'>
                        <h6 className="mb-3">FIND WITH ME</h6>
                        <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
                            <a style={{ color: 'black' }} target='_blank' rel="noreferrer" href='https://www.facebook.com/mohammod.faysal.14'>
                                <div className='social-icon-shadow'>
                                    <i className="p-3 fab fa-facebook"></i>
                                </div>
                            </a>
                            <a style={{ color: 'black' }} target='_blank' rel="noreferrer" href='https://github.com/faishal-developer'>
                                <div className='social-icon-shadow'>
                                    <i className="p-3 fab fa-github"></i>
                                </div>
                            </a>
                            <a style={{ color: 'black' }} target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/md-faishal-4bb8b3219/'>
                                <div className='social-icon-shadow'>
                                    <i className="p-3 fab fa-linkedin-in"></i>
                                </div>
                            </a>
                        </div>
                        <div className='downLoad-resume d-inline-block'>
                            <a className="btn my-element" href='https://drive.google.com/file/d/15bw1McsGaAXOfOqSdzfMzeQqFlzrjA9s/view?usp=sharing' target="_blank" rel="noreferrer">
                                <h6 className="mb-1">Download Resume</h6>
                                <div><i className="far animate__animated fa-arrow-alt-circle-down"></i></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 py-5 mt-5">
                    <div className="heading-img px-3 m-0 w-100">
                        <img className='w-100 ' src={Faishal1} alt='faishal' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;