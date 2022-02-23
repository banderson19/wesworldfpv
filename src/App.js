import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';


import {Nav, Video, About, Gallery } from './components/index.js';

function App() {
  return (
    <div className="gradient-bg2">
      <Nav/>
      <Video/>
      <About/>
      <Gallery/>
    </div>
  );
}

export default App;
