"use client";
import NextTopLoader from "nextjs-toploader";
import React from "react";
import ToasterProvider from "./ToasterProvider";

const GlobalProvider = ({ children }: { children?: React.ReactNode }) => {
  return (
    <ToasterProvider>
      <NextTopLoader showSpinner={false} easing="ease-out" />
      {children}
    </ToasterProvider>
  );
};

export default GlobalProvider;
