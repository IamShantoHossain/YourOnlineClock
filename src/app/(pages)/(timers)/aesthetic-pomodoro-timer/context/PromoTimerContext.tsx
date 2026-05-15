"use client";

import { createContext, ReactNode, useContext } from "react";
import useLocalStorage from "use-local-storage";
import { aestheticPomodoroTimerThemes } from "../constants";

export type TimerOption = { title: string; time: number };
export type ThemeOption = (typeof aestheticPomodoroTimerThemes)[0];

interface TimerContextProps {
  timerOptions: TimerOption[];
  setTimerOptions: (options: TimerOption[]) => void;
  activeTimerMode: string;
  setActiveTimerMode: (mode: string) => void;
  activeTheme: ThemeOption;
  setActiveTheme: (theme: ThemeOption) => void;
}

export const DEFAULT_TIMER_OPTIONS: TimerOption[] = [
  { title: "Pomodoro", time: 25 },
  { title: "Short Break", time: 5 },
  { title: "Long Break", time: 10 },
];

const TimerContext = createContext<TimerContextProps | undefined>(undefined);

export const PromoTimerProvider = ({ children }: { children: ReactNode }) => {
  const [timerOptions, setTimerOptions] = useLocalStorage<TimerOption[]>(
    "aesthetic-timer",
    DEFAULT_TIMER_OPTIONS,
  );

  const [activeTimerMode, setActiveTimerMode] = useLocalStorage(
    "activeTimerMode",
    "Pomodoro",
  );

  // Store only the theme name
  const [activeThemeName, setActiveThemeName] = useLocalStorage(
    "aesthetic-theme-name",
    aestheticPomodoroTimerThemes[0].name,
  );

  // Map the stored name to the full theme object
  const activeTheme =
    aestheticPomodoroTimerThemes.find((t) => t.name === activeThemeName) ??
    aestheticPomodoroTimerThemes[0];

  const setActiveTheme = (theme: ThemeOption) => {
    console.log("🔄 Saving theme to localStorage:", theme.name);
    setActiveThemeName(theme.name);
  };

  return (
    <TimerContext.Provider
      value={{
        timerOptions,
        setTimerOptions,
        activeTimerMode,
        setActiveTimerMode,
        activeTheme,
        setActiveTheme,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context)
    throw new Error("useTimer must be used within PromoTimerProvider");
  return context;
};
