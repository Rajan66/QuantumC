import React from 'react'
import coverimg from '../images/hero.jpg'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <section className='bg-center h-[70vh] bg-cover relative'>
            <div className="absolute inset-0 bg-cover bg-center brightness-50" style={{ backgroundImage: `url(${coverimg})` }}></div>
            <div className="relative text-white py-12  lg:py-24 lg:px-8 text-center z-10">
                <h1 className="mt-10 text-4xl lg:text-6xl font-bold mb-6 lg:mb-10">Striving for Progress</h1>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 lg:mb-10">Leading Towards Perfection</h1>
                <p className="text-medium lg:text-lg">You understand your customers better than anyone. We know that, and we can help you turn that knowledge into results.</p>

                <div className='flex mt-[50px] justify-center  '>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full mx-10 flex items-center">
                        <span>Create with Us</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 10a1 1 0 011-1h6.586l-2.293-2.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H6a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full mx-10 flex items-center">
                        <span>Join Us</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 10a1 1 0 011-1h6.586l-2.293-2.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H6a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>

                </div>
            </div>
        </section>
    )
}

export default Hero