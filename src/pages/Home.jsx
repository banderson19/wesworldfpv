import React from 'react';

import { Nav, Video, About, Gallery, Option, Feature } from '../components/index.js';


const Home = () => {
    return (
        <div>
            <Nav/>
            <Video />
            <div className="logo-bg">
                {/* <Option /> */}
                <About style={{ position: 'relative', zIndex: '1' }} />
                <Feature />
                <Gallery />
            </div>
        </div>
    )
}

export default Home;