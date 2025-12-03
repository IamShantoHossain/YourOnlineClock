"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CircularProgress from "@/components/ui/progress/circular-progress";
import { useEffect } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { CountdownItem } from "./CountdownDisplay";

// SingleCounter.tsx
type SingleCounterProps = {
  counter: CountdownItem;
  onPause: () => void;
  onDelete: () => void;
  onReset: () => void;
  handleEnd: () => void;
  onUpdate: (remaining: number) => void;
};

const SingleCounter = ({
  counter,
  onPause,
  onDelete,
  onReset,
  onUpdate,
  handleEnd,
}: SingleCounterProps) => {
  useEffect(() => {
    if (counter.paused) return;

    const interval = setInterval(() => {
      const timeLeft = counter.targetTime! - Date.now();
      const newRemaining = timeLeft > 0 ? timeLeft : 0;
      onUpdate(newRemaining);
    }, 250);

    return () => clearInterval(interval);
  }, [counter, onUpdate]);

  const percentageRemaining = Math.max(
    0,
    Math.min(100, (counter.remaining / counter.totalDuration) * 100),
  );

  const formatTime = (ms: number) => {
    const clampedMs = Math.max(0, ms); // ensure minimum is 0
    const totalSeconds = Math.floor(clampedMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (counter.paused) return;

    const interval = setInterval(() => {
      const timeLeft = counter.targetTime! - Date.now();
      const newRemaining = timeLeft > 0 ? timeLeft : 0;

      // Update remaining in parent
      onUpdate(newRemaining);

      // Handle end
      if (newRemaining === 0) {
        clearInterval(interval);
        handleEnd();
        onPause(); // stop timer
      }
    }, 50); // smaller interval for smoothness

    return () => clearInterval(interval);
  }, [counter, onUpdate]);

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>{counter.title}</CardTitle>
        <Button
          onClick={onDelete}
          size={"icon-sm"}
          variant={"secondary"}
          className="text-destructive hover:text-destructive"
        >
          <FaRegTrashCan />
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-2">
        <CircularProgress
          value={percentageRemaining}
          valueToShow={formatTime(counter.remaining)}
        />
      </CardContent>
      <CardFooter className="mt-3 grid grid-cols-2 gap-2">
        <Button onClick={onPause}>{counter.paused ? "Play" : "Pause"}</Button>
        <Button variant="secondary" onClick={onReset}>
          Reset
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SingleCounter;
