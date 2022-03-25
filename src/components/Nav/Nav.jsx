import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import wwfpv_text from '../../assets/images/wwfpv_text.png';
import weskraft_text from '../../assets/images/weskraft_text2.png';
import './nav.css';

const Nav = () => {
    const [navbar, setNavbar] = useState(false);

    const changeNavbarBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeNavbarBackground);

    // const bsCollapse  = new 

    return (
        <div className="container-fluid justify-content-between fixed-top px-0" >
            <nav id="navbar" className={navbar ? 'navbar navbar-expand-lg navbar-dark bg-dark justify-content-between' : 'navbar navbar-expand-lg navbar-dark bg-dark justify-content-between'} style={{ position: 'relative', zIndex: '1' }}>
                <a className="navbar-brand-top mx-2 logoHeight" href="#">
                    <Link to="/"><img src={weskraft_text} className="img-fluid logoHeight" alt="wwfpv_text-logo" /></Link>
                </a>
                {/* <button className="navbar-toggler me-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                {/* collapse navbar-collapse */}
                <div className="" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-2 pe-5" >
                        {/* <li className="nav-item">
                            <a className="nav-link h4" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link h4" href="#gallery">Gallery</a>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link h4 text-info" to="/products">Products</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>


    )
}

export default Nav;