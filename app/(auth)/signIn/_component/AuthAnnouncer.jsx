import { LucideAlignStartVertical } from 'lucide-react'
import React from 'react'

const AuthAnnouncer = () => {
  return (
          <div className='bg-blue-700  w-[50%] flex items-center justify-center max-[970px]:hidden'>
            <div className='text-white flex flex-col  gap-5 items-center w-[85%]'>
                <div>
                    <LucideAlignStartVertical size={120}/>
                </div>
                <h1 className='text-5xl font-extrabold text-center'>Manage Your Stock</h1>
                <p className='text-xl text-center font-bold text-center'>Take control of your inventory with powerful analytics and real-time insights</p>
            </div>
        </div>
  )
}

export default AuthAnnouncer