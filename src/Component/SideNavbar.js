import React from 'react';
import Drawer from './Drawer';

const SideNavbar = ({ expanded, onToggle, isMobile }) => {
    return (
        <aside className='bg-black'>
            <Drawer expanded={expanded} onToggle={onToggle} isMobile={isMobile} />
        </aside>
    );
};

export default SideNavbar;