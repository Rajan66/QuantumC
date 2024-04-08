import React from 'react'

import { easeInOut, motion } from 'framer-motion'

import web from '../../images/icons/web.png'
import machine from '../../images/icons/machine.png'
import app from '../../images/icons/app.png'
import wordpress from '../../images/icons/wordpress.png'


const Services = () => {
    return (
        <section id="services" className='bg-white p-10  lg:p-16'>
            <div className='lg:mx-16'>
                <div className='flex gap-3 justify-center'>
                    <h1 className=' text-2xl lg:text-3xl font-bold mb-8 lg:mb-8 '>What we</h1>
                    <h1 className=' bg-gradient-to-br from-purple-600 to-cyan-400 bg-clip-text text-transparent  text-2xl lg:text-3xl font-bold mb-8 lg:mb-8 '>Build</h1>
                </div>
                <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: 30, opacity: 0 }} transition={{ ease: easeInOut, duration: 1 }} className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center'>
                    <div class="max-w-sm p-6  border rounded-lg shadow bg-gray-200 border-gray-300 flex flex-col items-center justify-center">
                        <img src={web} className='w-20 mb-4' />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Web Development</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500 ">Designing personalized software solutions that resonate with your vision, enhancing productivity and sparking innovation through expert coding and meticulous attention to detail.</p>
                    </div>
                    <div class="max-w-sm p-6  border rounded-lg shadow bg-gray-200 border-gray-300 flex flex-col items-center justify-center">
                        <img src={app} className='w-20 mb-4' />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">App Development</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500 ">Crafting intuitive digital experiences with a user-centric approach, seamlessly blending aesthetics and functionality to deliver unmatched cross-platform journeys.</p>
                    </div>
                    <div class="max-w-sm p-6  border rounded-lg shadow bg-gray-200 border-gray-300 flex flex-col items-center justify-center">
                        <img src={machine} className='w-20 mb-4' />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Machine Learning</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500 ">Designing algorithms to suit your needs, unlocking data-driven insights and innovation for your business.</p>
                    </div>
                    <div class="max-w-sm p-6  border rounded-lg shadow bg-gray-200 border-gray-300 flex flex-col items-center justify-center">
                        <img src={wordpress} className='w-20 mb-4' />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Wordpress Development</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500 ">Creating distinctive WordPress solutions aligned with your vision, enhancing efficiency, and nurturing innovation.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Services