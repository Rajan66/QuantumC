import React from 'react'
import introimg from '../images/intro.jpg'

const Intro = () => {
  return (
    <section id="intro" className='bg-white lg:p-10'>
      <div className='flex flex-col lg:flex-row justify-center lg:p-5 lg:gap-20 lg:mx-52'>
        <div className=''>
          <img src={introimg} className=' w-screen  lg:h-full lg:mb-5 ' />
        </div>
        <div className='flex flex-col justify-start items-start p-6'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 lg:mb-5 '>Learn more about</h1>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 lg:mb-5 bg-gradient-to-br from-purple-600 to-cyan-400 bg-clip-text text-transparent'>QUANTUM COMPILERS</h1>
          <p className='text-start text-gray-600 mt-4'>We're all about getting to know what makes your business tick. We believe in digging deep to uncover what makes you special to your customers. Our mission? To help you shine even brighter in your industry. We take the time to really understand your vibe, your values, and what sets you apart. Armed with this knowledge, we get to work crafting custom solutions that speak directly to your audience. Think of us as your brand's trusty sidekick, here to support you on your journey to success.</p>
          <button class="border border-black bg-black text-white transition-all hover:bg-white text-lg hover:text-black py-4 px-6 rounded-full mt-10 flex items-center justify-center">
            <span>Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 10a1 1 0 011-1h6.586l-2.293-2.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H6a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}

export default Intro