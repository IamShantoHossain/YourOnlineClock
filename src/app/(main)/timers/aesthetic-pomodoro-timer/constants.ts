import sunsetImage from "@/assets/images/aesthetic-pomodoro-timer/Dark-Aesthetic.jpg";

export const aestheticPomodoroTimerThemes = [
  {
    name: "Sunset",
    backgroundImage: sunsetImage,
    primaryColor: "#e07960",
    textColor: "#ffffff",
  },
  {
    name: "Ocean",
    backgroundImage: "/images/ocean.jpg",
    primaryColor: "#4da6ff",
    textColor: "#ffffff",
  },
  {
    name: "Forest",
    backgroundImage: "/images/forest.jpg",
    primaryColor: "#2ecc71",
    textColor: "#ffffff",
  },
];

export type AestheticPomodoroTimerTheme =
  (typeof aestheticPomodoroTimerThemes)[0];
