"use client";

import Image from "next/image";
import { useState } from "react";
import { aestheticPomodoroTimerThemes } from "../constants";
import MainTImer from "./MainTImer";

const AstaticPomodoroTimer = () => {
  const [activeTheme, setActiveTheme] = useState(
    aestheticPomodoroTimerThemes[0],
  );

  return (
    <div className="z-10 flex flex-1 items-center justify-center">
      <div>
        <Image
          src={activeTheme.backgroundImage}
          fill
          placeholder="blur"
          alt=""
          className="pointer-events-none -z-10 h-svh w-svw opacity-50"
        />
      </div>

      <MainTImer theme={activeTheme} />
    </div>
  );
};

export default AstaticPomodoroTimer;
