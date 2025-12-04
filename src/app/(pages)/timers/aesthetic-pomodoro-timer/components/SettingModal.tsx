"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Muted } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { JSX, useState } from "react";
import { FaGear } from "react-icons/fa6";
import { aestheticPomodoroTimerThemes } from "../constants";
import { DEFAULT_TIMER_OPTIONS, useTimer } from "../context/PromoTimerContext";

export const SettingsModal = () => {
  const [activeSetting, setActiveSetting] = useState("Theme");

  const SETTINGS_LIST = [
    { title: "Theme", component: <ThemesSettings /> },
    { title: "Timers", component: <TimersSettings /> },
    // { title: "Notifications", component: <NotificationsSettings /> },
    // { title: "Sounds", component: <SoundsSettings /> },
    // { title: "Advanced", component: <AdvancedSettings /> },
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
        <Dialog></Dialog>
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
  const { setActiveTheme, activeTheme } = useTimer();
  const themes = aestheticPomodoroTimerThemes;

  return (
    <div className="flex w-full flex-col gap-3 pb-2">
      <Muted>Select a theme</Muted>

      <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-2">
        {themes.map((theme) => (
          <div
            onClick={() => setActiveTheme(theme)}
            key={theme.name}
            className={cn(
              "overflow-hidden rounded-md",
              theme.name === activeTheme.name ? "ring-primary ring-2" : "",
            )}
          >
            <Image
              src={theme.backgroundImage}
              height={800}
              width={800}
              alt={theme.name}
              placeholder="blur"
              className="h-26 w-full shrink-0 object-cover md:h-46"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Notifications Settings
const NotificationsSettings = () => (
  <div className="flex flex-col gap-2">
    <Muted>Notification Options</Muted>
    <label className="flex items-center gap-2">
      <input type="checkbox" /> Enable Notifications
    </label>
    <label className="flex items-center gap-2">
      <input type="checkbox" /> Sound Alerts
    </label>
  </div>
);

// Sounds Settings
const SoundsSettings = () => (
  <div className="flex flex-col gap-2">
    <Muted>Sound Options</Muted>
    <label className="flex items-center gap-2">
      <input type="checkbox" /> Play Tick Sound
    </label>
    <label className="flex items-center gap-2">
      <input type="checkbox" /> Play Alarm Sound
    </label>
  </div>
);

// Advanced Settings
const AdvancedSettings = () => (
  <div className="flex flex-col gap-2">
    <Muted>Advanced Options</Muted>
    <Input placeholder="Custom Timer Presets (JSON)" />
  </div>
);

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

const TimersSettings = () => {
  const { timerOptions, setTimerOptions } = useTimer();

  const resetTimers = () => {
    setTimerOptions(DEFAULT_TIMER_OPTIONS.map((timer) => ({ ...timer })));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {timerOptions.map((timer, index) => (
          <div key={index} className="flex flex-col gap-1">
            <Muted className="text-sm sm:text-base">{timer.title}</Muted>
            <Input
              type="number"
              inputMode="numeric"
              min={0}
              value={timer.time}
              onChange={(e) => {
                const newTimers = [...timerOptions];
                newTimers[index].time = parseFloat(e.target.value);
                setTimerOptions(newTimers);
              }}
              className="bg-background w-full shadow-none"
            />
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        onClick={resetTimers}
        className="mt-4 w-full sm:w-auto"
      >
        Reset to Default
      </Button>
    </div>
  );
};
