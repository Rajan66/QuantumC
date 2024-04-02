import React from 'react'
import web from '../images/icons/web.png'
import machine from '../images/icons/machine.png'
import app from '../images/icons/app.png'
import wordpress from '../images/icons/wordpress.png'

const Services = () => {
    return (
        <section className='p-4 md:p-6 lg:p-12'>
            <div className='mx-20'>
                <h1 className='text-2xl lg:text-4xl font-extrabold mb-2 lg:mb-5 '>What we Build</h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 '>
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
                </div>
            </div>
        </section>
    )
}

export default Services