import React from 'react'
import logo from "@/public/orthoplex logo.webp"
import Image from 'next/image'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='min-h-[60vh] md:min-h-[80vh] flex gap-20 items-center px-8 '>
        <div className='w-[50%] hidden md:block'>
            <Image src={logo} alt='orthoplex logo' height={200}/>
        </div>
        <div className='flex flex-col gap-20'>
            <h1 className='text-white text-3xl font-bold flex flex-col gap-6'>
                Do you want to create a 
                <br/>
                <span className='text-orange-500 text-5xl'> web application?</span>
            </h1>
            <h3 className='text-white flex gap-4'> 
                <Link className='underline text-orange-500' href={"/signup"}>Create an account now ! </Link>
                    or
                <Link className='underline text-orange-500' href={"/login"}> Login </Link>
            </h3>
        </div>
    </div>
  )
}

export default Hero
