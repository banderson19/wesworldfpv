import React from 'react';
import logo from '../../assets/images/wesworldfpv_logo.png';

const Option = () => {
  return (
    <div className="container mb-5">

      <div className="row">
        <div className="col-lg-4 text-center">
            <img src={logo} className="rounded-circle" style={{width: '140px', height: '140px'}}/>
          <h2>Heading</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum et deleniti quibusdam quas at dolores, nemo, expedita aut alias placeat recusandae cumque assumenda, cupiditate deserunt rem. Placeat vel iusto accusamus!</p>
          <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <div className="col-lg-4 text-center">
        <img src={logo} className="rounded-circle" style={{width: '140px', height: '140px'}}/>

          <h2>Heading</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A tenetur culpa expedita alias recusandae! Beatae in laborum vitae, nesciunt magnam molestias, vel facilis necessitatibus consequuntur assumenda similique, accusamus nisi laboriosam.</p>
          <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <div className="col-lg-4 text-center">
        <img src={logo} className="rounded-circle" style={{width: '140px', height: '140px'}}/>

          <h2>Heading</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo temporibus rerum cumque adipisci corporis, fuga reprehenderit esse fugiat rem doloremque deleniti commodi qui distinctio natus. Rerum eius deleniti architecto saepe.</p>
          <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
      </div>
    </div>
  )
}

export default Option