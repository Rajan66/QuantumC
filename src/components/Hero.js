import React from 'react'
import coverimg from '../images/hero.jpg'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <section className='bg-center h-[70vh] bg-cover relative'>
            <div className="absolute inset-0 bg-cover bg-center brightness-50" style={{ backgroundImage: `url(${coverimg})` }}></div>
            <div className="relative text-white py-12 md:py-24 md:px-8 text-center z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-10">Striving for Progress</h1>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-10">Leading Towards Perfection</h1>
                <p className="text-medium md:text-lg">You understand your customers better than anyone. We know that, and we can help you turn that knowledge into results.</p>
            </div>
        </section>
    )
}

export default Hero