"use client";

import FocusMode from "@/components/shared/Timers/FocusMode";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import { useTimer } from "../context/PromoTimerContext";
import { MainTimerWithDialog } from "./MainTimerWithDialog";

const AstaticPomodoroTimer = () => {
  const { activeTheme } = useTimer(); // get theme from context
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  // Detect fullscreen changes
  useEffect(() => {
    const handler = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const Logo = isFullscreen ? AiOutlineFullscreenExit : AiOutlineFullscreen;

  // Don't render background until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <div className="relative my-auto flex flex-1 items-center justify-center">
        <div className="text-foreground flex flex-col items-center justify-center gap-5">
          {/* <MainTimerWithDialog /> */}
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-1 items-center justify-center pb-12">
      <Image
        key={activeTheme.name}
        src={activeTheme.backgroundImage}
        height={1000}
        width={1000}
        placeholder="blur"
        alt={activeTheme.name}
        className="pointer-events-none fixed top-0 left-0 -z-10 h-screen w-screen object-cover"
      />

      <div className="text-foreground flex flex-col items-center justify-center gap-5">
        <MainTimerWithDialog />

        <FocusMode />
      </div>
    </div>
  );
};

export default AstaticPomodoroTimer;
