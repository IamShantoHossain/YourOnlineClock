"use client";

import FocusMode from "@/components/shared/Timers/FocusMode";
import { useEffect, useState } from "react";
import { MainTimerWithDialog } from "./MainTimerWithDialog";

const AstaticPomodoroTimer = ({ staticTimer }: { staticTimer?: number }) => {
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Detect fullscreen changes
  useEffect(() => {
    const handler = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  // Don't render background until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <div className="relative flex flex-1 items-center justify-center">
        <div className="text-foreground flex flex-col items-center justify-center gap-5">
          {/* <MainTimerWithDialog /> */}
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full flex-1 items-center justify-center">
      <div className="text-foreground flex flex-col items-center justify-center gap-5">
        <MainTimerWithDialog staticTimer={staticTimer} />

        <FocusMode />
      </div>
    </div>
  );
};

export default AstaticPomodoroTimer;
