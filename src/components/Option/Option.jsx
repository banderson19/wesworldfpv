import React from 'react';
import logo from '../../assets/images/wesworldfpv_logo.png';
import dice_1 from '../../assets/images/dice_1.png';
import dice_2 from '../../assets/images/dice_2.png';
import dice_3 from '../../assets/images/dice_3.png';
import one from '../../assets/images/one.png';
import two from '../../assets/images/two.png';
import three from '../../assets/images/three.png';


const Option = () => {
  return (
    <div className="container mb-5">
      <div className="px-4 py-5 text-center text-white">
        <h1 className="display-5 fw-bold">Customer build your own drone</h1>
        <div className="col-lg-6 mx-auto">
          <h4 className="mb-4">from scratch to take off to flight</h4>

        </div>
      </div>

      <div className="row text-white">
        <div className="col-lg-4 text-center">
          <img src={one} className="rounded-circle" style={{ width: '140px', height: '140px' }} />
          <h2>Pick size</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum et deleniti quibusdam quas at dolores, nemo, expedita aut alias placeat recusandae cumque assumenda, cupiditate deserunt rem. Placeat vel iusto accusamus!</p>
          <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <div className="col-lg-4 text-center">
          <img src={two} className="rounded-circle" style={{ width: '140px', height: '140px' }} />

          <h2>Color Combination</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A tenetur culpa expedita alias recusandae! Beatae in laborum vitae, nesciunt magnam molestias, vel facilis necessitatibus consequuntur assumenda similique, accusamus nisi laboriosam.</p>
          <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <div className="col-lg-4 text-center">
          <img src={three} className="rounded-circle" style={{ width: '140px', height: '140px' }} />

          <h2>The Tune Up</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo temporibus rerum cumque adipisci corporis, fuga reprehenderit esse fugiat rem doloremque deleniti commodi qui distinctio natus. Rerum eius deleniti architecto saepe.</p>
          <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
      </div>
    </div>
  )
}

export default Option