import warmSunset from "@/assets/images/aesthetic-pomodoro-timer/3ce5f595f1a64dc1c1ee.jpg";
import softPurple from "@/assets/images/aesthetic-pomodoro-timer/9f1e88521119e2e349d8.jpg";
import neonWave from "@/assets/images/aesthetic-pomodoro-timer/c629a813b3561cfa40dd.jpg";
import cyberBlue from "@/assets/images/aesthetic-pomodoro-timer/cc967d65f9f43ddff7f7.jpg";

export const aestheticPomodoroTimerThemes = [
  {
    name: "Warm Sunset",
    backgroundImage: warmSunset,
    primaryColor: "#e07960",
    textColor: "#ffffff",
  },
  {
    name: "Soft Purple Dream",
    backgroundImage: softPurple,
    primaryColor: "#b28dff",
    textColor: "#ffffff",
  },
  {
    name: "Neon Wave",
    backgroundImage: neonWave,
    primaryColor: "#ff3cac",
    textColor: "#ffffff",
  },
  {
    name: "Cyber Blue",
    backgroundImage: cyberBlue,
    primaryColor: "#4da6ff",
    textColor: "#ffffff",
  },
];

export type AestheticPomodoroTimerTheme =
  (typeof aestheticPomodoroTimerThemes)[0];
