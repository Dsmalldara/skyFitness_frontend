'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { UserPlus, Mail, Lock, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { loginValidation } from './loginSchema'
import { useLogin } from '@/app/apicalls/authApi'
import { useRouter } from 'next/navigation'
import { toast, ToastContainer } from "react-toastify"
function Login() {
  const router = useRouter()
  const [Errors, setErrors] = useState<any>(null)
  const {mutate:loginUser, isError, isPending, error} = useLogin()
   const useLoginForm = useForm({
    resolver: zodResolver(loginValidation),
   })
   const handleLogin = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const isValid = await  useLoginForm.trigger()
    const values = {
      email: useLoginForm.getValues().email,
      password: useLoginForm.getValues().password,
    }
    if(isValid){
        loginUser(values,
          {
            onSuccess: () => {
              useLoginForm.setValue('email', '')
              useLoginForm.setValue('password', '')
              router.push('/')
              toast.success(
                "logged in  successfully",
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
            onError: (error) => {
              console.error('Error:', error)
              setErrors(error)
            },
          }
        )
    }
   }
  return (
    <div>
     <ToastContainer/>
    <section className='grid md:grid-cols-2  '>
      <div className='grid col-span-1  items-center px-[3rem]'>
      <Card className="w-full max-w-md text-white border border-red-700">
              <form onSubmit={handleLogin}>
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center justify-center">
              <UserPlus className="mr-2" />
              <p className=' text-rose-700 font-helvetica-now  text-xl '> Login</p>
            </CardTitle>
            <CardDescription className="text-center text-rose-700 font-helvetica-now  text-xl mt-[1.5rem]">
              Welcome back to SkyFitness
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input id="email" placeholder="Enter your email" className=" pl-10 border-gray-700  text-gray-600" 
                {...useLoginForm.register("email")}
                value={useLoginForm.watch("email")}
                />
                {
                  useLoginForm.formState.errors.email && 
                  <p className="text-red-500 text-sm">
                  {useLoginForm?.formState.errors.email.message?.toString()}
                  </p>
                }
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input id="password" type="password" placeholder="Enter your password" className="pl-10 border-gray-700  text-gray-600" 
                {...useLoginForm.register("password")}
                value={useLoginForm.watch("password")}
                />
                {
                  useLoginForm.formState.errors.password && 
                  <p className="text-red-500 text-sm">
                  {useLoginForm?.formState.errors.password.message?.toString()}
              </p>
                }
                
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm text-rose-700">Remember me</Label>
              </div>
              <a href="#" className="text-sm text-rose-700 hover:underline">Forgot password?</a>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
          {
            isPending ?
            <Button className="w-full"> <Loader2 className="mr-2 h-4 w-4 animate-spin " /> loading... </Button>
            : 
            <Button className="w-full  text-black" type='submit'>
            Log In 
          </Button>
          }
          </CardFooter>
          {
            isError &&
            <p className="text-red-500 font-bold text-center">
              {error?.response?.data?.error}
         </p>
          }
          <p className="text-center text-sm mb-4 text-rose-700">
            Don't have an account? <a href="getstarted" className="text-rose-700 hover:underline">Sign up</a>
          </p>
              </form>
        </Card>
      </div>
      <div className=' grid-cols-1   items-center px-[3rem] md:grid hidden pt-[2rem]'>
        <Image src="/black woman_sport 1.png" width={500} height={700} alt="coaches image" className='mt-[-14rem] object-contain h-full' />
      </div>
    </section>
    </div>
  )
}


export default Login