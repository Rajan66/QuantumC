import React from 'react'

import { easeInOut, motion } from 'framer-motion'

import abinash from '../../images/aboutus/abinash.jpg'
import atush from '../../images/aboutus/atush.jpg'
import bipin from '../../images/aboutus/bipin.jpg'
import sabin from '../../images/aboutus/sabin.png'
import saugat from '../../images/aboutus/saugat.jpg'
import sushan from '../../images/aboutus/sushan.jpg'

const Team = () => {
    return (
        <section className='bg-white '>
            <div className='mx-auto md:p-10 md:mx-16 lg:p-20 lg:mx-32'>
                <div className='text-start mb-16'>
                    <h1 className='text-gray-800 text-md font-bold mb-4'>
                        MEET THE DREAM TEAM

                    </h1>
                    <h1 className='text-3xl font-semibold'>
                        <span className='bg-gradient-to-br from-purple-600 to-cyan-400 bg-clip-text text-transparent'>Ambitious and dynamic  individuals, </span>
                        shaping the future  <br class="break-all" />  on a global scale
                    </h1>
                </div>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='flex flex-col justify-center items-center'>
                        <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: 10, opacity: 0 }} transition={{ ease: easeInOut, duration: 1 }} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                            <img className="rounded-lg h-[40vh] w-[50vh] object-cover" src={abinash} alt="" />
                        </motion.div>
                        <div className="p-5">
                            <h1 className="mb-3 text-md lg:text-xl font-extrabold text-gray-800 ">Abinash Rana</h1>
                            <h1 className="mb-3 text-lg font-bold text-indigo-400 ">Project Director</h1>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: 10, opacity: 0 }} transition={{ ease: easeInOut, duration: 1 }} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                            <img className="rounded-lg h-[40vh] w-[50vh] object-cover" src={atush} alt="" />
                        </motion.div>
                        <div className="p-5">
                            <h1 className="mb-3 text-md lg:text-xl font-extrabold text-gray-800 ">Atush Maharjan</h1>
                            <h1 className="mb-3 text-lg font-bold text-indigo-400 ">Chief Financial Officer (CFO)</h1>
                        </div>
                    </div>


                    <div className='flex flex-col justify-center items-center'>
                        <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: 10, opacity: 0 }} transition={{ ease: easeInOut, duration: 1 }} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                            <img className="rounded-lg h-[40vh] w-[50vh] object-cover" src={bipin} alt="" />
                        </motion.div>
                        <div class="p-5">
                            <h1 class="mb-3 text-md lg:text-xl font-extrabold  text-gray-800 ">Bipin Budhathoki</h1>
                            <h1 class="mb-3 text-lg font-bold text-indigo-400">Chief Technology Officer (CTO)</h1>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: 10, opacity: 0 }} transition={{ ease: easeInOut, duration: 1 }} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                            <img className="rounded-lg h-[40vh] w-[50vh] object-cover" src={sabin} alt="" />
                        </motion.div>
                        <div class="p-5">

                            <h1 class="mb-3 text-md lg:text-xl font-extrabold  text-gray-800 ">Sabin Sharma Paudel</h1>
                            <h1 class="mb-3 text-lg font-bold text-indigo-400 ">Managing Director (MD)</h1>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: 10, opacity: 0 }} transition={{ ease: easeInOut, duration: 1 }} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">

                            <img className="rounded-lg h-[40vh] w-[50vh] object-cover" src={saugat} alt="" />

                        </motion.div>
                        <div class="p-5">
                            <h1 class="mb-3 text-md lg:text-xl font-extrabold  text-gray-800 ">Saugat Bhusal</h1>
                            <h1 class="mb-3 text-lg font-bold text-indigo-400">Sales and Marketing</h1>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: 10, opacity: 0 }} transition={{ ease: easeInOut, duration: 1 }} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                            <img className="rounded-lg h-[40vh] w-[50vh] object-cover" src={sushan} alt="" />
                        </motion.div>
                        <div class="p-5">

                            <h1 class="mb-3 text-md lg:text-xl font-extrabold  text-gray-800 ">Sushan Maharjan</h1>
                            <h1 class="mb-3 text-lg font-bold text-indigo-400">Lead Designer</h1>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Team