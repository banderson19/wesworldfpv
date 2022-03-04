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
                            <div className="col-lg-4 col-md-6">
                                <div className="mb-4 box-shadow">
                                    <img className="img-fluid rounded mx-auto d-block" style={{width: '23rem', height: '22rem'}} src={fc.image} alt={fc.title} />
                                    <div className="card-body text-center text-white">
                                        <div className="card-text text-justify">
                                            {fc.title}
                                        </div>
                                        <h5>{fc.cost}</h5>
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