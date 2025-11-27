import lightBackgroundImage from "@/assets/images/aesthetic-pomodoro-timer/Dark-Aesthetic.jpg";

export const aestheticPomodoroTimerThemes = [
  {
    name: "Dark Aesthetic",
    backgroundImage: lightBackgroundImage,
    textColor: "#ffffff",
  },
];

export type AestheticPomodoroTimerTheme =
  (typeof aestheticPomodoroTimerThemes)[0];
