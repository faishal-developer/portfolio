import React from 'react';
import faishal from '../image/faishal-edited.png';

const Footer = () => {
    return (
        <footer className='border-top border-secondary my-4 my-md-5 pt-4 pt-md-5 pb-4'>
            <div className='text-center pb-2'>
                <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src={faishal} alt="Md Faishal" className="me-2" />
                <h2 className='d-inline align-middle fs-4 fw-bold'>Md Faishal</h2>
                <p className="text-secondary small mt-1">Full Stack Software Engineer</p>
            </div>
            <p className="text-center text-muted small mb-0" style={{ fontSize: '0.85rem' }}>
                © {new Date().getFullYear()}. All rights reserved by Md Faishal.
            </p>
        </footer>
    );
};

export default Footer;