"use client";

import { createContext, ReactNode, useContext } from "react";
import useLocalStorage from "use-local-storage";
import { aestheticPomodoroTimerThemes } from "../../aesthetic-pomodoro-timer/constants";

export type ThemeOption = (typeof aestheticPomodoroTimerThemes)[0];

interface MultiTimerContextProps {
  activeTheme: ThemeOption;
  setActiveTheme: (theme: ThemeOption) => void;
}

const MultiTimerContext = createContext<MultiTimerContextProps | undefined>(
  undefined,
);

export const MultiTimerProvider = ({ children }: { children: ReactNode }) => {
  // Store only the theme name
  const [activeThemeName, setActiveThemeName] = useLocalStorage(
    "multi-timer-theme-name",
    aestheticPomodoroTimerThemes[0].name,
  );

  // Map the stored name to the full theme object
  const activeTheme =
    aestheticPomodoroTimerThemes.find((t) => t.name === activeThemeName) ??
    aestheticPomodoroTimerThemes[0];

  const setActiveTheme = (theme: ThemeOption) => {
    console.log("🔄 Saving multi-timer theme to localStorage:", theme.name);
    setActiveThemeName(theme.name);
  };

  return (
    <MultiTimerContext.Provider
      value={{
        activeTheme,
        setActiveTheme,
      }}
    >
      {children}
    </MultiTimerContext.Provider>
  );
};

export const useMultiTimer = () => {
  const context = useContext(MultiTimerContext);
  if (!context)
    throw new Error("useMultiTimer must be used within MultiTimerProvider");
  return context;
};
