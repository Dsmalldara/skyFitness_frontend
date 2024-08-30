'use client'
import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Separator } from "@/components/ui/separator"
import Navitems from './Navitem';
import { usePathname, useRouter } from 'next/navigation'
function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const handleClose = () => {
    setIsOpen(false)
  }

  // using the pathname to listen to when the a new route is opened 
  React.useEffect(() => {
   handleClose()
  }, [pathname])
  return (
    <nav className=' text md:hidden '>
        <Sheet  open={isOpen} onOpenChange={setIsOpen}>
  <SheetTrigger className='align-middle mt-2' onClick={()=>{setIsOpen(true)}}>
    <span className='text-3xl'><IoMdMenu  /></span>
  </SheetTrigger>
  <SheetContent className='flex flex-col gap-6  bg-rose-600 md:hidden'>
   <div>
    <h1 className='navslide-font  text-purple-800'>
       skyFitness
    </h1>
    </div> 
    <Separator/>
    <Navitems/>
  </SheetContent>
</Sheet>
    </nav>
  )
}

export default MobileNav