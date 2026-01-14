"use client";

import { persistor, store } from "@/redux/store";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ToasterProvider from "./ToasterProvider";

const GlobalProvider = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <ToasterProvider>
            <NextTopLoader showSpinner={false} easing="ease-out" />
            {children}
          </ToasterProvider>
        </NextThemesProvider>
      </PersistGate>
    </Provider>
  );
};

export default GlobalProvider;
