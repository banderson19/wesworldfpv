import React from 'react';
import './video.css';
import zionasfuck from '../../assets/videos/zionasfuck.mp4';
import wesworldfpv_logo from '../../assets/images/wesworldfpv_logo.png'

const Video = () => {
  return (
    <div>

    <div className="container-fluid mx-0 px-0" style={{ position: 'relative', zIndex: '1' }} >
        <video src={zionasfuck} width="100%"controls="controls" autoplay="true" loop="true"  muted="true"/>
    </div>
      <div>
        <img className="mx-auto mb-4 img-fluid img-reponsive logo_bg"  src={wesworldfpv_logo} alt="wesworldfpv_logo" />
      </div>
    </div>

  )
}

export default Video