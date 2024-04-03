import React from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <section className=''>
      <ContactForm />
      <div className=' p-10'>
        <div className='flex flex-col items-center'>
          <h1 className=" text-4xl font-bold mb-2">What will be your</h1>
          <h1 className=" text-4xl font-bold mb-8 bg-gradient-to-br from-purple-600 to-cyan-400 bg-clip-text text-transparent">next step?</h1>
        </div>
        <div class='justify-center md:gap-6 md:grid md:grid-cols-2 lg:flex lg:gap-10 lg:mx-60'>
          <div class='bg-slate-200 p-6 lg:p-10 rounded-xl w-full lg:w-1/3 mb-6 lg:mb-0'>
            <div class='flex items-center justify-start gap-2 mb-2'>
              <p class='rounded-full bg-orange-400 w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center font-bold font-serif text-white'>
                01
              </p>
              <p class='font-extrabold'>
                We'll prepare a proposal
              </p>
            </div>
            <p class='text-start'>
              Required scope, timeline and approximate price will be included if you provide us with detailed information about your project.
            </p>
          </div>
          <div class='bg-slate-200 p-6 lg:p-10 rounded-xl w-full lg:w-1/3 mb-6 lg:mb-0'>
            <div class='flex items-center justify-start gap-2 mb-2'>
              <p class='rounded-full bg-orange-400 w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center font-bold font-serif text-white'>
                01
              </p>
              <p class='font-extrabold'>
                Discussion
              </p>
            </div>
            <p class='text-start'>
              Let’s get acquainted and discuss all the possible alternatives , variants and options. through the help of social platforms.
            </p>
          </div>
          <div class='bg-slate-200 p-6 lg:p-10 rounded-xl w-full lg:w-1/3 mb-6 lg:mb-0'>
            <div class='flex items-center justify-start gap-2 mb-2'>
              <p class='rounded-full bg-orange-400 w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center font-bold font-serif text-white'>
                01
              </p>
              <p class='font-extrabold'>
                Development
              </p>
            </div>
            <p class='text-start'>
              When the contract is signed and all the goals are set, we can start the first sprint and wait for further output.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact