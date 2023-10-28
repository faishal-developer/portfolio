import React, { useState } from 'react';
import faishal from '../image/DSC_004110.jpg'

const Contact = () => {
    const [message, setMessage] = useState( {} )
    const [sucees, setSuccess] = useState( {} )

    const handleChange = ( e ) => {
        let newMessage = { ...message };
        newMessage[e.target.name] = e.target.value;
        setMessage( newMessage )
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        console.log( message );
        window.emailjs.sendForm( 'service_qb84vk6', 'template_qgdt7gg', e.target, 'NuqZsopa7W0X0-DnT' )
            .then( res => {
                e.target.reset()
                let alert = { message: 'Email sent to Md Faishal', isSuccess: true }
                setSuccess( alert )
            } )
            .catch( er => {
                let alert = { message: er.message, isSuccess: false }
                setSuccess( alert )
            } )
    }
    return (
        <div className="container my-5 text-center">
            <p className='mt-5 pink-color'>CONTACT</p>
            <h2 className="mb-5">Contact With Me</h2>
            <div className="row row-cols-1 row-cols-lg-2">
                <div className="col text-start about-me">
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
                                <i className="p-3 fab fa-facebook"></i>                            </div>
                            <div className='me-3 social-icon-shadow'>
                                <i className="p-3 fab fa-github"></i>
                            </div>
                            <div className='me-3 social-icon-shadow'>
                                <i className="p-3 fab fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <div className='d-flex justify-content-between'>

                            <input required onChange={handleChange} name="name" placeholder="Your Name" className='form-control me-2' />
                            <input required onChange={handleChange} name='phone' placeholder="Your Phone" className='form-control' type='number' />
                        </div>
                        <br />
                        <input required onChange={handleChange} name='email' placeholder="Your Email" className='form-control' type='email' /><br />
                        <input required onChange={handleChange} name='subject' placeholder="Subject" className='form-control' type='text' /><br />
                        <textarea required onChange={handleChange} name='message' placeholder='Your Message' style={{ minHeight: '100px' }} className='form-control' /><br />
                        <input type='submit' className='btn btn-bg' />
                    </form>
                    {
                        sucees?.isSuccess ? (
                            sucees?.message && <div className="alert my-3 alert-success" role="alert">
                                <i className="far fs-5 px-3 text-success fa-check-circle"></i>
                                {sucees.message}
                            </div>
                        ) : (
                            sucees?.message && <div className="alert my-3 alert-danger" role="alert">
                                <i className="far fs-5 px-3 text-danger fa-times-circle"></i>
                                {sucees.message}
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Contact;