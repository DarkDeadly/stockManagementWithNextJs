import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='my-5 flex  justify-center'>
        <div className='w-[85%] flex  p-4 justify-between gap-3 max-[850px]:flex-col-reverse '>
            <div className='flex flex-col gap-5'>
            <h2 className='text-5xl font-bold'>
                Manage Your Stock <span className='text-gray-400 font-sans '>Smarter</span>
            </h2>
            <p className='text-xl text-gray-500'>Streamline your inventory management with real-time tracking, automated alerts, and powerful analytics. Perfect for businesses of all sizes.</p>
            <Button className={"p-7 cursor-pointer"}>Start Free Trial</Button>
        </div>
        <Image 
        src={"/HeroImage.jpg"} 
        alt='HeroImage' 
        width={550} 
        height={550} 
        className='rounded-xl object-cover w-full '
        
        />
        </div>
    </div>
  )
}

export default Hero