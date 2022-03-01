import React from 'react'

import {batteries, features} from '../../utils/utils.js';

const More = () => {
  return (
    <div className="mt-5">
            <div className="container">
                <div className="row">
                    {batteries.map((battery, i) => {
                        return (
                            <div className="col-md-4">
                                <div className="mb-4 box-shadow">
                                    <img className="card-img-top" src={battery.image} alt="Card image cap" />
                                    <div className="card-body" style={{ backgroundColor: 'grey' }}>
                                        <p className="card-text">
                                            {battery.title}
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
                    {features.map((feature, i) => {
                        return (
                            <div className="col-md-4">
                                <div className="mb-4 box-shadow">
                                    <img className="card-img-top" src={feature.image} alt="Card image cap" />
                                    <div className="card-body" style={{ backgroundColor: 'grey' }}>
                                        <p className="card-text">
                                            {feature.title}
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

export default More