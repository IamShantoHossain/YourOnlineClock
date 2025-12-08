# Timer Settings Feature

## Overview

The timer header now includes fully functional settings that persist across sessions and are accessible from all timer components.

## Features Added

### 1. **Desktop Navigation** (Big Screens)

- Navigation links moved next to logo on the left
- Right side utilities:
  - **Current Time**: Live clock display
  - **Theme Switcher**: Dark/light mode toggle
  - **Settings Button**: Opens settings panel

### 2. **Settings Panel**

Accessible via the settings icon (⚙️), includes:

#### Notifications

- Toggle browser notifications on/off
- Shows desktop notifications when timers complete

#### Sound Alerts

- Toggle sound alerts on/off
- Plays notification sound when timers complete

#### Auto-start Options

- **Auto-start Breaks**: Automatically start break timer after work session
- **Auto-start Pomodoros**: Automatically start work session after break

### 3. **Mobile Menu Enhanced**

The mobile menu now includes:

- Navigation links
- Current time display
- Theme switcher
- Quick settings toggles

## Usage in Components

### Accessing Settings

```tsx
import { useTimerSettings } from "@/hooks/useTimerSettings";

function YourTimerComponent() {
  const { notifications, sound, autoStartBreaks, autoStartPomodoros } =
    useTimerSettings();

  // Use the settings in your component logic
}
```

### Using Notification Utilities

```tsx
import {
  notifyTimerComplete,
  requestNotificationPermission,
} from "@/lib/timerNotifications";
import { useTimerSettings } from "@/hooks/useTimerSettings";

function PomodoroTimer() {
  const { notifications, sound } = useTimerSettings();

  // Request permission on component mount
  useEffect(() => {
    requestNotificationPermission();
  }, []);

  const handleTimerComplete = () => {
    notifyTimerComplete(
      "Pomodoro Timer",
      "Great work! Time for a break.",
      notifications,
      sound,
    );
  };
}
```

## Available Utility Functions

### `requestNotificationPermission()`

Request browser notification permission from the user.

### `showNotification(title, options)`

Display a browser notification.

### `playNotificationSound(soundUrl?)`

Play a notification sound (default: `/audios/notification.mp3`).

### `notifyTimerComplete(timerName, message, enableNotifications, enableSound)`

Complete notification handler - shows notification and/or plays sound based on settings.

### `playTickSound()`

Play a subtle tick sound (optional, for timer ticks).

## Storage

- All settings are automatically persisted using Zustand with localStorage
- Settings persist across browser sessions
- Settings are shared across all timer components

## Dependencies Added

- `@radix-ui/react-switch` - Switch component
- `zustand` - State management

## File Structure

```
src/
├── hooks/
│   └── useTimerSettings.ts          # Settings store hook
├── lib/
│   └── timerNotifications.ts        # Notification utilities
├── components/
│   └── ui/
│       └── switch.tsx                # Switch component
└── app/
    └── (pages)/
        └── timers/
            └── components/
                └── TimersHeader.tsx  # Updated header with settings
```

## Browser Compatibility

- Notifications require user permission (requested on first use)
- Sounds may be blocked by browser autoplay policies (require user interaction)
- All features degrade gracefully if not supported
