import React from 'react'

import Hero from "../components/Home/Hero";
import Intro from "../components/Home/Intro";
import Services from "../components/Home/Services";
import Works from "../components/Home/Works";

import DevProcess from "../components/DevProcess";
import Trust from "../components/Home/Trust";


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Trust />
            <Services />
            <Works />
            {/* <DevProcess /> */}
    
        </>
    )
}

export default Home