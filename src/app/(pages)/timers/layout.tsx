import Footer from "@/components/shared/Footer";
import { TimersSettingsProvider } from "@/providers/TimersSettingsProvider";
import React from "react";
import TimersHeader from "./components/TimersHeader";

const Setting = ({ children }: { children?: React.ReactNode }) => {
  return (
    <TimersSettingsProvider>
      <div className="relative flex h-full min-h-dvh flex-col">
        <TimersHeader />
        {children}
        <Footer />
      </div>
    </TimersSettingsProvider>
  );
};

export default Setting;
