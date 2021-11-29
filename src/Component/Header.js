import React from 'react';
import Faishal1 from '../image/faishal01.png'

const Header = () => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 align-items-center">
                <div className="col my-5">
                    <div className='heading-info'>
                        <h6>WELCOME TO MY WORLD</h6>
                        <h1>Hi, I'm <span className='pink-color'>Md. Faishal</span></h1>
                        <h2>a Front-end Developer</h2>
                        <p>I am learning web development for 2 years. I spend whole day in programming .
                            About 9-10 hours per day. I leaved all my favourites and found new love and that’s
                            programming. I am fresher but passionate. I not worked in professional Project but I
                            created my base with learning and that is time to work in Professional Project.</p>
                    </div>
                    <div className='social-icon-header my-5'>
                        <h6>FIND WITH ME</h6>
                        <div className="d-flex text-center">
                            <div className='me-3 social-icon-shadow'>
                                <i class="p-3 fab fa-facebook"></i>                            </div>
                            <div className='me-3 social-icon-shadow'>
                                <i class="p-3 fab fa-github"></i>
                            </div>
                            <div className='me-3 social-icon-shadow'>
                                <i class="p-3 fab fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <img className='w-100' src={Faishal1} alt='faishal' />
                </div>
            </div>
        </div>
    );
};

export default Header;