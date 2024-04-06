import React from 'react'
import { Link } from 'react-router-dom'
import wordpress from '../../images/logo/wordpress_logo.png'


const Services = () => {
    return (
        <section className='bg-white '>
            <div className='mx-auto md:p-10 md:mx-16 lg:p-20 lg:mx-32 mb-6'>
                <div className='flex flex-col justify-center items-center gap-6'>
                    <h1 className='text-4xl font-bold text-gray-600'>BUILD CUSTOM</h1>
                    <h1 className='text-4xl font-bold text-gray-600'><span className='bg-gradient-to-br from-purple-600 to-cyan-400 bg-clip-text text-transparent'>SOLUTIONS</span> WITH THE BEST</h1>
                    <p className='lg:w-1/2 text-lg'>Our diverse team of experts is proficient in crafting dynamic websites, intuitive mobile applications, advanced machine learning algorithms, and custom WordPress solutions tailored
                        <span className='font-bold bg-gradient-to-br from-purple-600 to-cyan-400 bg-clip-text text-transparent'> to meet the unique needs of our clients.</span></p>
                    <Link to='/contact' class="bg-gradient-to-br from-cyan-400 to-purple-400  text-white transition-all ease-in-out text-md  hover:text-sky-100 py-4 px-4 rounded-md mx-10 flex items-center justify-center">
                        <span className='uppercase'>Get Started Today</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 10a1 1 0 011-1h6.586l-2.293-2.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H6a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
         
            </div>
        </section>
    )
}

export default Services