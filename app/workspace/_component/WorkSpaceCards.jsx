import React from 'react'

const WorkSpaceCards = ({items }) => {
  return (
      <div className=' flex flex-col  shadow-xl border-2 rounded-lg border-white bg-[#F8F8F8] p-3 cursor-pointer duration-300 hover:scale-105 gap-3 text-black'>
       <div className='flex gap-2 text-black'>
         <items.icon className = {"w-7 h-7"}/>
        <h3 className='text-xl font-medium  '>{items.title}</h3>
       </div>
        <p className='text-lg text-black'>{items.text}</p>
        <p className='text-lg text-black font-bold'>{items.value}</p>
    </div>
  )
}

export default WorkSpaceCards