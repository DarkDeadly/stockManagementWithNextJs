"use client"


import { SidebarProvider } from "@/components/ui/sidebar";
import { AnalyticsContext } from "@/context/AnalyticsContext";
import { UserContext } from "@/context/UserContext";
import { useState } from "react";

export default function WorkspaceLayout({ children }) {
  const [AuthenticatedUser, setAuthenticatedUser] = useState({})
  const [Analytics, setAnalytics] = useState([])
  return (
    <UserContext.Provider value={{AuthenticatedUser, setAuthenticatedUser}}>
    <AnalyticsContext.Provider value={{Analytics, setAnalytics}}>
      <SidebarProvider>{children}</SidebarProvider>
    </AnalyticsContext.Provider>  
    </UserContext.Provider>
  );
}
