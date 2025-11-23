"use client";
import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // update every second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <p className="font-semibold tabular-nums">{time.toLocaleTimeString()}</p>
  );
};

export default CurrentTime;
