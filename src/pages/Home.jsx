import React from 'react';

import { Video, About, Gallery, Option, Feature } from '../components/index.js';


const Home = () => {
    return (
        <div>
            <Video />
            <div className="logo-bg">
                <About style={{ position: 'relative', zIndex: '1' }} />
                <Option />
                <Feature />
                <Gallery />
            </div>
        </div>
    )
}

export default Home;