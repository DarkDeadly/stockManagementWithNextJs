"use client"

import React, { useContext, useState } from "react";
import Sidebarwork from "../_component/Sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import ProfileForm from "./_component/ProfileForm";
import ProfileHeader from "./_component/ProfileHeader";
import { UserContext } from "@/context/UserContext";
import { validateEmail } from "@/lib/utils";
import { UpdateUser } from "@/lib/DatabasesServices/userDatabase";
import { auth } from "@/lib/config/db";
import toast from "react-hot-toast";


const Profile = () => {
  const [ProfileFormData, setProfileFormData] = useState({})


  const { AuthenticatedUser, setAuthenticatedUser } = useContext(UserContext);
  const [Loading, setLoading] = useState(false)
  const user = auth.currentUser

  const HandleChanges = (e) => {
    const {name , value} = e.target
    setProfileFormData((prevData) => ({
      ...prevData , [name] : value
    }))
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
    const profileUserEmail = ProfileFormData.profileEmail || AuthenticatedUser.email
    const ValidateEmail = validateEmail(profileUserEmail)
    const profileUserName = ProfileFormData.profileUsername || AuthenticatedUser.username
    if (ValidateEmail) {
      setLoading(true)
      await UpdateUser(user.uid , profileUserName , profileUserEmail)
      console.log({
        "id" :user.uid , 
        "username" :profileUserName , 
        "email" : profileUserEmail
      })
      toast.success("User Updated Successfuly")
      setLoading(false)
    }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
    
  }
  return (
    <div className="flex w-full">
      <Sidebarwork User = {AuthenticatedUser}/>
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
