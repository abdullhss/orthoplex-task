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
import Link from 'next/link'
import axios from 'axios'
import { toast } from 'react-toastify'

const loginSchema = z.object({
    username: z.string().min(3).max(50 , "username must be at least 2 charachter "),
    password : z.string().min(8 , "password must be at least 8 charachter")
})
const page = () => {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
          username: "",
          password : "" ,
        },
      })
      function onSubmit(values: z.infer<typeof loginSchema>) {
        axios.post("/api/CheckUser", {username: values.username, password: values.password }).then((res)=>{
            toast( res.data.message , {position : "top-right" , autoClose : 3000 ,hideProgressBar:false})
            console.log(res);
        }).catch((error : any)=>{
            toast( error.message , {position : "top-right" , autoClose : 3000 ,hideProgressBar:false})
            console.log(error);
        }); 
    }
  return (
    <div className=' flex flex-col items-center'>
        <Image alt="orthoplex logo" src={logo}/>
        <div className='w-[90%] md:w-[30%] text-white'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 items-center">
                    <h2 className='text-2xl'>log in to your account</h2>
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
                                <Input type='password' placeholder="password" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />
                    <Button className='shadow-md shadow-slate-700 hover:bg-white hover:text-black duration-200' type="submit">Submit</Button>
                    <p>have not account ? | <Link href={"/signup"}>sign up NOW !</Link> </p>
                </form>
            </Form>
        </div>
    </div>
  )
}

export default page
