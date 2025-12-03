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
import { useEffect, useMemo, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";
import { RiResetLeftLine } from "react-icons/ri";
import { useTimer } from "../context/PromoTimerContext";
import { SettingsModal } from "./SettingModal";

export const MainTimerWithDialog = () => {
  const { timerOptions, activeTimerMode, setActiveTimerMode } = useTimer();
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const endSound = useRef(new Audio("/assets/sounds/asthatic-alerm.mp3"));

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
    endSound.current.play();
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
      <div className="z-10 flex flex-col items-center justify-center gap-12">
        {/* Timer Mode Buttons */}

        <div className="flex flex-col gap-3 sm:flex-row">
          {timerOptions.map((option) => (
            <Button
              key={option.title}
              size="lg"
              variant={activeTimerMode === option.title ? "default" : "outline"}
              className="rounded-full lowercase"
              onClick={() => setActiveTimerMode(option.title)}
            >
              {option.title}
            </Button>
          ))}
        </div>

        {/* Timer Display */}
        <p className="text-8xl font-bold tabular-nums sm:text-8xl lg:text-[9rem]">
          {formatTime(seconds)}
        </p>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {!isRunning ? (
            <Button size="lg" onClick={startTimer}>
              <FaPlay className="size-4 opacity-80" /> Start
            </Button>
          ) : (
            <Button size="lg" variant="default" onClick={pauseTimer}>
              <FaPause className="size-4 opacity-80" /> Pause
            </Button>
          )}
          <Button size="lg" variant="ghost" onClick={resetTimer}>
            <RiResetLeftLine className="size-10" />
          </Button>
          <SettingsModal />
        </div>
      </div>

      {/* Alarm Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Alarm Playing</DialogTitle>
          </DialogHeader>
          <p>The timer has ended and the alarm is playing.</p>
          <DialogFooter>
            <Button onClick={stopAlarm}>Stop Alarm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
