"use client";
import { useTimersSettings } from "@/providers/TimersSettingsProvider";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Background = () => {
  const { activeBackgroundTheme } = useTimersSettings(); // Use unified settings context

  const pathname = usePathname();

  if (typeof window === "undefined") return null;

  if (pathname.includes("/timers/multi-timer")) {
    <Image
      key={activeBackgroundTheme.name}
      src={activeBackgroundTheme.backgroundImage}
      height={1000}
      width={1000}
      placeholder="blur"
      alt={activeBackgroundTheme.name}
      className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-screen object-cover"
    />;
  }

  if (pathname == "/") {
    return (
      <Image
        key={activeBackgroundTheme.name}
        src={activeBackgroundTheme.backgroundImage}
        height={1000}
        width={1000}
        placeholder="blur"
        alt={activeBackgroundTheme.name}
        className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-screen object-cover"
      />
    );
  }

  return (
    <div>
      <Image
        key={activeBackgroundTheme.name}
        src={activeBackgroundTheme.backgroundImage}
        height={1000}
        width={1000}
        placeholder="blur"
        alt={activeBackgroundTheme.name}
        className="pointer-events-none absolute top-0 left-0 -z-10 h-dvh w-screen object-cover"
      />
    </div>
  );
};

export default Background;
