import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import wwfpv_text from '../../assets/images/wwfpv_text.png';
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
    // <nav id="navbar" className="navbar active fixed-top navbar-expand-lg navbar-light">

    return (
        <div className="container-fluid fixed-top px-0" >
            <nav id="navbar" className={navbar ? 'navbar navbar-expand-lg navbar-dark bg-dark' : 'navbar navbar-expand-lg navbar-dark bg-dark'} style={{ position: 'relative', zIndex: '1' }}>
                <a className="navbar-brand-top mx-2 logoHeight" href="#">
                    <Link to="/"><img src={wwfpv_text} className="img-fluid logoHeight" alt="" /></Link>
                </a>
                <button className="navbar-toggler me-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto pe-5" >
                        <li className="nav-item">
                            <a className="nav-link h4" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link h4" href="#gallery">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link h4" to="/products">Products</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>


    )
}

export default Nav;