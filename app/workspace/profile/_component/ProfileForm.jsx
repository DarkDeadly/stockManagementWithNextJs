"use client"

import React, { useState } from 'react'
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const ProfileForm = ({onChangeHandle , onSubmitHandle  , AuthUser}) => {
    const [editUsernameToggle, seteditUsernameToggle] = useState(true)
    const [editPasswordToggle, seteditPasswordToggle] = useState(true)
    const [editEmailToggle, seteditEmailToggle] = useState(true)

  return (
           <div className="w-[95%] rounded-xl bg-white p-4">
          <div className="flex justify-center">
            {AuthUser?.profileimg && (
                <Avatar className={"w-12 h-12"}>
              <AvatarImage src={AuthUser.profileimg} />
            </Avatar>
            )}
          </div>
          <div >
           {
            AuthUser?.username && (
                 <div className="flex flex-col gap-3 py-3">
              <div className="flex justify-between">
                <Label className={"text-lg font-sans italic"}>Username :</Label>
                <p 
                className={"text-lg font-sans italic cursor-pointer"}
                onClick={() => seteditUsernameToggle(!editUsernameToggle)}
                >{editUsernameToggle? "edit" : "undo"}</p>
              </div>
              <Input placeholder={ AuthUser.username} disabled = {editUsernameToggle} className={"py-6"} name = "profileUsername" onChange = {onChangeHandle}/>
            </div>
            )
           }
          {
            AuthUser?.email && (
                 <div className="flex flex-col gap-3 py-3">
              <div className="flex justify-between">
                <Label className={"text-lg font-sans italic"}>Email :</Label>
                <p 
                className={"text-lg font-sans italic cursor-pointer"}
                onClick={() => seteditEmailToggle(!editEmailToggle)}
                >{editEmailToggle ? "edit" : "undo"}</p>
              </div>
              <Input placeholder={AuthUser.email} disabled = {editEmailToggle} className={"py-6"} name = 'profileEmail' onChange ={onChangeHandle}/>
            </div>
            )
          }
            {
                AuthUser?.email && (
                    <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <Label className={"text-lg font-sans italic"}>Current Password :</Label>
                <p 
                className={"text-lg font-sans italic cursor-pointer"} 
                onClick={() => seteditPasswordToggle(!editPasswordToggle)}
                >{editPasswordToggle ? "edit" : "undo"}</p>
              </div>
              <Input disabled= {editPasswordToggle} placeholder="Password" className={"py-6"} name = 'profilePassword' onChange= {onChangeHandle}/>
            </div>
            
                ) 
            }
            {!editPasswordToggle && (
                 <div className="flex flex-col gap-3 py-3">
                <Label className={"text-lg font-sans italic"}>New Password :</Label>
              <Input placeholder="Password" className={"py-6"} name = 'profilePassword' onChange= {onChangeHandle}/>
            </div>
            )}
                
            <div className="flex gap-2 pt-3">
              <Button className={"cursor-pointer p-5"} onClick = {onSubmitHandle}>Submit</Button>
              <Button className={"cursor-pointer bg-red-500 p-5 hover:bg-red-400"} >Delete</Button>

            </div>
          </div>
        </div>
  )
}

export default ProfileForm