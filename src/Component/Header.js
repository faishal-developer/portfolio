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
                            steps={['Fullstack developer',3000,'Front-end Developer', 3000, 'React Developer', 3000, 'Javascript Developer', 3000]}
                            loop={Infinity}
                            wrapper="p"
                        /></h1>
                        <p>I am passionate and dedicated in programming, working in this field for 3 years. I worked in Shadhin tech for 9
                        months. I am highly confident to work with web-technologies and switch technology. Besides i solved more than
                        150 problems in codewars,leetcode, and edabit.com for growing logical thinking.
                        .</p>
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
                            <a className="btn my-element" href='https://drive.google.com/file/d/18GqcXIbzuqAvfgMTpOq5hglKi0Y-kKyb/view?usp=sharing' target="_blank" rel="noreferrer">
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