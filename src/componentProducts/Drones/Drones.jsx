import React from 'react';

import {drones} from '../../utils/utils.js';

const Drones = () => {
    console.log(drones)
  return (
    <div className="mt-5">
            <div className="container">
                <div className="row">
                    {drones.map((drone, i) => {
                        return (
                            <div className="col-md-4">
                                <div className="mb-4 box-shadow">
                                    <img className="card-img-top" src={drone.image} alt="Card image cap" />
                                    <div className="card-body" style={{ backgroundColor: 'grey' }}>
                                        <p className="card-text">
                                            {drone.title}
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-light">Like</button>
                                                <button type="button" className="btn btn-sm btn-outline-light">Share</button>
                                                <button type="button" className="btn btn-sm btn-success mx-1">Purchase</button>
                                            </div>
                                        </div>
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