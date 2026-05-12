"use client";

import { createContext, ReactNode, useContext } from "react";
import useLocalStorage from "use-local-storage";
import { aestheticPomodoroTimerThemes } from "../../aesthetic-pomodoro-timer/constants";

export type ThemeOption = (typeof aestheticPomodoroTimerThemes)[0];

interface StopwatchContextProps {
  activeTheme: ThemeOption;
  setActiveTheme: (theme: ThemeOption) => void;
}

const StopwatchContext = createContext<StopwatchContextProps | undefined>(
  undefined,
);

export const StopwatchProvider = ({ children }: { children: ReactNode }) => {
  // Store only the theme name
  const [activeThemeName, setActiveThemeName] = useLocalStorage(
    "stopwatch-theme-name",
    aestheticPomodoroTimerThemes[0].name,
  );

  // Map the stored name to the full theme object
  const activeTheme =
    aestheticPomodoroTimerThemes.find((t) => t.name === activeThemeName) ??
    aestheticPomodoroTimerThemes[0];

  const setActiveTheme = (theme: ThemeOption) => {
    console.log("🔄 Saving stopwatch theme to localStorage:", theme.name);
    setActiveThemeName(theme.name);
  };

  return (
    <StopwatchContext.Provider
      value={{
        activeTheme,
        setActiveTheme,
      }}
    >
      {children}
    </StopwatchContext.Provider>
  );
};

export const useStopwatchTheme = () => {
  const context = useContext(StopwatchContext);
  if (!context)
    throw new Error("useStopwatchTheme must be used within StopwatchProvider");
  return context;
};
