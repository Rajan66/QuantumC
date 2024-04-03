import React from 'react'

import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Works from "../components/Works";
import Aboutus from "../components/Aboutus";
import Inquiry from "../components/Inquiry";
import DevProcess from "../components/DevProcess";
import Trust from "../components/Trust";


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Trust />
            <Services />
            <Works />
            <DevProcess />
            <Aboutus />
            <Inquiry />
        </>
    )
}

export default Home