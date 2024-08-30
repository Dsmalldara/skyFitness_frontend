import React from 'react'
import Image from 'next/image'
function CelebrateAchievement() {
  return (
    <div >
    <div className='w-[95%] mt-[4rem] mx-auto '>
        <Image src='/background.jpg' width={1200} height={1700}  alt="different sizes of weights" className='h-[100vh] object-cover '/>
   
    
    </div>
    <div className='w-[90%] md:w-[60%] mx-auto mt-[5rem]'>
    <h1 className='title2 text-4xl font-bold text-start'>Celebrate Your Achievements</h1>
    <p className='text-start w-[90%] md:w-[60%] text-gray-800 font-helvetica-now font-thin leading-8 mt-6 '>
        SkyFitness is a comprehensive body fitness platform that offers a wide range of workout routines, nutrition advice, and personalized guidance. With our expert instructors and community support, you'll find the perfect balance of strength, flexibility, and endurance.
    </p>
    </div>
   
    </div>
  )
}

export default CelebrateAchievement