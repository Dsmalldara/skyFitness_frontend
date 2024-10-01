'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { UserPlus, Mail, Lock, Loader2 } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Link from 'next/link'
import { useRegister } from '@/app/apicalls/authApi'
import { LoginValidation } from './LoginValidationSchema'
import { toast, ToastContainer } from "react-toastify"
import {useRouter}  from 'next/navigation'
function page() {

  
  const [Errors, setErrors] = useState<any>(null)
  const router = useRouter()
  const createRegisterForm = useForm({
    resolver: zodResolver(LoginValidation),
    // defaultValues: { rememberMe: false, firstName: '', },
  })
  const {mutate:RegisterUser,isError,isSuccess,isPending,error} = useRegister()

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const isValid = await createRegisterForm.trigger()
    const values = {
      firstName: createRegisterForm.getValues().firstName,
      lastName:createRegisterForm.getValues().lastName,
      email: createRegisterForm.getValues().email,
      password: createRegisterForm.getValues().password,
    }
    console.log(values)
    if(isValid){
      RegisterUser(
        values,
        {
          onError: (err)=>{
            createRegisterForm.reset()
            console.log('Error in form submission', err)
            setErrors(err)
            console.log()
          },
          onSuccess: (data)=>{
            console.log('Success in form submission', data)
            createRegisterForm.reset()
            router.push('/')
            toast.success(
              "Registration successfull",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            )
          },
        }
      )
    }
    console.log(error)
  }
  return (
    <div className='h-full'>
        <ToastContainer />
         <section className='grid md:grid-cols-2 mx-auto min-h-screen border border-black'>
         <div className='col-span-1'>
         <form onSubmit={handleSubmit}>
    <div className=" bg-white flex flex-col justify-center items-center p-4">
     <Card className="w-full max-w-md text-white border border-red-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center justify-center">
            <UserPlus className="mr-2   text-rose-700 font-helvetica-now  text-xl" />
           <p className=' text-rose-700 font-helvetica-now  text-xl '> Create Account</p>
          </CardTitle>
          {/* <CardDescription className="text-center text-rose-700 font-helvetica-now  text-xl mt-[1.5rem]">
            Join SkyFitness and start your fitness journey today
          </CardDescription> */}
        </CardHeader>
        <CardContent className="space-y-4">
        <div className="space-y-2">
              <Label htmlFor="email">First Name</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input id="firstName" placeholder="Enter your First name" className=" pl-10 border-gray-700  text-gray-600" 
                {...createRegisterForm.register("firstName")}
                value={createRegisterForm.watch("firstName")}
                />
                  {
                createRegisterForm.formState.errors.firstName &&
                <p className="text-red-500 text-sm">
                {createRegisterForm?.formState.errors.firstName.message?.toString()}
            </p>
              }
              </div>
          </div>
              <div className="space-y-2">
              <Label htmlFor="email">Last  Name</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input id="lastName" placeholder="Enter your Last  name" className=" pl-10 border-gray-700  text-gray-600" 
                {...createRegisterForm.register("lastName")}
                value={createRegisterForm.watch("lastName")}
                />
                  {
                createRegisterForm.formState.errors.lastName &&
                <p className="text-red-500 text-sm">
                {createRegisterForm?.formState.errors.lastName.message?.toString()}
            </p>
              }
              </div>
            </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input id="email" placeholder="Enter your email" className=" border-gray-700 pl-10  text-gray-600" 
              {...createRegisterForm.register("email")}
              value={createRegisterForm.watch("email")}
              />
                {
                createRegisterForm.formState.errors.email &&
                <p className="text-red-500 text-sm">
                {createRegisterForm?.formState.errors.email.message?.toString()}
            </p>
              }
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input id="password" type="password" placeholder="Create a password" className=" border-gray-700 pl-14 text-gray-600" 
              {...createRegisterForm.register("password")}
              value={createRegisterForm.watch("password")}
              />
              {
                createRegisterForm.formState.errors.password &&
                <p className="text-red-500 text-sm">
                {createRegisterForm?.formState.errors.password.message?.toString()}
            </p>
              }
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm  text-gray-600">I agree to the Terms and Conditions</Label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          {
            isPending ?
            <Button className="w-full"> <Loader2 className="mr-2 h-4 w-4 animate-spin " /> creating... </Button>
            : 
            <Button className="w-full  text-black" type='submit'>
            Sign Up
          </Button>
          }
        </CardFooter>
       <div>
         {
            isError &&
            <p className="text-red-500 font-bold text-center">
              {error.response.data.msg}
         </p>
          }
       </div>
      </Card>
      <p className="mt-4 text-black text-sm">
        Already have an account? <Link href="login" className="underline">Log in</Link>
      </p>
    </div>
     </form>
        </div>
        <div className='grid-cols-1 md:block hidden'>
        <Image src="/Coaches.png" width={500} height={700} alt="coaches image" className='mt-[-10rem] object-fit h-full' />
        </div>
    </section>
    </div>
  )
}

export default page