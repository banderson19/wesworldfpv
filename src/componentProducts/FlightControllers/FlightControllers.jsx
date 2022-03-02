import React from 'react'
import {flightControllers} from '../../utils/utils.js';

const FlightControllers = () => {
    console.log('fc', flightControllers)
  return (
    <div className="mt-5">
            <div className="container">
            <h1 className="text-white">Flight Controllers</h1>
                <div className="row align-items-start">
                    {flightControllers.map((fc, i) => {
                        return (
                            <div className="col-md-4">
                                <div className="mb-4 box-shadow">
                                    <img className="card-img-top" src={fc.image} alt="Card image cap" />
                                    <div className="card-body text-center" style={{ backgroundColor: 'grey' }}>
                                        <h4 className="card-text">
                                            {fc.title}
                                        </h4>
                                        <h5>{fc.cost}</h5>
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

export default FlightControllers