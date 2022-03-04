import React from 'react'
import {features} from '../../utils/utils.js';

const More = () => {
  return (
    <div className="mt-5">
            <div className="container">
            <h1 className="text-white">Batteries & More</h1>
                <div className="row align-items-start">
                    {features.map((feature, i) => {
                        return (
                            <div className="col-lg-4 col-md-6">
                                <div className="mb-4 box-shadow"> 
                                    <img className="img-fluid rounded mx-auto d-block" style={{width: '23rem', height: '22rem'}} src={feature.image} alt={feature.title} />
                                    <div className="card-body text-center text-white" >
                                        <div className="card-text text-justify">
                                            {feature.title}
                                        </div>
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