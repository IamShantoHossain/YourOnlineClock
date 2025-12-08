"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Muted } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useTimersSettings } from "@/providers/TimersSettingsProvider";
import Image from "next/image";
import { JSX, useState } from "react";
import { FaGear } from "react-icons/fa6";
// import { IoMoon, IoSunny } from "react-icons/io5"; // Kept for future use
import { aestheticPomodoroTimerThemes } from "../../aesthetic-pomodoro-timer/constants";

export const StopwatchSettingsModal = () => {
  const [activeSetting, setActiveSetting] = useState("Theme");

  const SETTINGS_LIST = [
    { title: "Theme", component: <ThemesSettings /> },
    { title: "Display", component: <DisplaySettings /> },
    // { title: "Appearance", component: <AppearanceSettings /> }, // Kept for future use
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <FaGear className="size-8 sm:size-6" />
        </Button>
      </DialogTrigger>

      <DialogContent
        showCloseButton={true}
        className="h-[80vh] w-[96vw] max-w-800! overflow-y-auto sm:w-[80vw]!"
      >
        <div className="flex flex-col md:flex-row">
          <DialogSidebar
            activeSetting={activeSetting}
            changePage={setActiveSetting}
            SETTINGS_LIST={SETTINGS_LIST}
          />
          <div className="s w-full overflow-auto px-1.5">
            {SETTINGS_LIST.find((s) => s.title === activeSetting)?.component}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Theme Settings
const ThemesSettings = () => {
  const { setActiveBackgroundTheme, activeBackgroundTheme } =
    useTimersSettings();
  const themes = aestheticPomodoroTimerThemes;

  return (
    <div className="flex w-full flex-col gap-3 pb-2">
      <Muted>Select a background theme</Muted>

      <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-2">
        {themes.map((theme) => (
          <div
            onClick={() => setActiveBackgroundTheme(theme)}
            key={theme.name}
            className={cn(
              "cursor-pointer overflow-hidden rounded-md transition-all hover:opacity-70",
              theme.name === activeBackgroundTheme.name
                ? "ring-primary ring-2"
                : "",
            )}
          >
            <Image
              src={theme.backgroundImage}
              height={800}
              width={800}
              alt={theme.name}
              className="h-26 w-full shrink-0 object-cover md:h-46"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Appearance Settings - Kept for future use
// const AppearanceSettings = () => {
//   const { setTheme, theme, resolvedTheme } = useTheme();
//   const handleThemeSwitch = () => {
//     const currentTheme = theme || resolvedTheme || "dark";
//     const newTheme = currentTheme === "dark" ? "light" : "dark";
//     setTheme(newTheme);
//   };
//   const currentTheme = theme || resolvedTheme;
//   return (
//     <div className="flex w-full flex-col gap-4 pb-2">
//       <Muted>Choose between light and dark mode</Muted>
//       <div className="space-y-4">
//         <div className="bg-muted/30 flex items-center justify-between rounded-lg border p-4">
//           <div className="flex flex-col gap-1">
//             <Label htmlFor="theme-toggle" className="cursor-pointer text-base font-semibold">Theme Mode</Label>
//             <p className="text-muted-foreground text-sm">Currently using <span className="font-semibold capitalize">{currentTheme}</span> mode</p>
//           </div>
//           <Button id="theme-toggle" size={"icon"} variant={"outline"} onClick={handleThemeSwitch}>
//             {currentTheme === "light" ? <IoMoon className="h-5 w-5" /> : <IoSunny className="h-5 w-5" />}
//           </Button>
//         </div>
//         <div className="bg-primary/5 border-primary/20 rounded-lg border p-4">
//           <p className="text-sm"><span className="font-semibold">💡 Tip:</span> Light mode is easier on the eyes in bright environments, while dark mode reduces eye strain in low light.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// Display Settings
const DisplaySettings = () => {
  const { showMilliseconds, setShowMilliseconds } = useTimersSettings();

  return (
    <div className="flex w-full flex-col gap-4 pb-2">
      <Muted>Customize stopwatch display options</Muted>

      <div className="space-y-4">
        {/* Show Milliseconds */}
        <div className="bg-muted/30 flex items-center justify-between rounded-lg border p-4">
          <div className="flex flex-col gap-1">
            <Label
              htmlFor="show-milliseconds"
              className="cursor-pointer text-base font-semibold"
            >
              Show Milliseconds
            </Label>
            <p className="text-muted-foreground text-sm">
              Display millisecond precision in the timer
            </p>
          </div>
          <Switch
            id="show-milliseconds"
            checked={showMilliseconds}
            onCheckedChange={setShowMilliseconds}
          />
        </div>

        {/* Info Card */}
        <div className="bg-primary/5 border-primary/20 rounded-lg border p-4">
          <p className="text-sm">
            <span className="font-semibold">💡 Tip:</span> Toggle milliseconds
            off for a cleaner display, or keep them on for precise timing
            measurements.
          </p>
        </div>
      </div>
    </div>
  );
};

// Sidebar
const DialogSidebar = ({
  SETTINGS_LIST,
  activeSetting,
  changePage,
}: {
  SETTINGS_LIST: { title: string; component: JSX.Element }[];
  activeSetting: string;
  changePage: (title: string) => void;
}) => {
  return (
    <div className="top-0 flex flex-row gap-2 overflow-x-auto sm:min-w-[140px] sm:flex-col sm:gap-3 sm:overflow-x-visible">
      {SETTINGS_LIST.map((item) => (
        <button
          key={item.title}
          className={`rounded px-2 py-1 text-start sm:px-0 sm:py-1 ${
            activeSetting === item.title
              ? "font-semibold underline underline-offset-2"
              : "opacity-70 hover:opacity-100"
          }`}
          onClick={() => changePage(item.title)}
        >
          <span className="text-sm sm:text-base">{item.title}</span>
        </button>
      ))}
    </div>
  );
};
