"use client"
import React, { useReducer } from 'react'
import logo from "@/public/orthoplex logo.webp"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import axios from 'axios'
import { toast } from 'react-toastify'
import appReducer from '../reducers/appReducer'

const loginSchema = z.object({
    username: z.string().min(3).max(50 , "username must be at least 2 charachter "),
    password : z.string().min(8 , "password must be at least 8 charachter")
})

const page = () => {
    
    const [login , dispatch] = useReducer(appReducer , {});

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
          username: "",
          password : "" ,
        },
      })
      function onSubmit(values: z.infer<typeof loginSchema>) {
            dispatch({type :"login" , payload : {values}})
    }
  return (
    <div className='flex flex-col items-center gap-6'>
        <Image alt="orthoplex logo" className='mt-10' src={logo}/>
        <div className='w-[90%] md:w-[40%] text-white'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 items-center">
                    <h2 className='text-2xl'>log in to your account</h2>
                    <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem className='w-[50%]'>
                            <FormLabel className=''>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="user name" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className='w-[50%]'>
                            <FormLabel className=''>password</FormLabel>
                            <FormControl>
                                <Input type='password' placeholder="password" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />
                        <Button className='shadow-md mt-6 shadow-slate-700 hover:bg-white hover:text-black duration-200 px-10 py-5' type="submit">Submit</Button>
                        <p className='mt-6'>have not account ? | <Link href={"/signup"}>sign up NOW !</Link> </p>
                </form>
            </Form>
        </div>
    </div>
  )
}

export default page
