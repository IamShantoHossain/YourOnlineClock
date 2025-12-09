"use client";
import { P } from "@/components/ui/typography";
import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // update every second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  // Format time based on user's locale (automatically handles 12/24 hour format)
  const formattedTime = time.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: undefined, // Let the browser decide based on locale
  });

  return <P className="font-semibold tabular-nums">{formattedTime}</P>;
};

export default CurrentTime;
