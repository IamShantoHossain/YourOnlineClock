"use client";

import { requestNotificationPermission } from "@/lib/timerNotifications";
import { useEffect, useRef } from "react";
import { useTimerSettings } from "./useTimerSettings";

/**
 * Hook for timer notifications
 * Automatically handles notification permissions and provides a simple notify function
 *
 * @example
 * ```tsx
 * function PomodoroTimer() {
 *   const { notifyComplete } = useTimerNotifications();
 *
 *   const handleComplete = () => {
 *     notifyComplete("Pomodoro", "Time for a break!");
 *   };
 * }
 * ```
 */
export const useTimerNotifications = () => {
  const { notifications } = useTimerSettings();
  const lastNotificationTime = useRef(0);

  // Request notification permission on mount
  useEffect(() => {
    requestNotificationPermission().then((granted) => {
      if (granted) {
        console.log("✅ Notification permission granted");
      } else {
        console.warn("⚠️ Notification permission denied or not supported");
      }
    });
  }, []);

  const notifyComplete = async (timerName: string, message: string) => {
    // Only send notification if enabled in settings
    if (!notifications) {
      console.log("🔕 Notifications disabled in settings");
      return;
    }

    // Prevent duplicate notifications within 1 second
    const now = Date.now();
    if (now - lastNotificationTime.current < 1000) {
      console.log("⏭️ Skipping duplicate notification");
      return;
    }
    lastNotificationTime.current = now;

    if (!("Notification" in window)) {
      console.warn("This browser does not support desktop notification");
      return;
    }

    if (Notification.permission === "granted") {
      // Permission already granted, show notification
      console.log("🔔 Sending notification:", timerName);
      const notification = new Notification(`${timerName} Complete!`, {
        body: message,
        icon: "/favicon.ico",
        badge: "/favicon.ico",
        requireInteraction: true,
      });

      // Auto-close after 10 seconds
      setTimeout(() => notification.close(), 10000);
    } else if (Notification.permission !== "denied") {
      // Request permission
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        const notification = new Notification(`${timerName} Complete!`, {
          body: message,
          icon: "/favicon.ico",
          badge: "/favicon.ico",
          requireInteraction: true,
        });

        // Auto-close after 10 seconds
        setTimeout(() => notification.close(), 10000);
      }
    } else {
      console.warn("⚠️ Notification permission denied");
    }
  };

  return {
    notifyComplete,
    notificationsEnabled: notifications,
  };
};
