"use client";

import Container from "@/components/global/Container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { P } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { intervalToDuration } from "date-fns";
import { useEffect, useRef, useState } from "react";

function StopwatchDisplay() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const frameRef = useRef<number | null>(null);

  const startTimer = () => {
    setRunning(true);
    setStartTime(Date.now() - elapsed); // resume support
  };

  const pauseTimer = () => {
    setRunning(false);
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
  };

  const resetTimer = () => {
    setRunning(false);
    setElapsed(0);
    setStartTime(null);
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
  };

  // High precision timer
  useEffect(() => {
    if (!running || startTime === null) return;

    const update = () => {
      setElapsed(Date.now() - startTime);
      frameRef.current = requestAnimationFrame(update);
    };

    frameRef.current = requestAnimationFrame(update);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [running, startTime]);

  // Render time with styled milliseconds
  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const duration = intervalToDuration({ start: 0, end: seconds * 1000 });

    const hours = duration.hours ?? 0;
    const minutes = String(duration.minutes ?? 0).padStart(2, "0");
    const secs = String(duration.seconds ?? 0).padStart(2, "0");
    const centi = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");

    return (
      <div
        className={cn(
          "mx-auto grid w-fit grid-cols-3 items-end gap-0 text-center tabular-nums",
          hours > 0 && "grid-cols-4",
        )}
      >
        {hours > 0 && (
          <div className="flex flex-col items-center justify-end">
            <P className="px-0.5 text-[16vw] font-bold sm:text-[18vw] md:text-[20vw] lg:text-[14rem]">
              {hours}:
            </P>
            <P className="text-sm">Hours</P>
          </div>
        )}

        <div className="flex flex-col items-center justify-end">
          <P className="px-0.5 text-[16vw] font-bold sm:text-[18vw] md:text-[20vw] lg:text-[14rem]">
            {minutes}:
          </P>
          <P className="text-sm">Min</P>
        </div>

        <div className="flex flex-col items-center justify-end">
          <P className="px-0.5 text-[16vw] font-bold sm:text-[18vw] md:text-[20vw] lg:text-[14rem]">
            {secs}:
          </P>
          <P className="text-sm">Sec</P>
        </div>

        <div className="flex w-fit flex-col items-center justify-end pl-1">
          <P className="px-0.5 text-[16vw] font-semibold opacity-60 sm:text-[18vw] md:text-[20vw] lg:text-[14rem]">
            {centi}
          </P>
          <P className="text-sm">Mil</P>
        </div>
      </div>
    );
  };

  return (
    <Container className="">
      <Card className="gap-0 space-y-0 bg-transparent shadow-none">
        <CardHeader className="text-center text-lg">
          <CardTitle className="text-2xl">Online timer and stopwatch</CardTitle>
        </CardHeader>

        <CardContent>{formatTime(elapsed)}</CardContent>

        <CardFooter className="mt-5 flex items-center justify-center gap-6">
          <Button
            onClick={running ? pauseTimer : startTimer}
            size="lg"
            className="rounded-full"
          >
            {running ? "Pause" : "Start"}
          </Button>

          <Button
            onClick={resetTimer}
            size="lg"
            variant="secondary"
            className="rounded-full"
          >
            Reset
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
}

export default StopwatchDisplay;
