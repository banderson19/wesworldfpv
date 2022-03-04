import React from 'react'

import {propellers} from '../../utils/utils.js';


const Propellers = () => {
    console.log('111', propellers)
    return (
        <div className="mt-5">
            <div className="container">
            <h1 className="text-white">Propellers</h1>
                <div className="row align-items-start">
                    {propellers.map((propeller, i) => {
                        console.log(propeller)
                        return (
                            <div className="col-lg-4 col-md-6">
                                <div className="mb-4 box-shadow">
                                    <img className="img-fluid rounded mx-auto d-block" style={{width: '23rem', height: '22rem'}} src={propeller.image} alt={propeller.title} />
                                    <div className="card-body text-center text-white">
                                        <div className="card-text text-justify">
                                            {propeller.title}
                                        </div>
                                        <h5>{propeller.cost}</h5>
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