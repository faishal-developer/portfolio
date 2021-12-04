import React from 'react';
import Drawer from './Drawer';


const SideNavbar = ( props ) => {
    return (
        <aside >
            {/* <div className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><a href="#section"><i className="fas fa-bars"></i></a></div> */}
            <Drawer width={props.width} handleWidth={props.handleWidth} />
            {/* 
                <div></div>
                <div><a href="#section-2"></a></div>
                <div><a href="#section-3"></a></div>
                <div><a href="#section-4"></a></div>
                <div><a href="#section-5"></a></div>
            </Scrollspy> */}
        </aside>
    );
};

export default SideNavbar;