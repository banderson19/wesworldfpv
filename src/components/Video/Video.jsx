import React from 'react';
import './video.css';
import zionasfuck from '../../assets/videos/zionasfuck.mp4';
import wesworldfpv_logo from '../../assets/images/wesworldfpv_logo.png'

const Video = () => {
  return (
    <div className='justify-content-center '>

    <div className="container-fluid mx-0 px-0" style={{ position: 'relative', zIndex: '1' }} >
        <video src={zionasfuck} width="100%"controls="controls" autoplay="true" loop="true"  muted="true"/>
    </div>
    <div className=""></div>
      {/* <div className="col">
        <img className="mx-auto mb-4 img-fluid img-reponsive "  src={wesworldfpv_logo} alt="wesworldfpv_logo" />
      </div> */}
    </div>
// style={{position: 'fixed', opacity: '.25', width: '32rem', height: '32rem', top: '50%', left: '50%', marginTop: '-16rem',  marginLeft: '-16rem' }}
  )
}

export default Video