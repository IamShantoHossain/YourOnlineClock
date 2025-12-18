"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";
import { RiResetLeftLine } from "react-icons/ri";

interface DynamicTimerProps {
  minutes: number; // initial timer in minutes
}

export const DynamicTimer = ({ minutes }: DynamicTimerProps) => {
  const [seconds, setSeconds] = useState(minutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setSeconds(minutes * 60); // reset if parent changes minutes
  }, [minutes]);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, [isRunning]);

  const formatTime = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(minutes * 60);
    clearInterval(intervalRef.current!);
  };

  return (
    <div className="flex h-full flex-1 flex-col items-center justify-center gap-8 px-4 pb-36 sm:px-6">
      {/* Timer Display */}
      <p className="text-center text-[6rem] font-extrabold tabular-nums sm:text-[8rem] md:text-[10rem] lg:text-[12rem]">
        {formatTime(seconds)}
      </p>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {!isRunning ? (
          <Button
            size="lg"
            className="min-w-[120px] px-6 py-4 text-xl sm:text-2xl"
            onClick={startTimer}
          >
            <FaPlay className="mr-2" /> Start
          </Button>
        ) : (
          <Button
            size="lg"
            className="min-w-[120px] px-6 py-4 text-xl sm:text-2xl"
            onClick={pauseTimer}
          >
            <FaPause className="mr-2" /> Pause
          </Button>
        )}
        <Button
          size="lg"
          className="min-w-[120px] px-6 py-4 text-xl sm:text-2xl"
          onClick={resetTimer}
        >
          <RiResetLeftLine className="mr-2" /> Reset
        </Button>
      </div>
    </div>
  );
};

export default DynamicTimer;
