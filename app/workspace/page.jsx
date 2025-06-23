import React from 'react'
import Sidebarwork from './_component/Sidebar'
import {  SidebarTrigger } from '@/components/ui/sidebar'

const workspace = () => {
  return (
  <div className="flex">
      <Sidebarwork />
      <main className="flex-1 flex">
        <SidebarTrigger />
        <div>
          <h1 className='text-2xl font-bold'>Workspace Page Content</h1>
          <p className='text-gray-600 text-md pt-2'>6/22/2025</p>
        </div>
      </main>
    </div>
  )
}

export default workspace