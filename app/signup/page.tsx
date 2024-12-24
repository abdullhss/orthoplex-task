"use client"
import React from 'react'
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

const signupSchema = z.object({
    username : z.string().email({message : "enter user name"}) ,
    password : z.string().min(8 , {message :"Password must be at least 8 characters"}),
    confirmPassword : z.string().min(8 , {message :"Password must be at least 8 characters"}),
}).refine((data)=> data.password===data.confirmPassword , {message : "passwords dose not match" , path:["confirmPassword"]})


const page = () => {
    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
          username: "",
          password : "" ,
          confirmPassword :"" ,
        },
      })
      function onSubmit(values: z.infer<typeof signupSchema>) {
        console.log(values)
      }
  return (
    <div className=' flex flex-col items-center'>
        <Image alt="orthoplex logo" src={logo}/>
        <div className='w-[90%] md:w-[30%] text-white'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 items-center">
                    <h2 className='text-2xl'>create new account</h2>
                    <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
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
                        <FormItem>
                            <FormLabel className=''>password</FormLabel>
                            <FormControl>
                                <Input placeholder="password" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className=''>confirm password</FormLabel>
                            <FormControl>
                                <Input placeholder="confirm Password" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />
                    <Button className='shadow-md shadow-slate-700 hover:bg-white hover:text-black duration-200' type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    </div>
  )
}

export default page
