import { featuresElements } from '@/lib/utils'
import React from 'react'
import FeatureItems from './FeatureItems'

const Features = () => {
  return (
    <div className='bg-gray-300 mb-5'>
        <div className='text-center p-10'>
            <h2 className='text-5xl font-medium font-serif pb-4'>Powerful Features</h2>
            <p className='text-xl text-gray-500 font-semibold'>Everything you need to manage your inventory efficiently</p>
        </div>
       <div className='flex justify-center'>
         <div className='w-[95%]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-9 gap-4 '>
            {
                featuresElements.map((element , index) => (
                    <FeatureItems element = {element} key={index}/>
                ))
            }
        </div>
       </div>
    </div>
  )
}

export default Features