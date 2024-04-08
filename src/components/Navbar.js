import React from 'react'
import { useState } from 'react'

import { motion } from "framer-motion"

import logo from '../images/logo.png'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'About us', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Contact', href: '/contact' },
    ];
    return (
        <motion.nav className="flex items-center justify-between lg:mx-[100px] p-6 lg:px-8">
            <div className="flex lg:flex-1">
                <a href="/" className="-m-1.5 p-1.5">
                    <img className="h-14 w-auto" src={logo} alt="" />
                </a>
            </div>
            <div className="flex lg:hidden">
                <button onClick={() => setIsOpen(isOpen => !isOpen)} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div class="hidden text-md lg:flex lg:gap-x-12 font-semibold leading-6 text-gray-900 ">
                {navLinks.map((link, index) => (

                    <li key={index} className='list-none hover:text-orange-400'>
                        <a href={link.href}>{link.label}</a>
                    </li>

                ))}
            </div>
        </motion.nav>

    )
}

export default Navbar