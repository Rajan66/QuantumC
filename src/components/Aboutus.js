import React from 'react'
import abinash from '../images/aboutus/abinash.jpg'
import atush from '../images/aboutus/atush.jpg'
import bipin from '../images/aboutus/bipin.jpg'
import sabin from '../images/aboutus/sabin.png'
import saugat from '../images/aboutus/saugat.jpg'
import sushan from '../images/aboutus/sushan.jpg'


const Aboutus = () => {
    return (
        <section className='p-10'>
            <div className='lg:mx-30'>
                <h1 className='text-2xl lg:text-4xl font-extrabold mb-10 lg:mb-14 '>Meet Our Team</h1>

                <div className=' grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                            <img className="rounded-lg h-[40vh] w-[50vh] object-cover" src={abinash} alt="" />
                        </div>
                        <div className="p-5">
                            <h1 className="mb-3 text-md lg:text-xl font-extrabold text-gray-800 ">Abinash Rana</h1>
                            <h1 className="mb-3 text-lg font-bold text-sky-500 ">Project Director</h1>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                            <img className="rounded-lg h-[40vh] w-[50vh] object-cover" src={atush} alt="" />
                        </div>
                        <div className="p-5">
                            <h1 className="mb-3 text-md lg:text-xl font-extrabold text-gray-800 ">Atush Maharjan</h1>
                            <h1 className="mb-3 text-lg font-bold text-sky-500 ">Chief Financial Officer (CFO)</h1>
                        </div>
                    </div>


                    <div className='flex flex-col justify-center items-center'>
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                            <img className="rounded-lg h-[40vh] w-[50vh] object-cover" src={bipin} alt="" />
                        </div>
                        <div class="p-5">
                            <h1 class="mb-3 text-md lg:text-xl font-extrabold  text-gray-800 ">Bipin Budhathoki</h1>
                            <h1 class="mb-3 text-lg font-bold text-sky-500 ">Chief Technology Officer (CTO)</h1>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                            <img className="rounded-lg h-[40vh] w-[50vh] object-cover" src={sabin} alt="" />
                        </div>
                        <div class="p-5">

                            <h1 class="mb-3 text-md lg:text-xl font-extrabold  text-gray-800 ">Sabin Sharma Paudel</h1>
                            <h1 class="mb-3 text-lg font-bold text-sky-500 ">Managing Director (MD)</h1>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">

                            <img className="rounded-lg h-[40vh] w-[50vh] object-cover" src={saugat} alt="" />

                        </div>
                        <div class="p-5">
                            <h1 class="mb-3 text-md lg:text-xl font-extrabold  text-gray-800 ">Saugat Bhusal</h1>
                            <h1 class="mb-3 text-lg font-bold text-sky-500 ">Sales and Marketing</h1>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                            <img className="rounded-lg h-[40vh] w-[50vh] object-cover" src={sushan} alt="" />
                        </div>
                        <div class="p-5">

                            <h1 class="mb-3 text-md lg:text-xl font-extrabold  text-gray-800 ">Sushan Maharjan</h1>
                            <h1 class="mb-3 text-lg font-bold text-sky-500 ">Lead Designer</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutus