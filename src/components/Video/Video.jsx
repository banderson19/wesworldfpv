import React, { useState } from 'react';
import './video.css';
import droneImg from '../../assets/images/drone_1.jpeg';
import wklogo2 from '../../assets/images/wklogo2.png';
import waterfall from '../../assets/videos/waterfall-4k60H.mp4';
const Video = () => {

  const [background, setBackground] = useState(false);
  console.log(window.screen.width)
  const changeBackground = () => {
    if (window.screen.width <= 450) {
      setBackground(true);
      console.log('width true')
    } else {
      setBackground(false);
      console.log('width false')
    }
  }
  console.log(background)
  window.addEventListener('resize', changeBackground);

  return (
    <div className='justify-content-center '>
      <div className="container-fluid mx-0 px-0" style={{ position: 'relative', zIndex: '1' }} >
        {background ?
          // 
          <div className="row">
            <img className="mx-auto" src={wklogo2} style={{ width: "18.75rem", height: "18.75rem", marginTop: '70px'}}/>
          </div>
          :
          <video src={waterfall} style={{ marginTop: '60px' }} width="100%" autoPlay loop muted />
        } 
      </div>
    </div>
  )
}

export default Video