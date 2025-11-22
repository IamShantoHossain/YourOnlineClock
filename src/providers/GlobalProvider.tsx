"use client";
import NextTopLoader from "nextjs-toploader";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import ToasterProvider from "./ToasterProvider";

const GlobalProvider = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ToasterProvider>
        <NextTopLoader showSpinner={false} easing="ease-out" />
        {children}
      </ToasterProvider>
    </Provider>
  );
};

export default GlobalProvider;
