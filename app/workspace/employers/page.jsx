"use client";
import React, { useContext, useEffect, useState } from "react";
import Sidebarwork from "../_component/Sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserContext } from "@/context/UserContext";
import { AnalyticsContext } from "@/context/AnalyticsContext";
import WorkSpaceCards from "../_component/WorkSpaceCards";
import WorkspaceHeader from "../_component/WorkspaceHeader";
import { Input } from "@/components/ui/input";
import UserTable from "./_component/UserTable";
import { GetUsers } from "@/lib/DatabasesServices/userDatabase";

const Employers = () => {
  const { AuthenticatedUser, setAuthenticatedUser } = useContext(UserContext);
  const { Analytics, setAnalytics } = useContext(AnalyticsContext);
  const [Loading, setLoading] = useState(false);
  const [Users, setUsers] = useState([])
  useEffect(() => {
    const unsubscribe  = GetUsers(setUsers)
  
    return () => {
      unsubscribe ()
    }
  }, [])
  console.log("Users are : ",Users)
  return (
    <div className="flex w-full">
      {AuthenticatedUser ? (
        <Sidebarwork User={AuthenticatedUser} />
      ) : (
        <p>Loading user data...</p>
      )}
      <div className="bg-[#F8FAFC] h-full">
        <SidebarTrigger className={"cursor-pointer p-5"} />
      </div>
      <div className="w-full">
        <WorkspaceHeader AuthenticatedUser={AuthenticatedUser} />
        <div className="flex justify-center">
          <div className="w-[95%]  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  my-9 gap-4 ">
            {Array.isArray(Analytics) &&
              Analytics.map((item, index) => (
                <WorkSpaceCards items={item} key={index} />
              ))}
          </div>
        </div>
        <div className="flex justify-center flex-col w-[95%] bg-[#F8F8F8] m-auto rounded-xl my-5 ">
          <div className=" flex justify-between  p-5  items-center">
            <h1 className="text-xl font-bold max-[692px]:hidden">
              Employers Overview
            </h1>
            <Input placeholder="Search Users ..." className={"px-7 w-[40%]"} />
          </div>
          <div>
            {
            Array.isArray(Users) && <UserTable items = {Users} />
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employers;
