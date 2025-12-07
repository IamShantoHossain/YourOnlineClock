"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * Stopwatch Settings Store
 *
 * Settings specific to the stopwatch component.
 * Settings are automatically persisted to localStorage.
 */

interface StopwatchSettings {
  autoLap: boolean; // Auto-record lap at intervals
  lapInterval: number; // Auto lap interval in seconds (0 = disabled)
  showMilliseconds: boolean; // Show milliseconds in display
}

interface StopwatchSettingsStore extends StopwatchSettings {
  setAutoLap: (value: boolean) => void;
  setLapInterval: (value: number) => void;
  setShowMilliseconds: (value: boolean) => void;
  resetSettings: () => void;
}

const defaultSettings: StopwatchSettings = {
  autoLap: false,
  lapInterval: 60,
  showMilliseconds: true,
};

export const useStopwatchSettings = create<StopwatchSettingsStore>()(
  persist(
    (set) => ({
      ...defaultSettings,
      setAutoLap: (value) => set({ autoLap: value }),
      setLapInterval: (value) => set({ lapInterval: value }),
      setShowMilliseconds: (value) => set({ showMilliseconds: value }),
      resetSettings: () => set(defaultSettings),
    }),
    {
      name: "stopwatch-settings",
    },
  ),
);
