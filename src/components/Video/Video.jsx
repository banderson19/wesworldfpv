import React from 'react';
import './video.css';
import zionasfuck from '../../assets/videos/zionasfuck.mp4';
import waterfall from '../../assets/videos/waterfall-4k60H.mp4';
const Video = () => {
  return (
    <div className='justify-content-center '>

      <div className="container-fluid mx-0 px-0" style={{ position: 'relative', zIndex: '1' }} >
        <video src={waterfall} style={{ marginTop: '60px' }} width="100%" autoPlay='true' loop={true} muted={true} />
      </div>
    </div>
  )
}

export default Video