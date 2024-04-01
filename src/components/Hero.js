import React from 'react'
import coverimg from '../images/hero.jpg'

const Hero = () => {
    return (
        <section>
        <div className='absolute'>
            <img src={coverimg} alt='heroimg' />
        </div>
        <div className='relative text-white text-center'>
            <h2 className='pt-14 text-xl md:pt-32 lg:pt-52 md:mb-6 lg:mb-8 md:text-4xl lg:text-6xl'>Quantum Compilers</h2>
            <p className='text-sm md:text-xl lg:text-xl md:mb-6 lg:mb-8'>Quantum CompilersQuantum CompilersQuantum CompilersQuantum CompilersQuantum CompilersQuantum Compilers</p>
            <button className='px-2 py-1 text-sm bg-white text-black rounded md:px-5 md:py-3 md:text-xl lg:px-5 lg:py-3 lg:text-xl'>Contact Us</button>
        </div>
    </section>
    )
}

export default Hero