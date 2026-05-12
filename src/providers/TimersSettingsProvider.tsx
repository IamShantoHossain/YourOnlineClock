"use client";

import { aestheticPomodoroTimerThemes } from "@/app/(pages)/(timers)/aesthetic-pomodoro-timer/constants";
import { useTheme } from "next-themes";
import { createContext, ReactNode, useContext } from "react";
import useLocalStorage from "use-local-storage";

export type ThemeOption = (typeof aestheticPomodoroTimerThemes)[0];

interface TimersSettingsContextProps {
  // Background Theme (for aesthetic timers)
  activeBackgroundTheme: ThemeOption;
  setActiveBackgroundTheme: (theme: ThemeOption) => void;

  // Light/Dark Mode
  colorTheme: string | undefined;
  setColorTheme: (theme: string) => void;
  toggleColorTheme: () => void;

  // Stopwatch Settings
  showMilliseconds: boolean;
  setShowMilliseconds: (value: boolean) => void;

  // Timer Settings
  notifications: boolean;
  setNotifications: (value: boolean) => void;
  sound: boolean;
  setSound: (value: boolean) => void;
}

const TimersSettingsContext = createContext<
  TimersSettingsContextProps | undefined
>(undefined);

export const TimersSettingsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  // Background Theme Management
  const [activeThemeName, setActiveThemeName] = useLocalStorage(
    "timers-background-theme",
    aestheticPomodoroTimerThemes[0].name,
  );

  const activeBackgroundTheme =
    aestheticPomodoroTimerThemes.find((t) => t.name === activeThemeName) ??
    aestheticPomodoroTimerThemes[0];

  const setActiveBackgroundTheme = (theme: ThemeOption) => {
    console.log("🎨 Setting background theme:", theme.name);
    setActiveThemeName(theme.name);
  };

  // Color Theme (Light/Dark Mode) Management
  const { theme, setTheme, resolvedTheme } = useTheme();
  const colorTheme = theme || resolvedTheme;

  const toggleColorTheme = () => {
    const newTheme = colorTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  // Stopwatch Settings
  const [showMilliseconds, setShowMilliseconds] = useLocalStorage(
    "stopwatch-show-milliseconds",
    true,
  );

  // Timer Settings (Notifications & Sound)
  const [notifications, setNotifications] = useLocalStorage(
    "timer-notifications",
    true,
  );
  const [sound, setSound] = useLocalStorage("timer-sound", true);

  return (
    <TimersSettingsContext.Provider
      value={{
        // Background Theme
        activeBackgroundTheme,
        setActiveBackgroundTheme,

        // Color Theme
        colorTheme,
        setColorTheme: setTheme,
        toggleColorTheme,

        // Stopwatch
        showMilliseconds,
        setShowMilliseconds,

        // Timer
        notifications,
        setNotifications,
        sound,
        setSound,
      }}
    >
      {children}
    </TimersSettingsContext.Provider>
  );
};

export const useTimersSettings = () => {
  const context = useContext(TimersSettingsContext);
  if (!context) {
    throw new Error(
      "useTimersSettings must be used within TimersSettingsProvider",
    );
  }
  return context;
};
