"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import ToasterProvider from "./ToasterProvider";

const GlobalProvider = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <ToasterProvider>
          <NextTopLoader showSpinner={false} easing="ease-out" />
          {children}
        </ToasterProvider>
      </NextThemesProvider>
    </Provider>
  );
};

export default GlobalProvider;
