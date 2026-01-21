"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { P } from "@/components/ui/typography";
import { usePreventClose } from "@/hooks/usePreventClose";
import { cn } from "@/lib/utils";
import { useTimersSettings } from "@/providers/TimersSettingsProvider";
import { useEffect, useRef, useState } from "react";
import { FaFlag, FaPause, FaPlay } from "react-icons/fa6";
import { RiResetLeftLine } from "react-icons/ri";
import { StopwatchSettingsModal } from "./StopwatchSettingsModal";

interface Lap {
  id: number;
  time: number;
  lapTime: number;
}

export const Stopwatch = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<Lap[]>([]);

  const { showMilliseconds } = useTimersSettings();

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const accumulatedTimeRef = useRef<number>(0);

  const previousLapTime = useRef(0);

  // Format time helper function
  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const millis = Math.floor((ms % 1000) / 10);

    if (hours > 0) {
      if (showMilliseconds) {
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(millis).padStart(2, "0")}`;
      }
      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    if (showMilliseconds) {
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(millis).padStart(2, "0")}`;
    }
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  // Prevent tab close when stopwatch is running
  usePreventClose(isRunning);

  // Stopwatch counter
  useEffect(() => {
    if (isRunning) {
      // Synchronize the start point with the system clock
      startTimeRef.current = Date.now() - accumulatedTimeRef.current;

      intervalRef.current = setInterval(() => {
        const currentElapsed = Date.now() - startTimeRef.current;
        setMilliseconds(currentElapsed);
        accumulatedTimeRef.current = currentElapsed; // Keep track of progress
      }, 10);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  // Update document title
  useEffect(() => {
    document.title = `${formatTime(milliseconds)} • Stopwatch`;
  }, [milliseconds]);

  // Handlers
  const startTimer = () => setIsRunning(true);

  const pauseTimer = () => {
    setIsRunning(false);
    // Lock in the accumulated time exactly when paused
    accumulatedTimeRef.current = Date.now() - startTimeRef.current;
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMilliseconds(0);
    setLaps([]);
    accumulatedTimeRef.current = 0; // Reset the baseline
    previousLapTime.current = 0;
    document.title = "Stopwatch";
  };

  const recordLap = () => {
    const lapTime = milliseconds - previousLapTime.current;
    setLaps((prev) => [
      {
        id: prev.length + 1,
        time: milliseconds,
        lapTime: lapTime,
      },
      ...prev,
    ]);
    previousLapTime.current = milliseconds;
  };

  // Find fastest and slowest laps
  const fastestLap =
    laps.length > 1
      ? laps.reduce((min: Lap, lap: Lap) =>
          lap.lapTime < min.lapTime ? lap : min,
        )
      : null;
  const slowestLap =
    laps.length > 1
      ? laps.reduce((max: Lap, lap: Lap) =>
          lap.lapTime > max.lapTime ? lap : max,
        )
      : null;

  return (
    <div className={cn("z-10", "mb-20")}>
      {/* Timer Display */}
      <div className="flex flex-col items-center gap-0">
        <div className="">
          <div className="px-8 py-6 sm:px-12 sm:py-8">
            <P className="from-primary via-primary/90 to-primary/70 bg-linear-to-br bg-clip-text text-7xl font-bold text-transparent tabular-nums sm:text-8xl md:text-9xl">
              {formatTime(milliseconds)}
            </P>
          </div>
        </div>
        {laps.length > 0 && (
          <div className="mb-2 flex items-center gap-2">
            <div className="from-primary to-primary/60 h-2 w-2 animate-pulse rounded-full bg-linear-to-br" />
            <P>
              {laps.length} lap{laps.length > 1 ? "s" : ""} recorded
            </P>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="mb-16 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {!isRunning ? (
          <Button
            size="lg"
            onClick={startTimer}
            className="min-w-[90px] bg-linear-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/30 transition-all hover:shadow-xl hover:shadow-green-500/40 sm:min-w-[100px]"
          >
            <FaPlay className="size-4" /> Start
          </Button>
        ) : (
          <Button
            size="lg"
            onClick={pauseTimer}
            className="min-w-[90px] bg-linear-to-r from-orange-600 to-amber-600 text-white shadow-lg shadow-orange-500/30 transition-all hover:shadow-xl hover:shadow-orange-500/40 sm:min-w-[100px]"
          >
            <FaPause className="size-4" /> Pause
          </Button>
        )}
        <Button
          size="lg"
          variant="ghost"
          onClick={resetTimer}
          disabled={milliseconds === 0}
          className="border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all disabled:opacity-50"
        >
          <RiResetLeftLine className="size-8 sm:size-10" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={recordLap}
          disabled={!isRunning && milliseconds === 0}
          className="border-primary/30 bg-primary/5 hover:border-primary/50 hover:bg-primary/10 text-primary min-w-[90px] transition-all disabled:opacity-50 sm:min-w-[100px]"
        >
          <FaFlag className="size-4" /> Lap
        </Button>
        <StopwatchSettingsModal />
      </div>

      {/* Laps List */}
      {laps.length > 0 && (
        <Card className="bg-card/90 border-primary/20 shadow-primary/10 mx-auto w-full max-w-[90vw]! pt-0 shadow-2xl backdrop-blur-xl">
          <div className="border-border/50 from-primary/5 border-b bg-linear-to-r to-transparent p-4">
            <h3 className="text-primary text-sm font-semibold">Lap Times</h3>
          </div>
          <div className="max-h-[300px] overflow-y-auto p-4">
            <div className="space-y-2">
              {laps.map((lap) => {
                const isFastest = fastestLap?.id === lap.id;
                const isSlowest = slowestLap?.id === lap.id;

                return (
                  <div
                    key={lap.id}
                    className={`group relative overflow-hidden rounded-lg border p-3 transition-all hover:scale-[1.02] ${
                      isFastest
                        ? "border-green-500/50 bg-linear-to-r from-green-500/10 to-emerald-500/5 shadow-md shadow-green-500/10"
                        : isSlowest
                          ? "border-red-500/50 bg-linear-to-r from-red-500/10 to-rose-500/5 shadow-md shadow-red-500/10"
                          : "border-border/50 bg-background/20 hover:border-primary/30 hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                            isFastest
                              ? "bg-green-500/20 text-green-600 dark:text-green-400"
                              : isSlowest
                                ? "bg-red-500/20 text-red-600 dark:text-red-400"
                                : "bg-primary/10 text-primary"
                          }`}
                        >
                          #{lap.id}
                        </span>
                        <div className="flex flex-col">
                          <span className="font-mono text-sm font-semibold">
                            {formatTime(lap.lapTime)}
                          </span>
                          <span className="text-muted-foreground text-xs">
                            Total: {formatTime(lap.time)}
                          </span>
                        </div>
                      </div>
                      {isFastest && (
                        <span className="flex items-center gap-1 rounded-full bg-green-500/20 px-2.5 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                          ⚡ Fastest
                        </span>
                      )}
                      {isSlowest && (
                        <span className="flex items-center gap-1 rounded-full bg-red-500/20 px-2.5 py-1 text-xs font-medium text-red-600 dark:text-red-400">
                          🐢 Slowest
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
