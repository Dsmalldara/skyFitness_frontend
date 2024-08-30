import React from 'react'
import Navitem from './Navitem'
import MobileNav from './MobileNav'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Header() {
  return (
    <div className='wrapper flex items-center justify-between'>
      <h1>Header</h1>
      <div className=' xl:mr-[7rem] hidden md:block'>
      <Navitem/>
      </div>
      <div className=' md:block hidden'>
      <Button className='mr-[2rem]'>
              <Link href="skyfitness/getstarted">Sign Up</Link>
            </Button>
      </div>
      <div className='md:hidden flex'>
        <MobileNav/>
      </div>
    </div>
  )
}

export default Header