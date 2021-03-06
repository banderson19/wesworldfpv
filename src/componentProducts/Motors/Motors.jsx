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
                            <div className="col-lg-4 col-md-6">
                                <div className="mb-4 box-shadow">
                                    <img className="img-fluid rounded mx-auto d-block" src={motor.image} style={{width: '23rem', height: '22rem'}} alt={motor.title} />
                                    <div className="card-body text-center text-white" >
                                        <div className="card-text text-justify">
                                            {motor.title}
                                        </div>
                                        <h5>{motor.cost}</h5>
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