import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Contact } from '../components/index.js';

import { Drones } from '../componentProducts/index.js';
import weskraft_text2 from '../assets/images/weskraft_text2.png';

const Products = () => {

    const [outlet, setOutlet] = useState(true)

    return (
        <div className="container-fluid py-5 px-0">
            <div className="fixed-top">
                <nav id="navbar" className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top' style={{ position: 'relative', zIndex: '1' }}>
                    <a className="navbar-brand-top mx-2 logoHeight" href="#">
                        <Link to="/"><img src={weskraft_text2} className="img-fluid logoHeight" alt="" /></Link>
                    </a>
                    <button className="navbar-toggler me-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="ms-2 nav navbar-nav pe-5" onClick={() => setOutlet(false)} >
                            <li className="nav-item active"><Link className="nav-link" to="/products/drones">Drones</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/products/motors" >Motors</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/products/propellers">Propellers</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/products/cameras">Cameras</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/products/flightControllers">Flight Controllers</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/products/batteries">Batteries</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/products/more">Accessories</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="mt-5 px-3 text-white">
                <p>To make a purchase or ask any questions, please fill in the form at bottom of page </p>

            </div>
            <hr className="text-white"></hr>
            <div>
                {outlet ? <Drones /> : <Outlet />}
            </div>
            <div>
                <Contact/>
            </div>
        </div>
    )
}

export default Products;