import React from 'react'
import logo from  '../../assets/images/wesworldfpv_logo.png';
import drone  from  '../../assets/images/drone_3.jpeg';

const Feature = () => {
  return (
    <div className='container-fluid text-white' >
      <div className="row">
        <div className="col-lg-8 my-auto text-center">
          <h1 className="text-danger">WesKraft - <span className="text-info"> It’ll blow your mind.</span></h1>
          <h4 className='font-weight-bold'>Each drone is hand crafted with the best electronics and tested by me! These things are FAST top speed of 100+ and more agile then anything you’ve ever seen!!</h4>
        </div>
        <div className="col-lg-4">
          <img className="mx-auto d-block mt-3 col-3" src={drone} style={{ width: "18.75rem", height: "18.75rem", borderRadius: '50%'}} alt="Generic placeholder image" />

        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 order-lg-2 my-auto text-center">
          <h1 className="text-info">Cheif Pilot - <span className="text-danger"> Wesley Christensen</span></h1>
          <h4 className='font-weight-bold'>UAV Pilot for 6+ years with specialty in videography and drone assembly/programming.</h4>
        </div>
        <div className="col-lg-4 order-lg-1" style={{marginLeft: 'auto', marginRight: 'auto'}}>
          <img className="mx-auto mt-3 d-block col-3" src={drone} style={{ width: "18.75rem", height: "18.75rem",  borderRadius: '50%'}} alt="Generic placeholder image" />

        </div>
      </div>
    </div>
  )
}

export default Feature