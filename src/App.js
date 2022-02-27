import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';


import {Nav, Video, About, Gallery, Option, Footer} from './components/index.js';

function App() {
  return (
    <div className="gradient-bg3">
      <Nav/>
      <Video/>
      <div className="logo-bg">
        <About style={{ position: 'relative', zIndex: '1' }}/>
        <Option/>
        <Gallery/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
