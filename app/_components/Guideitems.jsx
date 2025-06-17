import React from 'react'

const Guideitems = ({element}) => {
  return (
    <div className='flex flex-col items-center shadow-xl border-2 rounded-lg border-gray-400 bg-white p-7 cursor-pointer duration-300 hover:scale-105 gap-3'>
        <p className='flex items-center w-12 h-12 justify-center text-lg text-center bg-black text-white   rounded-full  '>{element.id}</p>
        <h3 className='text-xl font-medium '>{element.title}</h3>
        <p className='text-lg text-gray-600'>{element.description}</p>
    </div>
  )
}

export default Guideitems