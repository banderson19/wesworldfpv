import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';

import { Routes, Route, Navigate} from 'react-router-dom';

import {Nav, Footer} from './components/index.js';
import { Home, Products} from './pages/index.js';
import { Drones, Motors, Propellers, Cameras, FlightControllers, Batteries, More} from './componentProducts/index.js';



function App() {
  return (
    <div className="gradient-bg5">
        <Routes>
          <Route path="*" element={<Navigate to="/" />}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}>
            <Route path="/products/drones" element={<Drones/>}/>
            <Route path="/products/motors" element={<Motors/>}/>
            <Route path="/products/propellers" element={<Propellers/>}/>
            <Route path="/products/flightControllers" element={<FlightControllers/>}/>
            <Route path="/products/cameras" element={<Cameras/>}/>
            <Route path="/products/batteries" element={<Batteries/>}/>
            <Route path="/products/more" element={<More/>}/>
          </Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
