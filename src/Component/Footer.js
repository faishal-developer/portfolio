import React from 'react';
import faishal from '../image/faishal-edited.png'

const Footer = () => {
    return (
        <div className='border-top border-secondary my-5 pt-5 pb-2'>
            <div className='text-center pb-2'>
                <img style={{ width: '80px' }} src={faishal} alt="faishal" />
                <h2 className='d-inline'>Md Faishal</h2>
            </div>
            <p className="text-center">© 2021.All rights reserved by Md Faishal.</p>
        </div>
    );
};

export default Footer;