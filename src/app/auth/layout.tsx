import { getCurrentUser } from "@/lib/auth.user";
import { redirect } from "next/navigation";
import React from "react";

const Layout = async ({ children }: { children?: React.ReactNode }) => {
  const { session } = await getCurrentUser();

  console.log({ session });

  if (session) redirect("/admin/dashboard");

  return children;
};

export default Layout;
