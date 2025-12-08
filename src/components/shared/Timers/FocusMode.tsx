import { Button } from "@/components/ui/button";
import { P } from "@/components/ui/typography";
import { useEffect, useState } from "react";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";

const FocusMode = () => {
  // Handle fullscreen toggle
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  const Logo = isFullscreen ? AiOutlineFullscreenExit : AiOutlineFullscreen;
  // Detect fullscreen changes
  useEffect(() => {
    const handler = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);
  return (
    <div className="group fixed right-0 bottom-0 z-10 flex h-24 items-center justify-center gap-3 pr-5">
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
  );
};

export default FocusMode;
