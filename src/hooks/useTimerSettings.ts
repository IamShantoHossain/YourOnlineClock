"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * Timer Settings Store
 *
 * Global settings for all timer components in the app.
 * Settings are automatically persisted to localStorage.
 *
 * @example
 * ```tsx
 * import { useTimerSettings } from "@/hooks/useTimerSettings";
 * import { notifyTimerComplete } from "@/lib/timerNotifications";
 *
 * function MyTimer() {
 *   const { notifications, sound } = useTimerSettings();
 *
 *   const handleTimerComplete = () => {
 *     notifyTimerComplete(
 *       "Pomodoro",
 *       "Time to take a break!",
 *       notifications,
 *       sound
 *     );
 *   };
 *
 *   return <div>...</div>;
 * }
 * ```
 */

interface TimerSettings {
  notifications: boolean;
  sound: boolean;
}

interface TimerSettingsStore extends TimerSettings {
  setNotifications: (value: boolean) => void;
  setSound: (value: boolean) => void;
  resetSettings: () => void;
}

const defaultSettings: TimerSettings = {
  notifications: true,
  sound: true,
};

export const useTimerSettings = create<TimerSettingsStore>()(
  persist(
    (set) => ({
      ...defaultSettings,
      setNotifications: (value) => set({ notifications: value }),
      setSound: (value) => set({ sound: value }),
      resetSettings: () => set(defaultSettings),
    }),
    {
      name: "timer-settings",
    },
  ),
);
