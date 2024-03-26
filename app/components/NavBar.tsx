'use client'; 

import Link from 'next/link';
import React from 'react'
import { GrTasks } from "react-icons/gr";


const NavBar = () => {
    const navLinks = [
        {href: '/', label: 'Home Page'},
        {href: '/organize', label: 'Filter Today'}
    ]



  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <GrTasks />
        <ul className='flex space-x-6'>
            {
                navLinks.map((link) =>
                    <li key={link.href}>
                        <Link href={link.href} className='text-zinc-500 hover:text-zinc-800 transition-colors'>
                            {link.label}
                        </Link>
                    </li>
                )
            }
        </ul>
        
    </nav>
  )
}

export default NavBar