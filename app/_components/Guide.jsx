import { guideItems } from '@/lib/utils'
import React from 'react'
import Guideitems from './Guideitems'

const Guide = () => {
  return (
    <div>
         <div className='text-center p-10'>
            <h2 className='text-5xl font-medium font-serif pb-2'>How It Works</h2>
            <p className='text-xl text-gray-500 font-semibold'>Get started in three simple steps</p>
        </div>
        <div className='flex justify-center'>
            <div className='w-[95%]  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  my-9 gap-4 '>
                {guideItems.map((element , index) => (
                    <Guideitems element = {element} key={index} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Guide