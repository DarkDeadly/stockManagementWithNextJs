import { LucideAlignStartVertical } from 'lucide-react'
import React from 'react'

const AuthAnnouncer = () => {
  return (
          <div className='bg-blue-500  w-[50%] flex items-center justify-center max-[970px]:hidden backdrop-blur-3xl'>
<div className='text-white p-10 backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-lg flex flex-col gap-5 items-center w-[85%]'>
                <div>
                    <LucideAlignStartVertical size={120}/>
                </div>
                <h1 className='text-5xl font-extrabold text-center'>Manage Your Stock</h1>
                <p className='text-xl text-center font-bold '>Take control of your inventory with powerful analytics and real-time insights</p>
            </div>
        </div>
  )
}

export default AuthAnnouncer