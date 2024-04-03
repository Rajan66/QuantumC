import React from 'react'
import realdaamLogo from '../images/icons/realdaamLogo.png'

const Trust = () => {
    return (
        <section className='p-10'>
            <div className='flex flex-col  justify-center items-center'>
                <h1 className="uppercase bg-gradient-to-br from-purple-600 to-cyan-400 bg-clip-text text-transparent text-2xl font-bold">
                    Trusted By
                </h1>
                <div className='flex gap-12'>
                    <img src={realdaamLogo} className='w-64 h-full filter grayscale hover:grayscale-0 ease-in-out' />
                    <img src={realdaamLogo} className='w-64 h-full filter grayscale hover:grayscale-0 ease-in-out' />
                    <img src={realdaamLogo} className='w-64 h-full filter grayscale hover:grayscale-0 ease-in-out' />
                </div>
            </div>
        </section>
    )
}

export default Trust