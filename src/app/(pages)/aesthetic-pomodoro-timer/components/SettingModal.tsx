"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Muted } from "@/components/ui/typography";
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

      <DialogContent className="flex min-h-52 w-full max-w-full flex-col gap-4 overflow-auto sm:max-w-3xl sm:flex-row sm:gap-8">
        <DialogSidebar
          activeSetting={activeSetting}
          changePage={setActiveSetting}
          SETTINGS_LIST={SETTINGS_LIST}
        />
        <div className="w-full overflow-auto p-2 sm:w-[calc(100%-150px)] sm:p-0">
          {SETTINGS_LIST.find((s) => s.title === activeSetting)?.component}
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
    <div className="flex flex-col gap-3">
      <Muted>Select a theme</Muted>
      <Select
        onValueChange={(value) =>
          setActiveTheme(themes.find((t) => t.name === value)!)
        }
        defaultValue={activeTheme.name}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Themes</SelectLabel>
            {themes.map((theme) => (
              <SelectItem key={theme.name} value={theme.name}>
                {theme.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
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
    <div className="flex flex-row gap-2 overflow-x-auto sm:min-w-[140px] sm:flex-col sm:gap-3 sm:overflow-x-visible">
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
