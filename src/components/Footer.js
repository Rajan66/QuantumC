import React from 'react'
import logo from '../images/logo.png'
import insta from '../images/icons/instagram.png'
import linkedin from '../images/icons/linkedin.png'
import facebook from '../images/icons/facebook.png'

const Footer = () => {
  return (
    <footer className="bg-slate-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="w-full md:w-1/4 lg:w-1/4 mb-6 md:mb-0">
            <a href="/" className="flex items-center mb-8">
              <img src={logo} className="h-8 me-3" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Quantum Compilers</span>
            </a>
            <p className='w-full text-md text-start text-gray-600 mb-2'>We blend our skills for web development into a powerful, agile team. Our team of designers and project managers partner with you to build forward-thinking user experiences</p>

          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/">Home</a>
                </li>
                <li className="mb-4">
                  <a href="/about">About us</a>
                </li>
                <li className="mb-4">
                  <a href="/services">Services</a>
                </li>
                <li className="mb-4">
                  <a href="/portfolio">Portfolio</a>
                </li>
                <li className="mb-4">
                  <a href="/contact">Contact us</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Services</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#">Web Development</a>
                </li>
                <li className="mb-4">
                  <a href="#">App Development</a>
                </li>
                <li className="mb-4">
                  <a href="#">Machine Learning</a>
                </li>
                <li className="mb-4">
                  <a href="#">Wordpress Development</a>
                </li>
                <li className="mb-4">
                  <a href="#">UI/UX Design</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Get in touch</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a  href="mailto: sales@quantumc.tech">sales@quantumc.tech</a>
                </li>
                <li>
                  <a href="">Kathmandu, Nepal</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Quantum Compilers Technology. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="https://www.facebook.com/quantumc.tech/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <img src={facebook} className='w-5' />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="https://www.instagram.com/quantumc.tech/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <img src={insta} className='w-5' />
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="https://www.twitter.com/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <img src={linkedin} className='w-5' />
              <span className="sr-only">LinkedIn page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer