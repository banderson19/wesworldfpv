import React from 'react'
import {batteries} from '../../utils/utils.js';

const Batteries = () => {
    console.log('fc', batteries)
  return (
    <div className="mt-5">
            <div className="container">
            <h1 className="text-white">Flight Controllers</h1>
                <div className="row align-items-start">
                    {batteries.map((battery, i) => {
                        return (
                            <div className="col-lg-4 col-md-6">
                                <div className="mb-4 box-shadow">
                                    <img className="img-fluid rounded mx-auto d-block" style={{width: '23rem', height: '22rem'}} src={battery.image} alt={battery.title} />
                                    <div className="card-body text-center text-white">
                                        <div className="card-text text-justify">
                                            {battery.title}
                                        </div>
                                        <h5>{battery.cost}</h5>
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

export default Batteries