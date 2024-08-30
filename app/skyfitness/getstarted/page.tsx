import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import { UserPlus, Mail, Lock } from 'lucide-react'

import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
function page() {
  return (
    <section className='grid md:grid-cols-2 mx-auto min-h-screen border border-black'>
         <div className='col-span-1'>
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
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" className=" border-gray-700 ring-transparent  text-gray-600" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input id="email" placeholder="Enter your email" className=" border-gray-700 pl-10  text-gray-600" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input id="password" type="password" placeholder="Create a password" className=" border-gray-700 pl-14 text-gray-600" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm  text-gray-600">I agree to the Terms and Conditions</Label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button className="w-full  text-black ">
            Sign Up
          </Button>
        </CardFooter>
      </Card>
      <p className="mt-4 text-black text-sm">
        Already have an account? <Link href="login" className="underline">Log in</Link>
      </p>
    </div>
        </div>
        <div className='grid-cols-1 md:block hidden'>
        <Image src="/Coaches.png" width={500} height={700} alt="coaches image" className='mt-[-10rem] object-fit h-full' />
        </div>
    </section>
  )
}

export default page