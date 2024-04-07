import React from 'react'

import realdaamLogo from '../../images/icons/realdaamLogo.png'
import realdaam from '../../images/realdaam.png'
import quote from '../../images/icons/quote.png'

const Testomonials = () => {
    return (
        <section className='bg-white py-16'>
            <h1 className=' text-2xl lg:text-3xl font-bold mb-10 bg-gradient-to-br from-purple-600 to-cyan-400 bg-clip-text text-transparent'>Testomonials</h1>
            <div className='flex justify-center gap-16 items-center'>
                <img src={realdaam} className='w-42 h-44 rounded-br-[80px]' />
                <div className='w-1/2'>
                    <img className='w-10 h-10 ' src={quote} />
                    <p className='text-gray-700 text-lg text-start mt-16'>
                        I want to acknowledge everyone's extra effort. You did an excellent job on that report. I want to thank you publicly for your hard work and dedication. Your attitude and work level suits us here, so keep up the good work! Thank you for sharing your knowledge and experience with me.Thank you for giving me the chance to fulfill my potential here. I appreciate you supporting me at the meeting.
                    </p>
                    <div className='text-start flex items-center justify-between'>
                        <div className=''>
                            <h1 className='text-xl font-bold'>Rahul Bhagat</h1>
                            <h1 className='text-md text-gray-700'> Owner at RealDaam</h1>
                        </div>
                        <img src={realdaamLogo} className='w-44 h-auto' />
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Testomonials