import React from 'react'
import Sidebarwork from '../_component/Sidebar'
import { SidebarTrigger } from '@/components/ui/sidebar'

const Profile = () => {
  return (
    <div className="flex w-full">
        <Sidebarwork />
              <div className="bg-[#F8FAFC] h-full">
                <SidebarTrigger className={"cursor-pointer p-5"} />
              </div>
               <div className="w-full">
                <p>Profile</p>
               </div>
    </div>
  )
}

export default Profile