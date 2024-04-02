import React from 'react'

const Inquiry = () => {
    return (
        <section className='bg-sky-100 p-16'>
            <div className=''>
                <div className='flex flex-col'>
                    <h1 className="text-3xl font-extrabold mb-2 lg:mb-6">Looking for business opportunity?</h1>
                    <h1 className="text-xl font-extrabold text-indigo-400 mb-2 lg:mb-6">Request for a call today</h1>
                </div>
                <div className='flex mt-[10px] justify-center'>
                    <button class="border border-black bg-black text-white transition-all hover:bg-white text-lg hover:text-black py-4 px-6 rounded-full mx-10 flex items-center justify-center">
                        <span>Contact Us</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 10a1 1 0 011-1h6.586l-2.293-2.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H6a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Inquiry