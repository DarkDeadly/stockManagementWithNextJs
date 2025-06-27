"use client"

import React, { useContext, useState } from "react";
import Sidebarwork from "../_component/Sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import ProfileForm from "./_component/ProfileForm";
import ProfileHeader from "./_component/ProfileHeader";
import { UserContext } from "@/context/UserContext";


const Profile = () => {
  const [ProfileFormData, setProfileFormData] = useState({})


  const { AuthenticatedUser, setAuthenticatedUser } = useContext(UserContext);
  


  const HandleChanges = (e) => {
    const {name , value} = e.target
    setProfileFormData((prevData) => ({
      ...prevData , [name] : value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(ProfileFormData)
  }
  return (
    <div className="flex w-full">
      <Sidebarwork />
      <div className="bg-[#F8FAFC] h-full">
        <SidebarTrigger className={"cursor-pointer p-5"} />
      </div>
      <div className="w-full p-5 bg-[#F8F8F8]">
        <ProfileHeader/>
        <ProfileForm 
        onChangeHandle={HandleChanges} 
        onSubmitHandle={handleSubmit}
        AuthUser = {AuthenticatedUser}
        />
      </div>
    </div>
  );
};

export default Profile;
