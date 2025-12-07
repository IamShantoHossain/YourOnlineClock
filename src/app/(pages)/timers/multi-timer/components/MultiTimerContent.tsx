"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { usePreventClose } from "@/hooks/usePreventClose";
import { cn } from "@/lib/utils";
import { Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import { FaCirclePause, FaCirclePlay, FaPlus, FaTrash } from "react-icons/fa6";
import { RiResetLeftLine } from "react-icons/ri";
import { MultiTimerSettingsModal } from "./MultiTimerSettingsModal";

interface Timer {
  id: string;
  name: string;
  hours: number;
  minutes: number;
  seconds: number;
  totalSeconds: number;
  remainingSeconds: number;
  isRunning: boolean;
  isCompleted: boolean;
}

export const MultiTimerContent = () => {
  const [timers, setTimers] = useState<Timer[]>([]);
  const [newTimerName, setNewTimerName] = useState("");
  const [newTimerHours, setNewTimerHours] = useState("0");
  const [newTimerMinutes, setNewTimerMinutes] = useState("5");
  const [newTimerSeconds, setNewTimerSeconds] = useState("0");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const intervalRefs = useRef<{ [key: string]: NodeJS.Timeout }>({});
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Prevent close when any timer is running
  const hasRunningTimers = timers.some((t) => t.isRunning);
  usePreventClose(hasRunningTimers);

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio("/assets/sounds/asthatic-alerm.mp3");
  }, []);

  // Handle fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  // Detect fullscreen changes
  useEffect(() => {
    const handler = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const FullscreenIcon = isFullscreen
    ? AiOutlineFullscreenExit
    : AiOutlineFullscreen;

  // Add new timer
  const addTimer = () => {
    const hours = parseInt(newTimerHours) || 0;
    const minutes = parseInt(newTimerMinutes) || 0;
    const seconds = parseInt(newTimerSeconds) || 0;
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds <= 0) {
      alert("Please set a valid time!");
      return;
    }

    const newTimer: Timer = {
      id: Date.now().toString(),
      name: newTimerName || `Timer ${timers.length + 1}`,
      hours,
      minutes,
      seconds,
      totalSeconds,
      remainingSeconds: totalSeconds,
      isRunning: false,
      isCompleted: false,
    };

    setTimers([...timers, newTimer]);
    setNewTimerName("");
    setNewTimerHours("0");
    setNewTimerMinutes("5");
    setNewTimerSeconds("0");
    setIsDialogOpen(false);
  };

  // Start timer
  const startTimer = (id: string) => {
    setTimers((prevTimers) =>
      prevTimers.map((timer) =>
        timer.id === id
          ? { ...timer, isRunning: true, isCompleted: false }
          : timer,
      ),
    );

    intervalRefs.current[id] = setInterval(() => {
      setTimers((prevTimers) =>
        prevTimers.map((timer) => {
          if (timer.id === id && timer.isRunning) {
            const newRemaining = timer.remainingSeconds - 1;

            if (newRemaining <= 0) {
              clearInterval(intervalRefs.current[id]);
              if (audioRef.current && soundEnabled) {
                audioRef.current.currentTime = 0;
                audioRef.current.loop = true;
                audioRef.current.play().catch(() => {});
              }
              return {
                ...timer,
                remainingSeconds: 0,
                isRunning: false,
                isCompleted: true,
              };
            }

            return { ...timer, remainingSeconds: newRemaining };
          }
          return timer;
        }),
      );
    }, 1000);
  };

  // Pause timer
  const pauseTimer = (id: string) => {
    if (intervalRefs.current[id]) {
      clearInterval(intervalRefs.current[id]);
    }
    // Stop audio if playing
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.loop = false;
    }
    setTimers((prevTimers) =>
      prevTimers.map((timer) =>
        timer.id === id ? { ...timer, isRunning: false } : timer,
      ),
    );
  };

  // Reset timer
  const resetTimer = (id: string) => {
    if (intervalRefs.current[id]) {
      clearInterval(intervalRefs.current[id]);
    }
    // Stop audio if playing
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.loop = false;
    }
    setTimers((prevTimers) =>
      prevTimers.map((timer) =>
        timer.id === id
          ? {
              ...timer,
              remainingSeconds: timer.totalSeconds,
              isRunning: false,
              isCompleted: false,
            }
          : timer,
      ),
    );
  };

  // Handle completed timer action (restart or delete)
  const handleCompletedAction = (id: string, action: "restart" | "delete") => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.loop = false;
    }

    if (action === "restart") {
      resetTimer(id);
      startTimer(id);
    } else {
      deleteTimer(id);
    }
  };

  // Delete timer
  const deleteTimer = (id: string) => {
    if (intervalRefs.current[id]) {
      clearInterval(intervalRefs.current[id]);
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.loop = false;
    }
    setTimers(timers.filter((timer) => timer.id !== id));
  };

  // Format time
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    if (h > 0) {
      return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    }
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  // Calculate progress percentage
  const getProgress = (timer: Timer) => {
    return (
      ((timer.totalSeconds - timer.remainingSeconds) / timer.totalSeconds) * 100
    );
  };

  // Cleanup intervals on unmount
  useEffect(() => {
    return () => {
      Object.values(intervalRefs.current).forEach(clearInterval);
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 p-4 sm:p-6 lg:p-8">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1.5">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Multi Timer
          </h1>
          <p className="text-sm sm:text-base">
            Manage multiple countdown timers simultaneously
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {/* Add Timer Dialog */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="w-full sm:w-auto">
                <FaPlus className="mr-2 h-4 w-4" />
                Add Timer
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[440px]">
              <DialogHeader>
                <DialogTitle>Create New Timer</DialogTitle>
                <DialogDescription>
                  Set up a countdown timer with custom duration
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="timer-name">Timer Name</Label>
                  <Input
                    id="timer-name"
                    placeholder="e.g., Workout, Study, Break"
                    value={newTimerName}
                    onChange={(e) => setNewTimerName(e.target.value)}
                  />
                </div>

                <Separator />

                <div className="space-y-3">
                  <Label>Duration</Label>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="space-y-2">
                      <Label
                        htmlFor="hours"
                        className="text-muted-foreground text-xs"
                      >
                        Hours
                      </Label>
                      <Input
                        id="hours"
                        type="number"
                        min="0"
                        max="23"
                        value={newTimerHours}
                        onChange={(e) => setNewTimerHours(e.target.value)}
                        className="text-center"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="minutes"
                        className="text-muted-foreground text-xs"
                      >
                        Minutes
                      </Label>
                      <Input
                        id="minutes"
                        type="number"
                        min="0"
                        max="59"
                        value={newTimerMinutes}
                        onChange={(e) => setNewTimerMinutes(e.target.value)}
                        className="text-center"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="seconds"
                        className="text-muted-foreground text-xs"
                      >
                        Seconds
                      </Label>
                      <Input
                        id="seconds"
                        type="number"
                        min="0"
                        max="59"
                        value={newTimerSeconds}
                        onChange={(e) => setNewTimerSeconds(e.target.value)}
                        className="text-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={addTimer} className="w-full">
                  <FaPlus className="mr-2 h-4 w-4" />
                  Create Timer
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Settings & Fullscreen Controls */}
          <div className="flex items-center gap-2">
            <MultiTimerSettingsModal
              soundEnabled={soundEnabled}
              setSoundEnabled={setSoundEnabled}
            />

            {/* Fullscreen Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="h-10 w-10"
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
              <FullscreenIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Settings Status Indicators */}
      {soundEnabled && (
        <div className="flex justify-end">
          <span className="bg-primary/10 text-primary flex items-center gap-1 rounded-full px-3 py-1 text-xs">
            <Volume2 className="h-3 w-3" />
            Sound On
          </span>
        </div>
      )}

      {/* Timers Grid */}
      <div>
        {timers.length === 0 ? (
          <Card className="border-dashed p-12 text-center sm:p-16">
            <div className="mx-auto max-w-md space-y-4">
              <div className="bg-muted mx-auto flex h-20 w-20 items-center justify-center rounded-full">
                <FaPlus className="text-muted-foreground h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold">No Timers Yet</h3>
              <p className="text-muted-foreground text-sm">
                Click{" "}
                <span className="text-primary font-medium">
                  &quot;Add Timer&quot;
                </span>{" "}
                to create your first countdown timer
              </p>
            </div>
          </Card>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {timers.map((timer) => (
              <Card
                key={timer.id}
                className={cn(
                  "group relative",
                  timer.isCompleted && "ring-primary ring-2",
                  timer.isRunning && "ring-2 ring-blue-500",
                )}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1 space-y-1">
                      <h3 className="truncate leading-none font-semibold">
                        {timer.name}
                      </h3>
                      <p className="text-muted-foreground text-xs">
                        {formatTime(timer.totalSeconds)}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteTimer(timer.id)}
                      className="hover:bg-destructive/10 hover:text-destructive -mt-1 -mr-1 h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <FaTrash className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Circular Progress */}
                  <div className="relative mx-auto flex h-36 w-36 items-center justify-center sm:h-40 sm:w-40">
                    <svg
                      className="absolute inset-0 -rotate-90 transform"
                      viewBox="0 0 160 160"
                    >
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-muted/20"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        className={cn(
                          "transition-all duration-300 ease-linear",
                          timer.isCompleted && "text-primary",
                          timer.isRunning && "text-blue-500",
                          !timer.isRunning &&
                            !timer.isCompleted &&
                            "text-foreground",
                        )}
                        style={{
                          strokeDasharray: `${2 * Math.PI * 70}`,
                          strokeDashoffset: `${2 * Math.PI * 70 * (1 - getProgress(timer) / 100)}`,
                        }}
                      />
                    </svg>

                    <div className="text-center">
                      <div className="font-mono text-2xl font-bold tabular-nums">
                        {formatTime(timer.remainingSeconds)}
                      </div>
                      <p className="text-muted-foreground mt-1 text-xs">
                        {timer.isRunning
                          ? "Running"
                          : timer.isCompleted
                            ? "Done"
                            : "Paused"}
                      </p>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex gap-2">
                    {!timer.isRunning ? (
                      <Button
                        onClick={() => startTimer(timer.id)}
                        size="sm"
                        disabled={timer.remainingSeconds === 0}
                        className="flex-1"
                      >
                        <FaCirclePlay className="mr-1.5 h-3.5 w-3.5" />
                        {timer.isCompleted ? "Restart" : "Start"}
                      </Button>
                    ) : (
                      <Button
                        onClick={() => pauseTimer(timer.id)}
                        size="sm"
                        variant="secondary"
                        className="flex-1"
                      >
                        <FaCirclePause className="mr-1.5 h-3.5 w-3.5" />
                        Pause
                      </Button>
                    )}

                    <Button
                      onClick={() => resetTimer(timer.id)}
                      size="sm"
                      variant="outline"
                      disabled={timer.isRunning}
                    >
                      <RiResetLeftLine className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Completion Overlay */}
                  {timer.isCompleted && (
                    <div className="animate-in fade-in zoom-in border-primary bg-background/95 absolute inset-0 flex flex-col items-center justify-center rounded-lg border-2 backdrop-blur-sm duration-300">
                      <div className="space-y-4 text-center">
                        <div className="text-5xl">✅</div>
                        <div>
                          <p className="text-lg font-bold">Time's Up!</p>
                          <p className="text-muted-foreground mt-1 text-sm">
                            Timer completed
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            onClick={() =>
                              handleCompletedAction(timer.id, "restart")
                            }
                            size="sm"
                            variant="default"
                          >
                            <FaCirclePlay className="mr-1.5 h-3.5 w-3.5" />
                            Restart
                          </Button>
                          <Button
                            onClick={() =>
                              handleCompletedAction(timer.id, "delete")
                            }
                            size="sm"
                            variant="outline"
                          >
                            <FaTrash className="mr-1.5 h-3.5 w-3.5" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
