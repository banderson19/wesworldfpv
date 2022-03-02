import React from 'react'

import {batteries, features} from '../../utils/utils.js';

const More = () => {
  return (
    <div className="mt-5">
            <div className="container">
            <h1 className="text-white">Batteries & More</h1>
                <div className="row align-items-start">
                    {batteries.map((battery, i) => {
                        return (
                            <div className="col-md-4">
                                <div className="mb-4 box-shadow" >
                                    <div className="card-img-top">
                                    <img className="card-img-top" src={battery.image} alt="Card image cap" />

                                    </div>
                                    <div className="card-body text-center" style={{ backgroundColor: 'grey' }}>
                                        <h4 className="card-text">
                                            {battery.title}
                                        </h4>
                                        <h5>{battery.cost}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                    {features.map((feature, i) => {
                        return (
                            <div className="col-md-4">
                                <div className="mb-4 box-shadow"> 
                                    <img className="card-img-top" src={feature.image} alt="Card image cap" />
                                    <div className="card-body text-center" style={{ backgroundColor: 'grey' }}>
                                        <h4 className="card-text">
                                            {feature.title}
                                        </h4>
                                        <h5>{feature.cost}</h5>
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

export default More