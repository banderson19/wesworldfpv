import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
            <nav id="navbar" className='navbar navbar-expand-lg navbar-dark bg-dark' style={{ position: 'relative', zIndex: '1' }}>
                <a className="navbar-brand-top h1" href="#">WesWorldFPV</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav px-3" style={{ textAlign: 'end' }}>
                        <li className="nav-item">
                            <a className="nav-link h4" href="#about">About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link h4" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link h4" href="#portfolio">Portfolio</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>


    )
}

export default Nav;