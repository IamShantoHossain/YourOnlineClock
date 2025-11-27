"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import React from "react";
import ToasterProvider from "./ToasterProvider";

const GlobalProvider = ({ children }: { children?: React.ReactNode }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <ToasterProvider>
        <NextTopLoader showSpinner={false} easing="ease-out" />
        {children}
      </ToasterProvider>
    </NextThemesProvider>
  );
};

export default GlobalProvider;
