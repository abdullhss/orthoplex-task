"use client"
import Image from 'next/image'
import React, { useEffect, useReducer } from 'react'
import logo from "@/public/orthoplex logo.webp"
import Link from 'next/link'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { useAuth } from '../contexts/AuthContext'
import appReducer from '../reducers/appReducer'

const NavBar = () => {
  

  const {userFromLocalStorage , passwordFromLocalStorage,logOut ,setUserFromLocalStorage , setPasswordFromLocalStorage , isUserValid , setIsUserValid} = useAuth();
  const [user , dispatch] = useReducer(appReducer , {});
  useEffect(()=>{
    if(userFromLocalStorage && passwordFromLocalStorage){
      dispatch({type : "checkUser" , payload:{
        userFromLocalStorage , 
        passwordFromLocalStorage,
        setIsUserValid
      }})
    }

  } , [userFromLocalStorage , passwordFromLocalStorage , isUserValid])

  const handleLogOut = ()=>{
    logOut();
    window.location.href = "/"
  }
  return (
    <div className='flex justify-between items-center px-4 md:px-12 py-2 shadow-lg shadow-slate-700 bg-black'>
        <div className='w-28 md:w-50 flex items-center'>
          <Link href={"/"}>
            <Image height={50} className='object-cover' alt='orthoplex logo' src={logo}/>
          </Link>
        </div>
        

        {
          isUserValid ? (
          <div className='flex items-center gap-3 font-semibold  text-white'>
            <h3>Hello {userFromLocalStorage}</h3>
            <Button onClick={()=>{handleLogOut()}} className='bg-red-700'> log out</Button>
          </div>
        ) : (
          <div className='flex  items-center gap-3 font-semibold  text-white'>
            <Link href="/signup" className='hover:text-gray-500 hover:underline duration-300 cursor-pointer'>sign up</Link>
            <Link href={"/login"} className='hover:text-gray-500 hover:underline duration-300 cursor-pointer'>log in</Link>
          </div>
        )
      }
    </div>
  )
}

export default NavBar
