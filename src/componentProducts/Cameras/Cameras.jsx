import React from 'react';

import {cameras} from '../../utils/utils.js'

const Cameras = () => {
    console.log(cameras)
    return (
        <div className="mt-5">
            <div className="container">
            <h1 className="text-white">Cameras</h1>

                <div className="row align-items-start">
                    {cameras.map((camera, i) => {
                        console.log(camera)
                        return (
                            <div className="col-lg-4 col-md-6">
                                <div className="mb-4 box-shadow">
                                    <img className="img-fluid rounded mx-auto d-block" style={{width: '23rem', height: '22rem'}} src={camera.image} alt={camera.title} />
                                    <div className="card-body text-center text-white">
                                        <div className="card-text text-justify">
                                            {camera.title}
                                        </div>
                                        <h5>{camera.cost}</h5>
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

export default Cameras