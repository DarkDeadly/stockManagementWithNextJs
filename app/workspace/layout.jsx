import { SidebarProvider } from "@/components/ui/sidebar";

export default function WorkspaceLayout({ children }) {
  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  );
}