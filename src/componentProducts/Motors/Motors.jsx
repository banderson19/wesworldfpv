import React from 'react';

import {motors} from '../../utils/utils.js';

const Motors = () => {
    console.log(motors)
  return (
    <div className="mt-5">
            <div className="container">
            <h1 className="text-white">Motors</h1>
                <div className="row align-items-start">
                    {motors.map((motor, i) => {
                        console.log(motor)
                        return (
                            <div className="col-md-4">
                                <div className="mb-4 box-shadow">
                                    <img className="card-img-top" src={motor.image} alt="Card image cap" />
                                    <div className="card-body text-center" style={{ backgroundColor: 'grey' }}>
                                        <h4 className="card-text">
                                            {motor.title}
                                        </h4>
                                        <h5>{motor.cost}</h5>
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

export default Motors