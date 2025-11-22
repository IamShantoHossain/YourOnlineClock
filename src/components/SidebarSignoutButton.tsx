"use client";

import { deleteCookie } from "@/lib/cookie";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function SidebarSignoutButton() {
  const router = useRouter();

  const signOut = async () => {
    await deleteCookie("accessToken");
    await deleteCookie("refreshToken");

    router.push("/auth/login");
  };

  return (
    <Button
      variant={"outline"}
      className="text-destructive border-destructive/40! hover:text-destructive border-2 hover:opacity-95"
      onClick={() => {
        signOut();
      }}
    >
      <ArrowLeft className="size-4" />
      Logout
    </Button>
  );
}
