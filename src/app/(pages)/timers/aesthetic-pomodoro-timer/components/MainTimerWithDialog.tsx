"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { usePreventClose } from "@/hooks/usePreventClose";
import { useTimerNotifications } from "@/hooks/useTimerNotifications";
import { useTimerSettings } from "@/hooks/useTimerSettings";
import { Volume2 } from "lucide-react";
import { RefObject, useEffect, useMemo, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";
import { RiResetLeftLine } from "react-icons/ri";
import { useTimer } from "../context/PromoTimerContext";
import { SettingsModal } from "./SettingModal";

export const MainTimerWithDialog = () => {
  const { timerOptions, activeTimerMode, setActiveTimerMode } = useTimer();
  const { sound } = useTimerSettings();
  const { notifyComplete } = useTimerNotifications();

  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // how to set its type for Audio object
  const endSound = useRef(
    typeof Audio !== "undefined"
      ? new Audio("/assets/sounds/asthatic-alerm.mp3")
      : null,
  )! as RefObject<HTMLAudioElement>;

  // Prevent tab close when timer is running
  usePreventClose(isRunning);

  // Selected timer memoized
  const selectedTimer = useMemo(
    () => timerOptions.find((t) => t.title === activeTimerMode) || { time: 15 },
    [activeTimerMode, timerOptions],
  );

  // Reset timer whenever activeTimerMode or timerOptions change
  useEffect(() => {
    resetTimer();
  }, [selectedTimer, timerOptions, activeTimerMode]);

  // Timer countdown
  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);

          setSeconds(selectedTimer.time * 60);
          setIsRunning(false);
          playAlarm();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, [isRunning]);

  // Update document title
  useEffect(() => {
    document.title = `${formatTime(seconds)} • ${activeTimerMode}`;
  }, [seconds, activeTimerMode]);

  // Handlers
  const startTimer = () => {
    if (seconds > 0) setIsRunning(true);
    stopAlarm();
  };

  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current!);
    stopAlarm();
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current!);
    setSeconds(selectedTimer.time * 60);
    setIsRunning(false);
    stopAlarm();
  };

  const playAlarm = () => {
    console.log("⏰ Timer complete! Triggering alarm...");

    // Play alarm sound only if sound is enabled
    if (sound) {
      console.log("🔊 Playing alarm sound...");
      endSound.current.play();
      endSound.current.loop = true;
      endSound.current.currentTime = 0;
    }

    // Send notification
    const messages = {
      Pomodoro: "Great work! Time to take a break.",
      "Short Break": "Break's over! Ready to focus again?",
      "Long Break": "Refreshed? Let's get back to work!",
    };

    notifyComplete(
      activeTimerMode,
      messages[activeTimerMode as keyof typeof messages] || "Timer complete!",
    );

    setIsDialogOpen(true);
  };

  const stopAlarm = () => {
    endSound.current.pause();
    endSound.current.currentTime = 0;
    setIsDialogOpen(false);
  };

  const formatTime = (sec: number) => {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;

    if (hours > 0) {
      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <>
      <div className="z-10 flex flex-col items-center justify-center gap-6 px-3 sm:gap-8 sm:px-4 md:gap-12">
        {/* Timer Mode Buttons */}

        <div className="flex w-full max-w-sm flex-col gap-2 sm:max-w-md sm:flex-row sm:gap-3">
          {timerOptions.map((option) => (
            <Button
              key={option.title}
              size="lg"
              variant={activeTimerMode === option.title ? "default" : "outline"}
              className="w-full rounded-full text-sm lowercase sm:w-auto sm:text-base"
              onClick={() => setActiveTimerMode(option.title)}
            >
              {option.title}
            </Button>
          ))}
        </div>

        {/* Timer Display */}
        <p className="text-5xl font-bold tabular-nums sm:text-6xl md:text-8xl lg:text-[9rem]">
          {formatTime(seconds)}
        </p>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {!isRunning ? (
            <Button
              size="lg"
              onClick={startTimer}
              className="min-w-[90px] sm:min-w-[100px]"
            >
              <FaPlay className="size-4 opacity-80" /> Start
            </Button>
          ) : (
            <Button
              size="lg"
              variant="default"
              onClick={pauseTimer}
              className="min-w-[90px] sm:min-w-[100px]"
            >
              <FaPause className="size-4 opacity-80" /> Pause
            </Button>
          )}
          <Button size="lg" variant="ghost" onClick={resetTimer}>
            <RiResetLeftLine className="size-8 sm:size-10" />
          </Button>
          <SettingsModal />
        </div>

        {/* Settings Status Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs opacity-70 sm:text-sm">
          {sound && (
            <span className="bg-primary/10 text-primary flex items-center gap-1 rounded-full px-2.5 py-1 sm:px-3">
              <Volume2 className="h-3 w-3" />
              Sound
            </span>
          )}
        </div>
      </div>

      {/* Alarm Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent showCloseButton={true} className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {activeTimerMode === "Pomodoro" ? "🎉" : "☕"} {activeTimerMode}{" "}
              Complete!
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <p className="text-muted-foreground">
              {activeTimerMode === "Pomodoro"
                ? "Great work! Time to take a well-deserved break."
                : "Break time is over. Ready to focus again?"}
            </p>
          </div>
          <DialogFooter className="flex gap-2">
            <Button onClick={stopAlarm}>Dismiss</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
