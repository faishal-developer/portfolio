import React, { useState, useEffect } from "react";
import SideNav, {
    NavItem
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Scrollspy from "react-scrollspy";
import faishal2 from '../image/faishal-edited.png'


function Drawer( props ) {
    const [expanded, setExpanded] = useState( false )


    return (

        <div className={props.width > 650 ? 'd-block' : 'd-none'}>
            <SideNav
                className="position-fixed max-width"
                expanded={expanded}
                onToggle={() => {
                    setExpanded( !expanded )
                    props.handleWidth( expanded )
                }}
            >
                <NavItem className='nav-item-sidebar' eventKey="features">
                    <img style={{ maxWidth: '80px' }} src={faishal2} alt='faishal' />
                    <span className={!expanded ? 'd-none' : 'd-inline-block text-light'}>Md Faishal</span>
                </NavItem>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <Scrollspy className="px-3" items={['section-1', 'section-2', 'section-3', 'section-4', 'section-5']} currentClassName="is-current">
                        <a className='nav-item-a' href="#section-1">
                            <NavItem className='nav-item-sidebar' eventKey="home">
                                <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
                                <span className={!expanded ? 'd-none' : 'd-inline-block'}>Home</span>
                            </NavItem>
                        </a>
                        <a className='nav-item-a' href="#section-2">
                            <NavItem className='nav-item-sidebar' eventKey="features">
                                <i style={{ fontSize: "1.75em" }} className="fas fa-cogs"></i>
                                <span className={!expanded ? 'd-none' : 'd-inline-block'}>What I Do</span>
                            </NavItem>
                        </a>
                        <a className='nav-item-a' href="#section-3">
                            <NavItem className='nav-item-sidebar' eventKey="portfolio">
                                <i style={{ fontSize: "1.75em" }} className="fas fa-building"></i>
                                <span className={!expanded ? 'd-none' : 'd-inline-block'}>Portfolio</span>
                            </NavItem>
                        </a>

                        <a className='nav-item-a' href="#section-4">
                            <NavItem className='nav-item-sidebar' eventKey="contact">
                                <i style={{ fontSize: "1.75em" }} className="fas fa-pen-alt"></i>
                                <span className={!expanded ? 'd-none' : 'd-inline-block'}>Skills</span>
                            </NavItem>
                        </a>
                        <a className='nav-item-a' href="#section-5">
                            <NavItem className='nav-item-sidebar' eventKey="contact">
                                <i style={{ fontSize: "1.75em" }} className="fas fa-address-book"></i>
                                <span className={!expanded ? 'd-none' : 'd-inline-block'}>Contact</span>
                            </NavItem>
                        </a>
                    </Scrollspy>

                </SideNav.Nav>
            </SideNav>
        </div >
    );
}
export default Drawer
{/*  */ }