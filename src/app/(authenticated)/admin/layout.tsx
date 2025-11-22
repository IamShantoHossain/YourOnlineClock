import { AppSidebar } from "@/components/app-sidebar";
import Container from "@/components/global/Container";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { H4 } from "@/components/ui/typography";

import React from "react";

const Layout = async ({ children }: { children?: React.ReactNode }) => {
  return (
    <SidebarProvider className="flex w-full overflow-hidden">
      <AppSidebar />
      <SidebarInset className="flex-1 overflow-hidden">
        <header className="flex h-20 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <H4>Welcome back</H4>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4">
          <Container>{children}</Container>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
