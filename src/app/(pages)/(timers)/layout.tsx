import Footer from "@/components/shared/Footer";
import { TimersSettingsProvider } from "@/providers/TimersSettingsProvider";
import React from "react";
import { PromoTimerProvider } from "./aesthetic-pomodoro-timer/context/PromoTimerContext";
import TimersHeader from "./components/TimersHeader";
import Background from "./stopwatch/components/Background";

const Setting = ({ children }: { children?: React.ReactNode }) => {
  return (
    <PromoTimerProvider>
      <TimersSettingsProvider>
        <div className="relative flex h-full min-h-dvh flex-col">
          <TimersHeader />
          <Background />
          {children}
        </div>
        <Footer />
      </TimersSettingsProvider>
    </PromoTimerProvider>
  );
};

export default Setting;
