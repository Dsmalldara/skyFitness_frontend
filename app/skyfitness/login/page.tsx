import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { UserPlus, Mail, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

function Login() {
  return (
    <section className='grid md:grid-cols-2 mx-auto min-h-screen'>
      <div className='col-span-1 flex items-center justify-center'>
      <Card className="w-full max-w-md text-white border border-red-700">
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
                <Input id="email" placeholder="Enter your email" className=" pl-10 border-gray-700  text-gray-600" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input id="password" type="password" placeholder="Enter your password" className="pl-10 border-gray-700  text-gray-600" />
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
            <Button className="w-full  text-black ">
              Log In
            </Button>
          </CardFooter>
          <p className="text-center text-sm mb-4 text-rose-700">
            Don't have an account? <a href="getstarted" className="text-rose-700 hover:underline">Sign up</a>
          </p>
        </Card>
      </div>
      <div className='grid-cols-1 flex items-center justify-center'>
        <Image src="/black woman_sport 1.png" width={500} height={700} alt="coaches image" className='mt-[-14rem] object-contain h-full' />
      </div>
    </section>
  )
}


export default Login