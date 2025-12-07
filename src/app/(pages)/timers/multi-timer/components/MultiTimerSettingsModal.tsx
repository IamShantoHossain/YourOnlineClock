"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { useTimersSettings } from "@/providers/TimersSettingsProvider";
import Image from "next/image";
import { JSX, useState } from "react";
import { FaGear } from "react-icons/fa6";
import { aestheticPomodoroTimerThemes } from "../../aesthetic-pomodoro-timer/constants";

interface MultiTimerSettingsModalProps {
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
}

export const MultiTimerSettingsModal = ({
  soundEnabled,
  setSoundEnabled,
}: MultiTimerSettingsModalProps) => {
  const [activeSetting, setActiveSetting] = useState("Theme");
  const { activeBackgroundTheme, setActiveBackgroundTheme } =
    useTimersSettings();

  const SIDEBAR_LIST = [
    {
      title: "Theme",
      component: (
        <ThemeSettings
          activeBackgroundTheme={activeBackgroundTheme}
          setActiveBackgroundTheme={setActiveBackgroundTheme}
        />
      ),
    },
    {
      title: "Sound",
      component: (
        <SoundSettings
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
        />
      ),
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-10 w-10">
          <FaGear className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex max-w-3xl gap-6">
        <DialogSidebar
          activeSetting={activeSetting}
          changePage={(page) => setActiveSetting(page)}
          SIDEBAR_LIST={SIDEBAR_LIST}
        />
        <div className="flex-1">
          {SIDEBAR_LIST.find((item) => item.title === activeSetting)?.component}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const DialogSidebar = ({
  SIDEBAR_LIST,
  activeSetting,
  changePage,
}: {
  SIDEBAR_LIST: {
    title: string;
    component: JSX.Element;
  }[];
  activeSetting: string;
  changePage: (title: string) => void;
}) => {
  return (
    <div className="flex flex-col items-start gap-2 border-r pr-6">
      {SIDEBAR_LIST.map((item) => (
        <button
          key={item.title}
          className={cn(
            "hover:text-foreground text-left text-sm transition-colors",
            activeSetting === item.title
              ? "text-foreground font-semibold underline underline-offset-4"
              : "text-muted-foreground",
          )}
          onClick={() => changePage(item.title)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

const ThemeSettings = ({
  activeBackgroundTheme,
  setActiveBackgroundTheme,
}: {
  activeBackgroundTheme: any;
  setActiveBackgroundTheme: (theme: any) => void;
}) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Background Theme</h3>
        <p className="text-muted-foreground text-sm">
          Choose a background theme for your timers
        </p>
      </div>
      <div className="grid max-h-[400px] grid-cols-3 gap-3 overflow-y-auto pr-2">
        {aestheticPomodoroTimerThemes.map((theme) => (
          <button
            key={theme.name}
            onClick={() => setActiveBackgroundTheme(theme)}
            className={cn(
              "group relative aspect-video overflow-hidden rounded-lg border-2 transition-all hover:scale-105",
              activeBackgroundTheme.name === theme.name
                ? "ring-primary border-primary ring-2"
                : "border-border hover:border-primary/50",
            )}
          >
            <Image
              src={theme.backgroundImage}
              alt={theme.name}
              width={200}
              height={112}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
              <span className="absolute bottom-1 left-1 text-xs font-medium text-white">
                {theme.name}
              </span>
            </div>
            {activeBackgroundTheme.name === theme.name && (
              <div className="bg-primary absolute top-1 right-1 rounded-full p-1">
                <svg
                  className="h-3 w-3 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

const SoundSettings = ({
  soundEnabled,
  setSoundEnabled,
}: {
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
}) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Sound Settings</h3>
        <p className="text-muted-foreground text-sm">
          Configure audio notifications for your timers
        </p>
      </div>
      <div className="space-y-3">
        <div className="bg-muted/50 flex items-center justify-between rounded-lg p-4">
          <div className="space-y-0.5">
            <Label htmlFor="sound-enabled" className="text-base font-medium">
              Timer Completion Sound
            </Label>
            <p className="text-muted-foreground text-sm">
              Play a sound when a timer completes
            </p>
          </div>
          <Switch
            id="sound-enabled"
            checked={soundEnabled}
            onCheckedChange={setSoundEnabled}
          />
        </div>
      </div>
    </div>
  );
};
