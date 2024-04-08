import React from 'react'

import { easeInOut, motion } from 'framer-motion'


import mission from '../../images/mission.jpg'

const Mission = () => {
    return (
        <section className='mx-auto md:p-10 md:mx-16 lg:p-20 lg:mx-32'>
            <div className='flex gap-32 '>
                <motion.img whileInView={{ y: 0, opacity: 1 }} initial={{ y: 10, opacity: 0 }} transition={{ ease: easeInOut, duration: 1 }} className='w-1/2 rounded-br-[200px]' src={mission} />
                <div className='flex justify-start flex-col'>
                    <h1 className='text-black font-bold text-md mb-4 text-start uppercase '>
                        Our mission
                    </h1>
                    <div className='flex flex-col gap-3 mb-4 text-start'>
                        <h1 className='text-4xl font-bold text-black'>
                            Your success is our
                        </h1>
                        <h1 className='text-4xl font-bold bg-gradient-to-br from-purple-600 to-cyan-400 bg-clip-text text-transparent mb-4'>
                            mission
                        </h1>
                        <p className='text-xl text-gray-800 mb-2'>
                            At Quantum Compilers Technology, we are committed to delivering exceptional IT services that drive innovation, efficiency, and success for our clients.
                        </p>
                        <p className='text-md text-gray-600'>
                            We understand that every business is unique. That's why we take a personalized approach to each project, customizing our solutions to align with our clients' specific requirements and goals.
                            Client satisfaction is our top priority. We are committed to delivering exceptional service and support, ensuring that our clients receive the attention and assistance they deserve at every step of the journey.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission