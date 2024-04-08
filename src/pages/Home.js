import React from 'react'

import Hero from "../components/Home/Hero";
import Intro from "../components/Home/Intro";
import Services from "../components/Home/Services";
import Works from "../components/Home/Works";
import Trust from "../components/Home/Trust";
import Testomonials from '../components/Home/Testomonials';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Trust />
            <Services />
            <Works />
            <Testomonials />
        </>
    )
}

export default Home