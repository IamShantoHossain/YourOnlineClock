import { getCurrentUser } from "@/utils/auth.user";
import { redirect } from "next/navigation";
import React from "react";

const Layout = async ({ children }: { children?: React.ReactNode }) => {
  const { session } = await getCurrentUser();

  if (session) redirect("/admin/dashboard");

  return <>{children}</>;
};

export default Layout;
