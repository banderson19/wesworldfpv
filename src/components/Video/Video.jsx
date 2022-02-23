import React from 'react';
import zionasfuck from '../../assets/videos/zionasfuck.mp4';


const Video = () => {
  return (
    <div className="container-fluid mx-0 px-0" style={{ position: 'relative', zIndex: '1' }} >
        <video src={zionasfuck} width="100%"controls="controls" autoplay="true" loop="true"  muted="true"/>
    </div>
  )
}

export default Video