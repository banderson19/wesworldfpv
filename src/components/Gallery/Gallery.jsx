import React, { useState } from 'react';
import wesworldfpv_logo from '../../assets/images/wesworldfpv_logo.png';

import drone_1 from '../../assets/images/drone_1.jpeg';
import drone_2 from '../../assets/images/drone_2.jpeg';
import drone_3 from '../../assets/images/drone_3.jpeg';
import drone_4 from '../../assets/images/drone_4.jpeg';

import video_cave from '../../assets/videos/video_cave.mp4';
import video_graffiti from '../../assets/videos/video_graffiti.mp4';
import zionasfuck from '../../assets/videos/zionasfuck.mp4';
import waterfall from '../../assets/videos/waterfall-4k60H.mp4';



const Gallery = () => {

  const [media, setMedia] = useState(true)

  const images = [
    {
      id: 1,
      image: drone_1,
      takeOffWeight: 'Approx. 795 g',
      dimensions: '255×312×127 mm (with propellers)',
      maxFlightTime: 'Approx. 20 mins'
    },
    {
      id: 2,
      image: drone_2,
      takeOffWeight: 'Approx. 795 g',
      dimensions: '255×312×127 mm (with propellers)',
      maxFlightTime: 'Approx. 20 mins'
    },
    {
      id: 3,
      image: drone_3,
      takeOffWeight: 'Approx. 795 g',
      dimensions: '255×312×127 mm (with propellers)',
      maxFlightTime: 'Approx. 20 mins'
    },
    {
      id: 4,
      image: drone_4,
      takeOffWeight: 'Approx. 795 g',
      dimensions: '255×312×127 mm (with propellers)',
      maxFlightTime: 'Approx. 20 mins'
    }
  ]

  const videos = [
    {
      id: 1,
      video: video_cave,
      context: 'diving through caves and shit'
    },
    {
      id: 2,
      video: video_graffiti,
      context: 'explore others people art the best way I know how to'
    },
    {
      id: 3,
      video: zionasfuck
    },
    {
      id: 4,
      videos: waterfall
    }
  ]


  return (
    <main id="gallery" style={{ position: 'relative', zIndex: '1' }}>

      <section className="jumbotron text-center">
        <div className="container" style={{paddingTop: '10rem'}}>
          <button className="btn btn-lg btn-danger my-2 mx-2" onClick={() => setMedia(true)}>Photos</button>
          <button className="btn btn-lg btn-secondary my-2 mx-2" onClick={() => setMedia(false)}>Videos</button>
        </div>
      </section>

      <div className="album py-5">
        <div className="container">
          {media ?
            <div className="row">
              {images.map((image, i) => {
                console.log(image)
                return (
                  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                      src={image.image}
                      className="w-100 shadow-1-strong rounded mb-4"
                      alt="Boat on Calm Water"
                    />
                    <div className="mb-4 box-shadow">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-light">Like</button>
                          <button type="button" className="btn btn-sm btn-outline-light">Share</button>
                          <button type="button" className="btn btn-sm btn-success mx-1">Purchase</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
              }
            </div>
            :
            <div className="row">
              {videos.map((video, i) => {
                console.log(video)
                return (
                  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                      <video src={video.video} className="w-100 shadow-1-strong rounded mb-4" controls="controls" controlslist="nodownload" autoPlay="false" loop="true" muted="true" />
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-light">Like</button>
                            <button type="button" className="btn btn-sm btn-outline-light">Share</button>
                            <button type="button" className="btn btn-sm btn-success mx-1">Purchase</button>
                          </div>
                        </div>
                      </div>
                    
                )
              })
              }
            </div>
          }
        </div>
      </div>
    </main>
  )
}

export default Gallery;