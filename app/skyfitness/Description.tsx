import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Gallery from './Gallery'
import Gallery2 from './profile/Gallery2'
import ImageAndText from './utils'
function Description() {
  return (
    <div className='container mt-[4rem]'>
         <div >
        <img  src="/pushups.jpg" alt="doing pushups" className='   md:w-[90%] object-cover mx-auto h-[600px] md:scale-110' />
       <div className='w-[90%] md:w-[60%] mx-auto mt-[5rem]'>
            <h1 className='title2 text-4xl font-bold text-start mr-auto'>
                Come train With Us
            </h1>
            <p className='text-start w-[90%] md:w-[60%] mr-auto font-helvetica-now font-thin leading-8 mt-6 text-sm text-gray-800'>
            The Nike Training Club App helps you reach your fitness goals with expertly designed workouts from our world-class Nike Master Trainers.
             NTC is perfect for training at home,
             in the gym or on the road, with everything from bodyweight-only to full-equipment workouts for everyone at all fitness levels.
            </p>
            <div className='flex justify-start items-center w-[70%] md:w-[60%] mt-[2rem] gap-[3rem]'>
                <Button className='rounded-full px-2 py-1'>
                    Get Started
                </Button> 
                <Button className='rounded-full px-2 py-1'>
                Login    
                 </Button>   
            </div>
            </div>
       </div>
       <div className='w-[90%] md:w-[60%] mx-auto mt-[6rem]'>
      <img src='/nike-training-club.jpg' alt='Training Club'  className=' justify-start w-[600px] h-[800px] object-cover'/>
       </div>
        <div className='mt-6 items-center  flex flex-col md:w-[60%]  mx-auto'>
            <h1 className='title2 text-4xl font-bold text-start mr-auto '>SkyFitness Training Club</h1>
            <p className='text-start w-[90%] md:w-[60%] mr-auto font-helvetica-now font-thin leading-8 mt-6 text-sm text-gray-800'>
            Workout Collections offer a set of recommended workouts and guidance from our Nike Master Trainers. 
            They are a great way to discover new workouts, try community favourites or simply 
            find the right workout for you and your daily routine. Here's a few of our favourites.    
             </p>       
        </div>
      <Gallery ImageAndText={ImageAndText}/>
      {/* <Gallery2 ImageAndText={ImageAndText}/> */}
    </div>
  )
}

export default Description