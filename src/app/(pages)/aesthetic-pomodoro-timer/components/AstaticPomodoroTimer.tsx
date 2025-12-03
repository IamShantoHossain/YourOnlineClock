"use client";

import { Button } from "@/components/ui/button";
import { P } from "@/components/ui/typography";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import { useTimer } from "../context/PromoTimerContext";
import { MainTimerWithDialog } from "./MainTimerWithDialog";

const AstaticPomodoroTimer = () => {
  const { activeTheme } = useTimer(); // get theme from context
  const [isFullscreen, setIsFullscreen] = useState(false);

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

  return (
    <div className="relative z-10 my-auto flex h-dvh flex-1 items-center justify-center">
      <Image
        src={activeTheme.backgroundImage}
        unoptimized
        placeholder="blur"
        alt=""
        className="pointer-events-none fixed top-0 left-0 h-screen w-screen object-cover transition-all"
      />

      <div className="text-foreground flex h-screen flex-col items-center justify-center gap-5">
        <MainTimerWithDialog />

        <div className="group absolute right-0 bottom-0 flex items-center justify-center gap-3 p-10 pr-5 sm:h-52">
          <P className="text-foreground scale-95 text-xl font-semibold opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100">
            Go Focus mode
          </P>

          <Button
            onClick={toggleFullscreen}
            variant="ghost"
            className="h-fit w-fit scale-95 cursor-pointer p-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100 sm:opacity-0"
          >
            <Logo className="pointer-events-none size-12" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AstaticPomodoroTimer;
