import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import assets from "@/lib/assets";
import { AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import Link from "next/link";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { LuLayoutGrid } from "react-icons/lu";
import SidebarSignoutButton from "./SidebarSignoutButton";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card } from "./ui/card";
import { Muted, P } from "./ui/typography";

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
          title: "Blogs",
          url: "blogs",
          icon: BsReverseLayoutTextWindowReverse,
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
                      <Link href={`/admin/${item.url}`}>
                        <item.icon className="size-4!" /> {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarSignoutButton />
        <Card className="bg-card/10 border-border/40 flex flex-row items-center gap-2 border-2 p-2">
          <Avatar className="size-10">
            <AvatarImage
              src={assets.logoUrl as unknown as string}
              height={800}
              width={800}
              alt="Logo"
            />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0">
            <P>Robin</P>
            <Muted>Admin</Muted>
          </div>
        </Card>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
