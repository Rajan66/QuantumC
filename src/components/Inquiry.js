import React from 'react'
import { Link } from 'react-router-dom'

const Inquiry = () => {
    return (
        <section className='bg-sky-100 p-16'>
            <div className=''>
                <div className='flex flex-col items-center'>
                    <h1 className="uppercase text-4xl font-bold mb-2 lg:mb-6  text-indigo-400">Flexible solutions</h1>
                    <h1 className="uppercase text-4xl mb-2 lg:mb-6">To Meet Your Growing Needs</h1>
                    <p className='text-lg lg:text-2xl w-full lg:w-1/2 text-gray-600 mb-2 lg:mb-6'>We can tailor our solutions to your business and clients. Our team can walk
                        you through product case studies that you can relate to.</p>
                </div>
                <div className='flex mt-[10px] justify-center'>
                    <Link to='/contact' class="border bg-gradient-to-br from-cyan-400 to-purple-400 border-cyan-200  text-white transition-all text-lg hover:text-sky-100 py-4 px-6 rounded-full mx-10 flex items-center justify-center">
                        <span>Schedule a Consult</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 10a1 1 0 011-1h6.586l-2.293-2.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H6a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Inquiry