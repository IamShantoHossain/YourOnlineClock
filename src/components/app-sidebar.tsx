import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import assets from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";
import { BsBoxSeamFill, BsGear } from "react-icons/bs";
import { LuLayoutGrid } from "react-icons/lu";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Dashboard",
          url: "dashboard",
          icon: LuLayoutGrid,
        },
        {
          title: "Categories",
          url: "categories",
          icon: BsBoxSeamFill,
        },
        {
          title: "Settings",
          url: "settings",
          icon: BsGear,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="h-20 border-b">
        <Link
          href="/admin/dashboard"
          className="bg-secondary group flex h-full items-center justify-center rounded-md p-0 hover:opacity-80"
        >
          <Image
            src={assets.logoUrl}
            alt="Logo"
            width={612}
            height={408}
            className="h-[inherit] w-fit"
            placeholder="blur"
          />
        </Link>
      </SidebarHeader>
      <SidebarContent className="mt-3">
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      href={item.url}
                      className="h-10 pl-3"
                    >
                      <a href={item.url}>
                        <item.icon className="size-4!" /> {item.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
