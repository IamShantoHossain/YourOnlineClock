"use client";

import FocusMode from "@/components/shared/Timers/FocusMode";
import { useTimersSettings } from "@/providers/TimersSettingsProvider";
import { useEffect, useState } from "react";
import { Stopwatch } from "./Stopwatch";

const StopwatchContainer = () => {
  const { activeBackgroundTheme } = useTimersSettings();

  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render background until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <div className="relative my-auto flex flex-1 items-center justify-center">
        <div className="text-foreground flex flex-col items-center justify-center gap-5">
          {/* Loading state */}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="text-foreground flex flex-col items-center justify-center gap-5">
        <Stopwatch />
        <FocusMode />
      </div>
    </div>
  );
};

export default StopwatchContainer;
