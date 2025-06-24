"use client";

import React, { useContext, useEffect } from "react";
import Sidebarwork from "./_component/Sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import WorkspaceHeader from "./_component/WorkspaceHeader";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/config/db";
import { GetUser } from "@/lib/DatabasesServices/databaseApis";
import { UserContext } from "@/context/UserContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Workspace = () => {
  const router = useRouter();
  const { AuthenticatedUser, setAuthenticatedUser } = useContext(UserContext);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const AuthenticatedUsers = await GetUser(user.uid);
        setAuthenticatedUser(AuthenticatedUsers);
      } else {
        toast.error("user not authenticated ");
        router.push("/signIn");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex w-full">
      <Sidebarwork />
      <div className="bg-[#F8FAFC] h-full">
        <SidebarTrigger className={"cursor-pointer p-5"} />
      </div>

      <div className="w-full">
        <WorkspaceHeader AuthenticatedUser={AuthenticatedUser} />
      </div>
    </div>
  );
};

export default Workspace;
