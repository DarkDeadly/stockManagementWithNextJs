"use client"


import { SidebarProvider } from "@/components/ui/sidebar";
import { UserContext } from "@/context/UserContext";
import { useState } from "react";

export default function WorkspaceLayout({ children }) {
  const [AuthenticatedUser, setAuthenticatedUser] = useState({})
  return (
    <UserContext.Provider value={{AuthenticatedUser, setAuthenticatedUser}}>
      <SidebarProvider>{children}</SidebarProvider>
    </UserContext.Provider>
  );
}
