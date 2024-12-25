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
import axios from 'axios'
import { toast } from 'react-toastify'
import appReducer from '../reducers/appReducer'
import { motion } from 'framer-motion'


const signupSchema = z.object({
    username: z.string().min(3).max(50 , "username must be at least 2 charachter "),
    password : z.string().min(8 , {message :"Password must be at least 8 characters"}),
    confirmPassword : z.string().min(8 , {message :"Password must be at least 8 characters"}),
}).refine((data)=> data.password===data.confirmPassword , {message : "passwords dose not match" , path:["confirmPassword"]})


const page = () => {
    const [create , dispatch] = useReducer(appReducer , {});
    
    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
          username: "",
          password : "" ,
          confirmPassword :"" ,
        },
      })

      function onSubmit(values: z.infer<typeof signupSchema>) {
        dispatch({type : "create" , payload : {values}})
      }
  return (
    <div className=' flex flex-col items-center gap-6 min-h-screen mt-10 '>
        <Image alt="orthoplex logo" src={logo}/>
        <motion.div
            className='w-[90%] md:w-[40%] text-white'
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}  
            transition={{ duration: 1, ease: "easeInOut" }} >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 items-center">
                    <h2 className='text-2xl'>create new account</h2>
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
                    <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem className='w-[50%]'>
                            <FormLabel className=''>confirm password</FormLabel>
                            <FormControl>
                                <Input type='password' placeholder="confirm Password" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />
                    <Button className='shadow-md shadow-orange-700 hover:bg-white hover:text-black duration-200 px-10 py-5' type="submit">Submit</Button>
                </form>
            </Form>
        </motion.div>
    </div>
  )
}

export default page
