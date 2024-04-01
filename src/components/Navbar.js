import React from 'react'
import logo from '../images/logo.png'
import coverimg from '../images/hero.jpg'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between lg:mx-[400px] p-6 lg:px-8">
            <div className="flex lg:flex-1">
                <a href="/" className="-m-1.5 p-1.5">
                    <img className="h-14 w-auto" src={logo} alt="" />
                </a>
            </div>
            <div className="flex  lg:hidden">
                <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div class="hidden text-md lg:flex lg:gap-x-12">
                <a href="/" class=" font-semibold leading-6 text-gray-900">Home</a>
                <a href="/" class=" font-semibold leading-6 text-gray-900">About us</a>
                <a href="/" class=" font-semibold leading-6 text-gray-900">Services</a>
                <a href="/" class=" font-semibold leading-6 text-gray-900">Portfolio</a>
                <a href="/" class="font-semibold leading-6 text-gray-900">Contact Us</a>
            </div>

        </nav>

    )
}

export default Navbar