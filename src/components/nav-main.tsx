"use client";

import { SidebarGroup, SidebarMenu } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";
import { Button } from "./ui/button";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: IconType;
  }[];
}) {
  const pathName = usePathname() ?? "";

  return (
    <SidebarGroup className="group/collapsible">
      <SidebarMenu>
        {items.map((item) => {
          const isActive = pathName.split("/admin/")[1] == item.url;
          return (
            <Link href={item.url as "/"} className="w-full">
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "h-11 w-full justify-start rounded-sm text-base",
                  isActive && "border-primary border-r-4",
                )}
              >
                <item.icon className="" />
                <p className="group-data-[collapsible=icon]:hidden">
                  {item.title}
                </p>
              </Button>
            </Link>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
