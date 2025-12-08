"use client";

import { useTimersSettings } from "@/providers/TimersSettingsProvider";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MultiTimerContent } from "./MultiTimerContent";

const MultiTimerContainer = () => {
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
    <div className="relative w-full flex-1">
      <Image
        key={activeBackgroundTheme.name}
        src={activeBackgroundTheme.backgroundImage}
        height={1000}
        width={1000}
        placeholder="blur"
        alt={activeBackgroundTheme.name}
        className="pointer-events-none fixed top-0 left-0 -z-10 h-screen w-screen object-cover"
      />

      <div className="relative">
        <MultiTimerContent />
      </div>
    </div>
  );
};

export default MultiTimerContainer;
