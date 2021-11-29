import React from 'react';
import faishal from '../image/DSC_0041.JPG'

const Contact = () => {
    return (
        <div class="container my-5 text-center">
            <p className='mt-5 pink-color'>CONTACT</p>
            <h2 className="mb-5">Contact With Me</h2>
            <div class="row row-cols-1 row-cols-lg-2">
                <div class="col text-start about-me">
                    <div className='p-2'>
                        <img className='w-100' src={faishal} alt="faishal" />
                    </div>
                    <h2>Md. Faishal</h2>
                    <p>Front-end Developer</p>
                    <p>Fell free to contact. I am available for freelance work. Connect with me via and call in to my account.</p>
                    <p>Phone:<span className="pink-color">+880-1688422699</span></p>
                    <p>Email:<span className="pink-color">foysal.professional@gmail.com</span></p>
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
                <div class="col my-5">
                    <form>
                        <div className='d-flex justify-content-between'>

                            <input placeholder="Your Name" className='form-control me-2' />
                            <input placeholder="Your Phone" className='form-control' type='number' />
                        </div>
                        <br />
                        <input placeholder="Your Email" className='form-control' type='email' /><br />
                        <input placeholder="Subject" className='form-control' type='text' /><br />
                        <textarea placeholder='Your Message' style={{ minHeight: '100px' }} className='form-control' /><br />
                        <input type='submit' className='btn btn-bg' />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;