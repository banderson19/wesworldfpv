import React from 'react'
import logo from  '../../assets/images/wesworldfpv_logo.png';
import drone  from  '../../assets/images/drone_3.jpeg';

const Feature = () => {
  return (
    <div className='container-fluid' style={{backgroundColor: 'grey'}} >
      <div className="row featurette">
        <div className="col-md-8 my-auto text-end">
          <h2 className="featurette-heading">About Wesworldfpv<span className="text-white"> It’ll blow your mind.</span></h2>
          <p className='lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab asperiores, dolorum eveniet natus illo pariatur tempora sit voluptatum sequi ullam consequuntur, corporis possimus. Harum nemo in commodi optio, tempora mollitia?</p>
        </div>
        <div className="col-md-4">
          <img className="mr-3 mt-3 col-3" src={drone} style={{ width: "18.75rem", height: "18.75rem", borderRadius: '50%'}} alt="Generic placeholder image" />

        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-8 order-md-2 my-auto">
          <h2 className="featurette-heading">Cheif Pilot - <span className="text-white"> Wesley Christensen</span></h2>
          <p className='lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab asperiores, dolorum eveniet natus illo pariatur tempora sit voluptatum sequi ullam consequuntur, corporis possimus. Harum nemo in commodi optio, tempora mollitia?</p>
          <button className="btn btn-info">Resume</button>
        </div>
        <div className="col-md-4 order-md-1">
          <img className="mr-3 col-3" src={drone} style={{ width: "18.75rem", height: "18.75rem",  borderRadius: '50%', float: 'right'}} alt="Generic placeholder image" />

        </div>
      </div>

      <hr className="featurette-divider" />

    </div>
  )
}

export default Feature