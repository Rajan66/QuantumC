import React from 'react'
import coverimg from '../images/hero.jpg'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <section style={{ backgroundImage: `url(${coverimg})` }} className='bg-center h-[70vh] bg-cover'>
            <div className="relative text-white py-12 md:py-24 md:px-8 text-center">
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4">Striving for Progress</h1>
                    <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Leading Towards Perfection</h1>
                    <p className="text-sm md:text-lg">You understand your customers better than anyone. We know that, and we can help you turn that knowledge into results.</p>
                </div>
            </div>
        </section>
    )
}

export default Hero