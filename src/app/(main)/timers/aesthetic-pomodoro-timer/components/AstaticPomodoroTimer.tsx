"use client";

import { Button } from "@/components/ui/button";
import { P } from "@/components/ui/typography";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import { FaPause, FaPlay } from "react-icons/fa6";
import { RiResetLeftLine } from "react-icons/ri";
import { aestheticPomodoroTimerThemes } from "../constants";

const AstaticPomodoroTimer = () => {
  const [activeTheme, setActiveTheme] = useState(
    aestheticPomodoroTimerThemes[0],
  );

  const { getParam, setParam } = useParams();
  const activeTimerMode = getParam("timerMode") || "Pomodoro";

  const [isFullscreen, setIsFullscreen] = useState(false);

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

  const Logo = isFullscreen ? AiOutlineFullscreenExit : AiOutlineFullscreen;

  return (
    <div className="z-10 flex flex-1 items-center justify-center">
      <div className="text-primary flex flex-col items-center justify-center gap-5">
        <Image
          src={activeTheme.backgroundImage}
          fill
          placeholder="blur"
          alt=""
          className="pointer-events-none -z-10 h-svh w-svw object-cover brightness-35"
        />

        <MainTimerWithDialog
          activeTimerMode={activeTimerMode}
          setParam={setParam}
        />

        <div className="group absolute right-0 bottom-0 flex h-52 items-center justify-center gap-3 p-10 pr-5">
          <P className="text-primary scale-95 text-xl font-semibold opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100">
            Go Focus mode
          </P>

          <Button
            onClick={toggleFullscreen}
            variant="ghost"
            className="h-fit w-fit scale-95 cursor-pointer p-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100"
          >
            <Logo className="pointer-events-none size-12" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AstaticPomodoroTimer;

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useParams } from "@/hooks/useParams";

const MainTimerWithDialog = ({
  activeTimerMode,
  setParam,
}: {
  activeTimerMode: string;
  setParam: (key: string, value: string) => void;
}) => {
  const timerOptions = [
    { title: "Pomodoro", time: 25 },
    { title: "Short Break", time: 5 },
    { title: "Long Break", time: 10 },
  ];

  const selectedTimer = timerOptions.find(
    (t) => t.title === activeTimerMode,
  ) || { time: 15 };
  const initialSeconds = selectedTimer.time * 60;

  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const endSound = useRef(new Audio("/assets/sounds/alarm.mp3"));

  // Play sound and show dialog
  useEffect(() => {
    const sound = endSound.current;
    const handleEnded = () => setIsDialogOpen(false);

    sound.addEventListener("ended", handleEnded);

    return () => sound.removeEventListener("ended", handleEnded);
  }, []);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current!);
            endSound.current.play();
            setIsDialogOpen(true);
            resetTimer();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current!);
  }, [isRunning]);

  const resetTimer = () => {
    clearInterval(intervalRef.current!);
    setSeconds(initialSeconds);
    setIsRunning(false);
  };

  const startTimer = () => {
    if (seconds > 0) setIsRunning(true);
    stopSound();
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current!);
    setIsRunning(false);
    stopSound();
  };

  const stopSound = () => {
    endSound.current.pause();
    endSound.current.currentTime = 0;
    setIsDialogOpen(false);
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  useEffect(() => {
    document.title = `${formatTime(seconds)} • ${activeTimerMode}`;
  }, [seconds, activeTimerMode]);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col gap-3 md:flex-row">
          {timerOptions.map((option) => (
            <Button
              key={option.title}
              size={"lg"}
              variant={activeTimerMode === option.title ? "default" : "outline"}
              className="rounded-full lowercase"
              onClick={() => setParam("timerMode", option.title)}
            >
              {option.title}
            </Button>
          ))}
        </div>
        <p className="text-7xl font-bold tabular-nums sm:text-8xl lg:text-9xl">
          {formatTime(seconds)}
        </p>
        <div className="flex items-center gap-3">
          {!isRunning ? (
            <Button size="lg" onClick={startTimer}>
              <FaPlay className="size-4 opacity-80" /> Start
            </Button>
          ) : (
            <Button size="lg" variant="secondary" onClick={pauseTimer}>
              <FaPause className="size-4 opacity-80" /> Pause
            </Button>
          )}

          <Button size="lg" variant="ghost" onClick={resetTimer}>
            <RiResetLeftLine className="size-10" />
          </Button>
        </div>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Alarm Playing</DialogTitle>
          </DialogHeader>
          <p>The timer has ended and the alarm is playing.</p>
          <DialogFooter>
            <Button onClick={stopSound}>Stop Alarm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

// const MainTimer = () => {
//   const { getParam, setParam } = useParams();
//   const activeTimerMode = getParam("timerMode") || "Pomodoro";

//   const timerOptions = [
//     { title: "Pomodoro", time: 0.05 },
//     { title: "Short Break", time: 5 },
//     { title: "Long Break", time: 10 },
//   ];

//   const selectedTimer = timerOptions.find(
//     (t) => t.title === activeTimerMode,
//   ) || { time: 15 };

//   const initialSeconds = selectedTimer.time * 60;

//   const [seconds, setSeconds] = useState(initialSeconds);
//   const [isRunning, setIsRunning] = useState(false);

//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   // Sound to play when timer ends
//   const endSound = useRef(new Audio("/assets/sounds/alarm.mp3"));

//   useEffect(() => {
//     resetTimer();
//   }, [activeTimerMode]);

//   useEffect(() => {
//     if (isRunning) {
//       intervalRef.current = setInterval(() => {
//         setSeconds((prev) => {
//           if (prev <= 1) {
//             clearInterval(intervalRef.current!);
//             endSound.current.play(); // Play sound
//             endSound.current.volume = 0.5;
//             endSound.current.loop = true;

//             resetTimer(); // Reset timer automatically
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//     }

//     return () => clearInterval(intervalRef.current!);
//   }, [isRunning]);

//   useEffect(() => {
//     document.title = `${formatTime(seconds)} • ${activeTimerMode}`;
//   }, [seconds, activeTimerMode]);

//   const resetTimer = () => {
//     clearInterval(intervalRef.current!);
//     setSeconds(initialSeconds);
//     setIsRunning(false);
//   };

//   const startTimer = () => {
//     if (seconds > 0) setIsRunning(true);
//   };

//   const pauseTimer = () => {
//     clearInterval(intervalRef.current!);
//     setIsRunning(false);
//   };

//   const formatTime = (sec: number) => {
//     const m = Math.floor(sec / 60);
//     const s = sec % 60;
//     return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
//   };

//   return (
//     <div className="flex flex-col items-center justify-center gap-12">
//       <div className="flex flex-col gap-3 md:flex-row">
//         {timerOptions.map((option) => (
//           <Button
//             key={option.title}
//             size={"lg"}
//             variant={activeTimerMode === option.title ? "default" : "outline"}
//             className="rounded-full lowercase"
//             onClick={() => setParam("timerMode", option.title)}
//           >
//             {option.title}
//           </Button>
//         ))}
//       </div>
//       <p className="text-7xl font-bold tabular-nums sm:text-8xl lg:text-9xl">
//         {formatTime(seconds)}
//       </p>
//       <div className="flex items-center gap-3">
//         {!isRunning ? (
//           <Button size="lg" onClick={startTimer}>
//             <FaPlay className="size-4 opacity-80" /> Start
//           </Button>
//         ) : (
//           <Button size="lg" variant="secondary" onClick={pauseTimer}>
//             <FaPause className="size-4 opacity-80" />
//             Pause
//           </Button>
//         )}

//         <Button size="lg" variant="ghost" onClick={resetTimer}>
//           <RiResetLeftLine className="size-10" />
//         </Button>
//       </div>
//     </div>
//   );
// };
