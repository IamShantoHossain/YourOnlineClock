/**
 * Timer notification utilities
 * Handles sound alerts and browser notifications for timers
 */

// Request notification permission
export const requestNotificationPermission = async (): Promise<boolean> => {
  if (!("Notification" in window)) {
    console.warn("This browser does not support notifications");
    return false;
  }

  if (Notification.permission === "granted") {
    return true;
  }

  if (Notification.permission !== "denied") {
    const permission = await Notification.requestPermission();
    return permission === "granted";
  }

  return false;
};

// Show browser notification
export const showNotification = (
  title: string,
  options?: NotificationOptions,
): void => {
  if (typeof window === "undefined" || !("Notification" in window)) {
    console.warn("Notifications not supported in this environment");
    return;
  }

  if (Notification.permission === "granted") {
    try {
      const notification = new Notification(title, {
        icon: "/favicon.ico",
        badge: "/favicon.ico",
        ...options,
      });
      console.log("✅ Notification sent:", title);

      // Auto-close notification after 5 seconds
      setTimeout(() => notification.close(), 5000);
    } catch (error) {
      console.error("Failed to show notification:", error);
    }
  } else {
    console.warn(
      "Notification permission not granted. Current status:",
      Notification.permission,
    );
  }
};

// Notify on timer completion
export const notifyTimerComplete = (
  timerName: string,
  message: string,
  enableNotifications: boolean,
  enableSound: boolean,
): void => {
  if (enableNotifications) {
    showNotification(`${timerName} Complete!`, {
      body: message,
      tag: "timer-notification",
      requireInteraction: true,
    });
  }
};

// Timer tick sound (optional, subtle)
export const playTickSound = (): void => {
  try {
    const audio = new Audio("/audios/tick.mp3");
    audio.volume = 0.1;
    audio.play().catch(() => {
      // Silently fail - tick sounds are optional
    });
  } catch {
    // Silently fail
  }
};
