import React from 'react';
import Faishal1 from '../image/DSC_0240.png'
import Typical from 'react-typical'


const Header = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 col-md-8 my-5">
                    <div className='heading-info'>
                        <h6>WELCOME TO MY WORLD</h6>
                        <h1 className="fw-bold fs-1">Hi, I'm <span className='pink-color'>Md. Faishal</span></h1>
                        <h1 className='fw-bold fs-1'>a <Typical
                            className='d-inline pink-color'
                            steps={['Front-end Developer', 2000, 'React Developer', 2000, 'Javascript Developer', 2000]}
                            loop={Infinity}
                            wrapper="p"
                        /></h1>
                        <p>I am learning web development for 2 years. I spend whole day in programming .
                            About 9-10 hours per day. I leaved all my favourites and found new love and that’s
                            programming. I am fresher but passionate. I not worked in professional Project but I
                            created my base with learning and that is time to work in Professional Project.</p>
                    </div>
                    <div className='social-icon-header my-5'>
                        <h6>FIND WITH ME</h6>
                        <div className="d-flex text-center mb-5">
                            <a className="me-2" style={{ color: 'black' }} target='_blank' rel="noreferrer" href='https://www.facebook.com/mohammod.faysal.14'>
                                <div className='me-3 social-icon-shadow'>
                                    <i className="p-3 fab fa-facebook"></i>
                                </div>
                            </a>
                            <a className="me-2" style={{ color: 'black' }} target='_blank' rel="noreferrer" href='https://github.com/faishal-developer'>
                                <div className='me-3 social-icon-shadow'>

                                    <i className="p-3 fab fa-github"></i>

                                </div>
                            </a>
                            <a className="me-2" style={{ color: 'black' }} target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/md-faishal-4bb8b3219/'>
                                <div className='me-3 social-icon-shadow'>

                                    <i className="p-3 fab fa-linkedin-in"></i>

                                </div>
                            </a><br />
                        </div>
                        <div className='downLoad-resume d-inline-block'>
                            <a className="btn my-element" href='https://drive.google.com/file/d/1s_GaH9eFImr4KzjpTFcQ24-G60MAhVDE/view?usp=sharing' target="_blank" rel="noreferrer">
                                <h6>Download Resume</h6>
                                <div><i className="far animate__animated fa-arrow-alt-circle-down"></i></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 py-5">
                    <div className="heading-img px-3 m-0 w-100">
                        <img className='w-100 ' src={Faishal1} alt='faishal' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;