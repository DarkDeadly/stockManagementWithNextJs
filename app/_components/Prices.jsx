import { priceItems } from '@/lib/utils'
import React from 'react'
import PriceItems from './PriceItems'

const Prices = () => {
  return (
    <div className='bg-gray-300'>
        <div className='text-center p-10' data-aos="fade-right">
            <h2 className='text-5xl font-medium font-serif pb-2'>Simple Pricing</h2>
            <p className='text-xl text-gray-500 font-semibold'>Choose the plan that fits your business needs</p>
        </div>
        <div className='flex justify-center' data-aos="flip-right">
            <div className='w-[95%]  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  my-9 gap-4 '>
                {priceItems.map((element , index) => (
                    <PriceItems element = {element} key={index} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Prices