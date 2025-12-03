"use client";

import Container from "@/components/global/Container";
import { Button } from "@/components/ui/button";
import { H2 } from "@/components/ui/typography";
import { useLocalStorageState } from "@/hooks/useLocalStoreState";

export type CountdownItem = {
  id: string;
  title: string;
  targetTime: number;
  paused: boolean;
  remaining: number;
  totalDuration: number;
  isAlarmPlaying: boolean;
};

const CountdownDisplay = () => {
  const [counters, setCounters] = useLocalStorageState<CountdownItem[]>(
    "countdown-items",
    {
      defaultValue: [
        {
          id: crypto.randomUUID(),
          title: "Morning Workout",
          targetTime: Date.now() + 30 * 60 * 1000,
          paused: true,
          totalDuration: 1 * 60 * 1000,
          remaining: 0.1 * 60 * 1000,
          isAlarmPlaying: false,
        },
        {
          id: crypto.randomUUID(),
          title: "Lunch Break",
          targetTime: Date.now() + 2 * 60 * 60 * 1000,
          paused: true,
          totalDuration: 2 * 60 * 60 * 1000,
          remaining: 2 * 60 * 60 * 1000,
          isAlarmPlaying: false,
        },
      ],
    },
  );

  const clearTimers = () => {};

  const deleteCounter = (id: string) => {
    const newCounters = counters.filter((counter) => counter.id != id);

    setCounters(newCounters);
  };

  const togglePause = (id: string) => {
    setCounters(
      counters.map((c) => {
        if (c.id !== id) return c;
        if (c.paused) {
          // Resume
          return { ...c, paused: false, targetTime: Date.now() + c.remaining };
        } else {
          // Pause
          return { ...c, paused: true, remaining: c.targetTime! - Date.now() };
        }
      }),
    );
  };

  const handleReset = (id: string) => {
    setCounters(
      counters.map((c) => {
        if (c.id !== id) return c;
        return { ...c, paused: true, remaining: c.totalDuration };
      }),
    );
  };

  const updateRemaining = (id: string, newRemaining: number) => {
    setCounters(
      counters.map((c) =>
        c.id === id ? { ...c, remaining: newRemaining } : c,
      ),
    );
  };
  const handleEnd = (id: string) => {
    // setCounters((prev) =>
    //   prev.map((c) => {
    //     if (c.id !== id) return c;
    //     // If already playing, do nothing
    //     if (c.isAlarmPlaying) return c;
    //     // Create or reuse audio
    //     const audio = c.audio || new Audio("/audios/alarm.wav");
    //     audio.loop = true;
    //     audio
    //       .play()
    //       .catch(() => console.log("User interaction required to play audio"));
    //     return { ...c, isAlarmPlaying: true, audio };
    //   }),
    // );
  };

  return (
    <Container className="space-y-5">
      <H2 className="text-center">Countdown Clocks</H2>
      <Button onClick={clearTimers}>dsf</Button>
      {/* <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {!isLoading
          ? counters.map((counter) => (
              <SingleCounter
                key={counter.id}
                counter={counter}
                onPause={() => togglePause(counter.id)}
                onReset={() => handleReset(counter.id)}
                onDelete={() => deleteCounter(counter.id)}
                handleEnd={() => handleEnd(counter.id)}
                onUpdate={(remaining) => updateRemaining(counter.id, remaining)}
              />
            ))
          : "Loading"}
      </div> */}
    </Container>
  );
};

export default CountdownDisplay;
