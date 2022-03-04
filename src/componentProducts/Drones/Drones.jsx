import React from 'react';

import {drones} from '../../utils/utils.js';

const Drones = () => {
    console.log(drones)
  return (
    <div className="mt-5">
            <div className="container">
                <h1 className="text-white">Featured Drones</h1>
                <div className="row align-items-start">
                    {drones.map((drone, i) => {
                        return (
                            <div className="col-lg-4 col-md-6">
                                <div className="mb-4 box-shadow">
                                    <img className="img-fluid rounded mx-auto d-block justify-space-between" style={{width: '23rem', height: '22rem'}} src={drone.image} alt={drone.title} />
                                    <div className="card-body text-center text-white">
                                        <div className="card-text text-justify">
                                            {drone.title}
                                        </div>
                                        <h5>{drone.cost}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
  )
}

export default Drones