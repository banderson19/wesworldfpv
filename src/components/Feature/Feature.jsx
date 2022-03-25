import React from 'react'
import logo from  '../../assets/images/wesworldfpv_logo.png';
import drone  from  '../../assets/images/drone_3.jpeg';

const Feature = () => {
  return (
    <div className='container-fluid text-white' >
      <div className="row">
        <div className="col-lg-8 my-auto text-center">
          <h1 className="fw-bold" style={{color: '#e60008'}}>Weskraft - <span className="text-info fst-italic"> It’ll blow your mind.</span></h1>
          <h4>Each drone is hand crafted with the best electronics and tested by myself! These things  <span className=" fw-bold fst-italic">FAST,</span> exceeding limits of 100+ mph and more agile then anything you’ve ever seen!!</h4>
        </div>
        <div className="col-lg-4">
          <img className="mx-auto d-block mt-3 col-3" src={drone} style={{ width: "18.75rem", height: "18.75rem", borderRadius: '50%'}} alt="Generic placeholder image" />

        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 order-lg-2 my-auto text-center">
          <h1 className="text-info fw-bold"><span className="fst-italic">Cheif Pilot -</span><span style={{color: '#e60008'}}> Wesley Christensen</span></h1>
          <h4>UAV Pilot for 6+ years with specialty in videography and drone assembly/programming.</h4>
        </div>
        <div className="col-lg-4 order-lg-1" style={{marginLeft: 'auto', marginRight: 'auto'}}>
          <img className="mx-auto mt-3 d-block col-3" src={drone} style={{ width: "18.75rem", height: "18.75rem",  borderRadius: '50%'}} alt="Generic placeholder image" />

        </div>
      </div>
    </div>
  )
}

export default Feature