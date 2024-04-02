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
                        <p class="mb-3 font-normal text-gray-500 ">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                    </div>
                    <div class="max-w-sm p-6  border rounded-lg shadow bg-gray-200 border-gray-300 flex flex-col items-center justify-center">
                        <img src={app} className='w-20 mb-4' />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">App Development</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500 ">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                    </div>
                    <div class="max-w-sm p-6  border rounded-lg shadow bg-gray-200 border-gray-300 flex flex-col items-center justify-center">
                        <img src={machine} className='w-20 mb-4' />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Machine Learning</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500 ">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                    </div>
                    <div class="max-w-sm p-6  border rounded-lg shadow bg-gray-200 border-gray-300 flex flex-col items-center justify-center">
                        <img src={wordpress} className='w-20 mb-4' />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Wordpress Development</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500 ">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services