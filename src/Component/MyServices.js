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
                        <h3>Fullstack web Development</h3>
                        <p>I use React in Frontend and express in backend to develop attractive websites which converts visitors to customers. I develop creative and responsive website functional layouts and apis.</p>
                    </div>
                </div>
                <div className="col">
                    <div className='custom-card p-3'>
                        <div className="py-3 text-center"><i className="dev-icon pink-color fab fa-react"></i></div>
                        <h3>Frontend Web development</h3>
                        <p>Are you want to convert your PSD/Figma/jpg templete into a single page applicaion then i give you that solution. I will make sure your web is a responsive, fast runtime and secure with good ux.</p>
                    </div>
                </div>
                <div className="col">
                    <div className='custom-card p-3'>
                        <div className="py-3 text-center"><i className="dev-icon pink-color fab fa-js"></i></div>
                        <h3>Backend web development</h3>
                        <p>I am good in express.js, Mongodb, Mongoose,Typescript, Postgresql,prisma. So no doubt you will get a good and qualityfull service from me. So Let's discuss about your task.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;