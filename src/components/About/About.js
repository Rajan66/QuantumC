import React from 'react'
import team from '../../images/team.jpg'
import mission from '../../images/mission.jpg'

const About = () => {
    return (
        <section className='bg-white '>
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
                            We stand as an experienced and trustworthy technology ally, ready to help with your next venture.
                        </p>
                        <p className='text-gray-500 text-md '>Quantum, formed by a team of seasoned founders, CTOs, product designers, and engineers, has grown to a workforce of 450 strong. Over the past decade, we've been instrumental in delivering over a 100 new products. We've forged partnerships with a wide variety of innovative startups and enterprises, building solutions that needed to blend a user-friendly interface with the intricate aspects of data, cloud, and security.</p>
                        <button class="  transition-all text-black hover:text-indigo-300 text-md  py-4 mt-6 flex  items-center justify-start">
                            <span className='uppercase font-bold '>Get in touch</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 10a1 1 0 011-1h6.586l-2.293-2.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H6a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <img src={team} className='w-full lg:w-1/2 mx-auto rounded-bl-[200px] shadow-xl' />
                </div>
            </div>
        </section>
    )
}

export default About