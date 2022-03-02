import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

import { Drones } from '../componentProducts/index.js';
import logo from '../assets/images/wesworldfpv_text.png';

const Products = () => {

    const [outlet, setOutlet] = useState(true)

    return (
        <div className="container-fluid py-5 px-0">
            <div className="fixed-top">
                <nav id="navbar" className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top' style={{ position: 'relative', zIndex: '1' }}>
                    <a className="navbar-brand-top mx-2 logoHeight" href="#">
                        <Link to="/"><img src={logo} className="img-fluid logoHeight" alt="" /></Link>
                    </a>
                    <button className="navbar-toggler me-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="na navbar-nav pe-5" onClick={() => setOutlet(false)} >
                            <li className="nav-item active"><Link className="nav-link" to="/products/drones">Drones</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/products/motors" >Motors</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/products/propellers">Propellers</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/products/cameras">Cameras</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/products/flightControllers">Flight Controllers</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/products/more">More</Link></li>
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
            <form className="container my-5">
                <div className="row">
                    <div className="col-md text-center text-white">
                        <h3>Contact</h3>
                        <p>To make a purchase or ask any questions, please fill in the form → </p>
                        <p>We will get back to you as soon as possible for further arrangements.</p>
                        <div className="mt-4 text-center">
                            <ul className="list-unstyled mb-0">
                                <li><i className="bi bi-geo-alt-fill"></i>
                                    <h5>Charleston, SC USA</h5>
                                </li>

                                <li><i className="bi bi-telephone-fill"></i>
                                    <h5>+ 01 234 567 89</h5>
                                </li>

                                <li><i className="bi bi-envelope-fill"></i>
                                    <h5>contact@mdbootstrap.com</h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md">
                        <input type="text" className="form-control my-1" id="" placeholder="Name" />
                        <input type="text" className="form-control my-1" id="" placeholder="Phone" />
                        <input type="text" className="form-control my-1" id="" placeholder="Email" />
                        <input type="text" className="form-control my-1" id="" placeholder="Subject" />
                        <textarea type="text" className="form-control my-1" id="" rows="5" placeholder="Message" />

                    </div>
                </div>
            </form>
        </div>
    )
}

export default Products;