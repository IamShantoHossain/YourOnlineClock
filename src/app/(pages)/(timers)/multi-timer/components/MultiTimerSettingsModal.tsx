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
import { aestheticPomodoroTimerThemes } from "../../aesthetic-pomodoro-timer/constants";

interface MultiTimerSettingsModalProps {
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  onResetAllTimers: () => void;
  onRemoveAllCustomTimers: () => void;
  customTimersCount: number;
}

export const MultiTimerSettingsModal = ({
  soundEnabled,
  setSoundEnabled,
  onResetAllTimers,
  onRemoveAllCustomTimers,
  customTimersCount,
}: MultiTimerSettingsModalProps) => {
  const [activeSetting, setActiveSetting] = useState("Theme");

  const SETTINGS_LIST = [
    {
      title: "Theme",
      component: <ThemesSettings />,
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
    {
      title: "Manage",
      component: (
        <ManageSettings
          onResetAllTimers={onResetAllTimers}
          onRemoveAllCustomTimers={onRemoveAllCustomTimers}
          customTimersCount={customTimersCount}
        />
      ),
    },
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
        className="h-[80vh] w-[96vw] max-w-280! overflow-y-auto sm:w-[80vw]!"
      >
        <div className="flex flex-col md:flex-row">
          <DialogSidebar
            activeSetting={activeSetting}
            changePage={setActiveSetting}
            SETTINGS_LIST={SETTINGS_LIST}
          />
          <div className="w-full overflow-auto px-1.5">
            {SETTINGS_LIST.find((s) => s.title === activeSetting)?.component}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

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

const ThemesSettings = () => {
  const { activeBackgroundTheme, setActiveBackgroundTheme } =
    useTimersSettings();
  const themes = aestheticPomodoroTimerThemes;

  return (
    <div className="flex w-full flex-col gap-3 pb-2">
      <Muted>Select a theme</Muted>

      <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-2">
        {themes.map((theme) => (
          <div
            onClick={() => setActiveBackgroundTheme(theme)}
            key={theme.name}
            className={cn(
              "hover:ring-primary/50 cursor-pointer overflow-hidden rounded-md transition-all hover:ring-2",
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
              placeholder="blur"
              className="h-26 w-full shrink-0 object-cover md:h-46"
            />
          </div>
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
    <div className="flex flex-col gap-3">
      <Muted>Sound Options</Muted>

      <div className="flex items-center justify-between rounded-lg border p-4">
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
  );
};

const ManageSettings = ({
  onResetAllTimers,
  onRemoveAllCustomTimers,
  customTimersCount,
}: {
  onResetAllTimers: () => void;
  onRemoveAllCustomTimers: () => void;
  customTimersCount: number;
}) => {
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <Muted>Manage Timers</Muted>

      <div className="space-y-3">
        {/* Reset All Timers */}
        <div className="rounded-lg border p-4">
          <div className="space-y-3">
            <div className="space-y-0.5">
              <Label className="text-base font-medium">Reset All Timers</Label>
              <p className="text-muted-foreground text-sm">
                Reset all timers to their default state (Quick Break, Pomodoro,
                Long Focus)
              </p>
            </div>
            {!showResetConfirm ? (
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setShowResetConfirm(true)}
              >
                Reset to Defaults
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button
                  variant="destructive"
                  className="flex-1"
                  onClick={() => {
                    onResetAllTimers();
                    setShowResetConfirm(false);
                  }}
                >
                  Confirm Reset
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowResetConfirm(false)}
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Remove Custom Timers */}
        <div className="rounded-lg border p-4">
          <div className="space-y-3">
            <div className="space-y-0.5">
              <Label className="text-base font-medium">
                Remove Custom Timers
              </Label>
              <p className="text-muted-foreground text-sm">
                Remove all custom timers you've added
                {customTimersCount > 0 && (
                  <span className="text-primary font-medium">
                    {" "}
                    ({customTimersCount} custom timer
                    {customTimersCount !== 1 ? "s" : ""})
                  </span>
                )}
              </p>
            </div>
            {!showRemoveConfirm ? (
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setShowRemoveConfirm(true)}
                disabled={customTimersCount === 0}
              >
                {customTimersCount === 0
                  ? "No Custom Timers"
                  : "Remove Custom Timers"}
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button
                  variant="destructive"
                  className="flex-1"
                  onClick={() => {
                    onRemoveAllCustomTimers();
                    setShowRemoveConfirm(false);
                  }}
                >
                  Confirm Remove
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowRemoveConfirm(false)}
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
