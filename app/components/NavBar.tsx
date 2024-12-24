import Image from 'next/image'
import React from 'react'
import logo from "@/public/orthoplex logo.webp"
import Link from 'next/link'
const NavBar = () => {
  return (
    <div className='flex justify-between items-center p-2 shadow-md shadow-slate-700 bg-black'>
        <div className=' w-50'>
            <Image height={50} className='object-cover' alt='orthoplex logo' src={logo}/>
        </div>
        <div className='flex gap-3 font-semibold  text-white'>
            <Link href="/signup" className='hover:text-gray-500 hover:underline duration-300 cursor-pointer'>sign up</Link>
            <Link href={"/login"} className='hover:text-gray-500 hover:underline duration-300 cursor-pointer'>log in</Link>
        </div>
    </div>
  )
}

export default NavBar
