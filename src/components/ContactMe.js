import React from 'react'

const ContactMe = () => {
    return (
        <section class="text-gray-600 body-font relative bg-white">
            <div class="flex flex-wrap container px-5 py-24 mx-auto lg:flex-nowrap md:flex-nowrap  ">
                <div class="lg:w-2/3 md:w-1/2 md:h-auto lg:h-auto md:mr-10 bg-gray-300 rounded-lg shadow-md overflow-hidden w-full h-screen p-10 lg:flex md:flex items-end justify-start relative">
                    <iframe width="100%" height="100%" className="absolute inset-0 grayscale-50 " frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.277768660635!2d85.284933209783!3d27.709030241502457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1712402318565!5m2!1sen!2snp" loading="lazy"></iframe>
                    <div class="bg-white relative md:flex md:flex-wrap lg:flex lg:flex-wrap py-6 rounded shadow-md hidden">
                        <div class=" lg:w-1/2 px-6">
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p class="mt-1">Kathmandu, Nepal</p>
                        </div>
                        <div class=" lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a class="text-blue-500 leading-relaxed">sales@quantumc.tech</a>
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p class="leading-relaxed">+977 9812345678</p>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/3 md:w-1/2 bg-gradient-to-br from-cyan-200 to-purple-200 p-8 rounded-lg shadow-md flex flex-col md:ml-auto w-full md:py-8 lg:px-10 mt-8 md:mt-0">
                    <div className='flex gap-3 justify-center mb-2 '>
                        <h1 className=' text-2xl  lg:text-4xl font-bold  text-gray-500'>Get In</h1>
                        <h1 className=' bg-gradient-to-br from-purple-600 to-cyan-400 bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl font-bold  '>Touch</h1>
                    </div>
                    <p class="leading-relaxed mb-6 text-gray-600">Send us a message below and we'll get back to you</p>
                    <div class="relative mb-6">
                        <input class="w-full bg-white rounded border border-gray-300 focus:border-blue-100 focus:ring-2 focus:ring-sky-100 text-base outline-none text-gray-700 py-4 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out" type="text" placeholder="Your Name" />
                    </div>
                    <div class="relative mb-6">
                        <input class="w-full bg-white rounded border border-gray-300 focus:border-blue-100 focus:ring-2 focus:ring-sky-100 text-base outline-none text-gray-700 py-4 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out" type="text" placeholder="Company Name" />
                    </div>
                    <div class="relative mb-6">
                        <input class="w-full bg-white rounded border border-gray-300 focus:border-blue-100 focus:ring-2 focus:ring-sky-100  text-base outline-none text-gray-700 py-4 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out" type="text" placeholder="Email" />
                    </div>
                    <div class="relative mb-4">

                        <textarea class="w-full bg-white rounded border border-gray-300 focus:border-blue-100 focus:ring-2 focus:ring-sky-100 h-32 text-base outline-none text-gray-700 py-4 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out" type="text" placeholder="Tell Us About Your Project"></textarea>
                    </div>
                    <button class="border bg-gradient-to-br from-cyan-400 to-purple-400 border-cyan-200  text-white transition-all  text-lg hover:text-sky-100 py-4 px-6 rounded-lg mx-10 flex items-center justify-center">
                        <span>Send Message</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 10a1 1 0 011-1h6.586l-2.293-2.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H6a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ContactMe