import React from 'react'

import { easeInOut, motion } from "framer-motion"

import web from '../../images/realdaam.png'
import app from '../../images/app.png'
import ml from '../../images/ml.png'
import wordpress from '../../images/wordpress.png'

const ServiceItems = () => {
    return (
        <section className='py-10'>
            <div className=' flex flex-col '>
                <div className='lg:flex  justify-center gap-10 mb-32 '>
                    <motion.img whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ ease: easeInOut, duration: 1.5 }} viewport={{ once: true }} className='rounded-xl h-auto w-full lg:w-[30%]' src={web} />
                    <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ ease: easeInOut, duration: 1.5 }} viewport={{ once: true }} className='text-start container w-1/3 '>
                        <h1 className='text-5xl font-bold lg:mt-10 text-gray-800'>Website <br className='break-all' /> Development</h1>
                        <p className='text-start text-gray-600 mt-6 text-xl'>
                            We mainly deals with the aspect of building , designing websites, which includes coding and writing markup ranges as creating plain text pages to complex web-based applications, social network applications and electronic business applications.
                        </p>
                    </motion.div>
                </div>
                <div className='lg:flex  justify-center gap-10 mb-32'>
                    <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ ease: easeInOut, duration: 1.5 }} viewport={{ once: true }} className='text-start container w-1/3 '>
                        <h1 className='text-5xl font-bold lg:mt-10 text-gray-800'>Application <br className='break-all' />Development</h1>
                        <p className='text-start text-gray-600 mt-6 text-xl'>
                            We create a mobile application or a set of programs to perform the different tasks that a business requires. From calculating monthly expenses to scheduling sales reports, applications help businesses automate processes and increase efficiency.
                        </p>
                    </motion.div>
                    <motion.img whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ ease: easeInOut, duration: 1.5 }} viewport={{ once: true }} className='rounded-xl h-auto w-full lg:w-[30%]' src={app} />

                </div>
                <div className='lg:flex  justify-center gap-10 mb-32'>
                    <motion.img whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ ease: easeInOut, duration: 1.5 }} viewport={{ once: true }} className='rounded-xl h-auto w-full lg:w-[30%]' src={ml} />
                    <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ ease: easeInOut, duration: 1.5 }} viewport={{ once: true }} className='text-start container w-1/3 '>
                        <h1 className='text-5xl font-bold lg:mt-10 text-gray-800'>Machine Learning <br className='break-all' /> Deep Learning</h1>
                        <p className='text-start text-gray-600 mt-6 text-xl'>
                            We deal with an application of AI that includes algorithms that parse data, learn from that data, and then apply what they’ve learned to make informed decisions as well as to manage data and information.
                        </p>
                    </motion.div>
                </div>
                <div className='lg:flex  justify-center gap-10 mb-32'>
                    <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ ease: easeInOut, duration: 1.5 }} viewport={{ once: true }} className='text-start container w-1/3 '>
                        <h1 className='text-5xl font-bold lg:mt-10 text-gray-800'>WordPress <br className='break-all' /> Development</h1>
                        <p className='text-start text-gray-600 mt-6 text-xl'>
                            We deal with developing and publishing software that can be installed locally on a web server and viewed on a proprietary web site or hosted in the cloud and viewed on the WordPress web site.
                        </p>
                    </motion.div>
                    <motion.img whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ ease: easeInOut, duration: 1.5 }} viewport={{ once: true }} className='rounded-xl h-auto w-full lg:w-[30%]' src={wordpress} />
                </div>
            </div>
        </section>
    )
}

export default ServiceItems