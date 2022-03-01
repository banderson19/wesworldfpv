import React from 'react'
import logo from  '../../assets/images/wesworldfpv_logo.png';
import drone  from  '../../assets/images/drone_3.jpeg';

const Feature = () => {
  return (
    <div className='container'  style={{backgroundColor: '#ffffff50'}}>
        <h1 className="text-center">Featured Drones for sale</h1>
      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 text-end">
          <h2 className="featurette-heading">About Mindset Packs<span className="text-muted"> It’ll blow your mind.</span></h2>
          <p className='lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab asperiores, dolorum eveniet natus illo pariatur tempora sit voluptatum sequi ullam consequuntur, corporis possimus. Harum nemo in commodi optio, tempora mollitia?</p>
        </div>
        <div className="col-md-5">
          <img className="mr-3 col-3 " src={drone} style={{ width: "500px", height: "500px" }} alt="Generic placeholder image" />

        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">Cheif Designer <span className="text-muted"> - Preston Henning</span></h2>
          <p className='lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab asperiores, dolorum eveniet natus illo pariatur tempora sit voluptatum sequi ullam consequuntur, corporis possimus. Harum nemo in commodi optio, tempora mollitia?</p>
          <button className="btn btn-info">Resume</button>
        </div>
        <div className="col-md-5 order-md-1">
          <img className="mr-3 col-3" src={drone} style={{ width: "500px", height: "500px",  borderRadius: '50%'}} alt="Generic placeholder image" />

        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 text-end">
          <h2 className="featurette-heading">Designer Principles. <span className="text-muted">Brace yourself</span></h2>
          <p className='lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab asperiores, dolorum eveniet natus illo pariatur tempora sit voluptatum sequi ullam consequuntur, corporis possimus. Harum nemo in commodi optio, tempora mollitia?</p>
        </div>
        <div className="col-md-5">
          <img className="mr-3 col-3 " src={drone} style={{ width: "500px", height: "500px", borderRadius: '50%'}} alt="Generic placeholder image" />

        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">Last but not least, warranty. <span className="text-muted"> Checkmate</span></h2>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, dolores. Quisquam, quam! Accusamus asperiores, qui soluta quibusdam cumque amet ipsa, exercitationem iusto consequuntur autem possimus, error odio reiciendis impedit repudiandae!</p>
        </div>
        <div className="col-md-5 order-md-1">
          <img className="mr-3 col-3" src={drone} style={{ width: "500px", height: "500px" }} alt="Generic placeholder image" />

        </div>
      </div>

    </div>
  )
}

export default Feature