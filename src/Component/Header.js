import React from 'react';
import Faishal1 from '../image/DSC_0240.png'
import Typical from 'react-typical'
import Typewriter from 'typewriter-effect';



const Header = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 col-md-8 my-5">
                    <div className='heading-info'>
                        <h6>WELCOME TO MY WORLD</h6>
                        <h1 className="fw-bold fs-1">Hi, I'm <span className='pink-color'>Md. Faishal</span></h1>
                        <h1 className='fw-bold fs-1 d-flex'>
                            <span className='me-1'>a</span>
                            {/* <Typical
                                key={1}
                                className='d-inline pink-color'
                                steps={['Fullstack developer',4000,'Front-end Developer', 4000, 'React Developer', 4000, 'Javascript Developer', 4000]}
                                loop={Infinity}
                                wrapper="p"
                            /> */}
                            <span className='d-inline pink-color'>
                                <Typewriter
                                    wrapperClassName="d-inline pink-color"
                                    options={{
                                        strings: ['Fullstack developer', 'React.js Developer',"Node.js Developer"],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>

                        </h1>
                        <p>Detail-oriented programmer with a strong foundation in Typescript, React.js, Node.js. Successfully tackled over
                        150 coding challenges on platforms like LeetCode, Codewars, and Edabit.com. Committed to staying updated with
                        industry trends and best practices. Seeking a challenging role to contribute to innovative software projects.</p>
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
                            <a className="btn my-element" href='https://drive.google.com/file/d/13wOBAVRm_Wzgko2FQMWXT_7rGGnu_-Ur/view?usp=sharing' target="_blank" rel="noreferrer">
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