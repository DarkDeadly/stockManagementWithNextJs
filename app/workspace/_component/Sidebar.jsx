"use client"

import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { SidebarItems } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/config/db";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Loader2Icon } from "lucide-react";

const Sidebarwork = () => {
  const [Loading, setLoading] = useState(false)
  const router = useRouter()
  const HandleSignOut = async() => {
    try {
      setLoading(true)
      await signOut(auth)
   
      toast.success("signOut Successfully")
      router.push("/")
    setLoading(false)
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div>
      <Sidebar className={"h-dvh"}>
        <div className="flex flex-col gap-10">
          <SidebarHeader className={"py-7"}>
            <div className="flex gap-3">
              <Image src={"/logo.svg"} alt="Logo" height={40} width={40} />
              <h1 className="font-bold text-2xl">StockMaster</h1>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarMenu>
              {SidebarItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild className="flex gap-2 items-center pl-7">
                    <Link href={item.url} className="flex gap-2 py-7 items-center text-xl font-light font-serif">
                      <item.icon className="w-5 h-5" />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter >
            <Button className={"p-5 cursor-pointer bg-red-600 hover:bg-red-500"} onClick= {HandleSignOut}>{Loading&&<Loader2Icon className="animate-spin"/> }Logout</Button>
          </SidebarFooter>
        </div>
      </Sidebar>
    </div>
  );
};

export default Sidebarwork;
