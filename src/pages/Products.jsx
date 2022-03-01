import React, {useState} from 'react'
import {Link, Outlet} from 'react-router-dom';

import {Drones} from '../componentProducts/index.js';

const Products = () => {

    const [outlet, setOutlet] = useState(true)

    return (
        <div className="container mt-5">
            <h1 className="text-center pt-5 text-white">ProductPage</h1>
            
            <ul className="nav nav-tabs" onClick={() => setOutlet(false)} >
                <li className="nav-item"><Link to="/products/drones">Drones</Link></li>
                <li className="nav-item"><Link to="/products/motors" >Motors</Link></li>
                <li className="nav-item"><Link to="/products/propellers">Propellers</Link></li>
                <li className="nav-item"><Link to="/products/cameras">Cameras</Link></li>
                <li className="nav-item"><Link to="/products/flightControllers">Flight Controllers</Link></li>
                <li className="nav-item"><Link to="/products/more">More</Link></li>

            </ul>
            <div>
                {outlet ?  <Drones/> : <Outlet/> }
            </div>
        </div>
    )
}

export default Products;