import React from 'react';

const WhatIDo = () => {
    return (
        <div className="container my-5">
            <p className='pink-color'>FEATURES</p>
            <h1>WHAT I DO</h1>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 ">
                <div class="col">
                    <div className='custom-card p-3'>
                        <div className="py-3"><i class="dev-icon pink-color fas fa-laptop-code"></i></div>
                        <h3>Front-end Development</h3>
                        <p>Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.</p>
                    </div>
                </div>
                <div class="col">
                    <div className='custom-card p-3'>
                        <div className="py-3"><i class="dev-icon pink-color fab fa-react"></i></div>
                        <h3>Html Templete to React App</h3>
                        <p>The HTML could be from an external source or a file that you want to display to the user. By default, React does not permit you to inject HTML in a component, for various reasons .</p>
                    </div>
                </div>
                <div class="col">
                    <div className='custom-card p-3'>
                        <div className="py-3"><i class="dev-icon pink-color fab fa-js"></i></div>
                        <h3>Give Html Page Functionality</h3>
                        <p>The HTML could be from an external source or a file that you want to display to the user. By default, React does not permit you to inject HTML in a component, for various reasons .</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;