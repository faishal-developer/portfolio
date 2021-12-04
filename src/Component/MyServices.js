import React from 'react';

const WhatIDo = () => {
    return (
        <div className="container my-5">
            <p className='pink-color'>FEATURES</p>
            <h1>WHAT I DO</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 ">
                <div className="col">
                    <div className='custom-card p-3'>
                        <div className="py-3 text-center"><i className="dev-icon pink-color fas fa-laptop-code"></i></div>
                        <h3>Front-end Development</h3>
                        <p>I use various React, Html, css, js to develop attractive websites which converts visitors to customers. I develop creative and responsive website layouts.</p>
                    </div>
                </div>
                <div className="col">
                    <div className='custom-card p-3'>
                        <div className="py-3 text-center"><i className="dev-icon pink-color fab fa-react"></i></div>
                        <h3>PSD, Figma or xsd to React App</h3>
                        <p>Are you want to convert your PSD templete into a single page applicaion then i give you that solution. I will make sure your web is a responsive, fast runtime and secure.</p>
                    </div>
                </div>
                <div className="col">
                    <div className='custom-card p-3'>
                        <div className="py-3 text-center"><i className="dev-icon pink-color fab fa-js"></i></div>
                        <h3>Add more functionality to web</h3>
                        <p>Are your looking for making Html template funcional and user friendly then i'am the solution for you. I make your website functional with optimized runtime.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;