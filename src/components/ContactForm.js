import React from 'react'

const ContactForm = () => {
    return (
        <section className='bg-white p-10 w-full flex h-auto justify-center'>
            <div className='flex flex-col justify-center bg-gradient-to-br from-cyan-200 to-purple-200 p-8 rounded-lg shadow-md'>
                <div className='flex gap-3 justify-center'>
                    <h1 className=' text-2xl lg:text-4xl font-bold mb-8 lg:mb-8 text-gray-500'>Get In</h1>
                    <h1 className=' bg-gradient-to-br from-purple-600 to-cyan-400 bg-clip-text text-transparent  text-2xl lg:text-4xl font-bold mb-8 lg:mb-8 '>Touch</h1>
                </div>
                <form class=" px-8 ">
                    <div class="mb-6">
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Your Name" />
                    </div>
                    <div class="mb-6">
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Company Name" />
                    </div>
                    <div class="mb-6">
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email" />
                    </div>
                    <div class="mb-6">
                        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Tell Us About Your Project" />
                    </div>
                    <button class="border bg-gradient-to-br from-cyan-400 to-purple-400 border-cyan-200  text-white transition-all  text-lg hover:text-black py-4 px-6 rounded-full mx-10 flex items-center justify-center">
                        <span>Send Message</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 10a1 1 0 011-1h6.586l-2.293-2.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H6a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                </form>
            </div>

        </section >
    )
}

export default ContactForm