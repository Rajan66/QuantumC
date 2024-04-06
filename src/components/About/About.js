import React from 'react'
import team from '../../images/team.jpg'
import mission from '../../images/mission.jpg'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section id="top" className='bg-white '>
            <div className=' mx-auto md:p-10 md:mx-16 lg:p-20 lg:mx-32 '>
                <div className='lg:flex justify-center mb-10'>
                    <div className='w-1/2 text-start px-6'>
                        <h1 className='text-black font-bold uppercase text-md mb-4 font-sans '>
                            About us
                        </h1>
                        <div className='flex flex-col gap-3 mb-4'>
                            <h1 className='text-4xl lg:text-6xl font-bold '>Screw it</h1>
                            <h1 className='bg-gradient-to-br from-purple-600 to-cyan-400 bg-clip-text text-transparent text-4xl lg:text-6xl font-bold '>Let's Do It.</h1>
                        </div>
                        <p className='text-xl mb-4'>
                            Count on us as your dependable technology partner, poised to assist you in your upcoming endeavors.
                        </p>
                        <p className='text-gray-500 text-md '>Quantum Compilers, a team of young, vibrant and passionate individuals, we strive for progress and deliver exceptional service and support. We learn about your unique values your business creates, before building a custom website, to ensure everything to help you and your brand achieve growth.</p>
                        <Link to={`/contact`} class="transition-all text-black hover:text-indigo-300 text-md  py-4 mt-6 flex  items-center justify-start">
                            <span className='uppercase font-bold '>Get in touch</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 10a1 1 0 011-1h6.586l-2.293-2.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H6a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                    <img src={team} className='w-full lg:w-1/2 mx-auto rounded-bl-[200px] shadow-xl' />
                </div>
            </div>
        </section>
    )
}

export default About