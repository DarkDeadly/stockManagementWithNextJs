import React from 'react'

const FeatureItems = ({element}) => {
    const Icon = element.icons
  return (
    <div className='shadow-2xl border-2 rounded-lg border-gray-400 bg-white p-7 cursor-pointer duration-300 hover:scale-110'>
        <div className='w-12 h-12 '>
            <Icon size={35} />
        </div>
        <h3 className='text-xl font-medium '>{element.title}</h3>
        <p className='text-lg text-gray-600'>{element.description}</p>
    </div>
  )
}

export default FeatureItems