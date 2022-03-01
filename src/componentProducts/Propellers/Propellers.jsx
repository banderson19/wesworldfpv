import React from 'react'

import {propellers} from '../../utils/utils.js';


const Propellers = () => {
    console.log('111', propellers)
    return (
        <div className="mt-5">
            <div className="container">
                <div className="row">
                    {propellers.map((propeller, i) => {
                        console.log(propeller)
                        return (
                            <div className="col-md-4">
                                <div className="mb-4 box-shadow">
                                    <img className="card-img-top" src={propeller.image} alt="Card image cap" />
                                    <div className="card-body" style={{ backgroundColor: 'grey' }}>
                                        <p className="card-text">
                                            {propeller.title}
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

export default Propellers;