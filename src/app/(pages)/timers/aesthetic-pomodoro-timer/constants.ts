// New placeholder imports — update with your real images
import theme9Img from "@/assets/images/aesthetic-pomodoro-timer/theme1.webp";
import theme4Img from "@/assets/images/aesthetic-pomodoro-timer/theme2.webp";
import theme3Img from "@/assets/images/aesthetic-pomodoro-timer/theme3.webp";
import theme2Img from "@/assets/images/aesthetic-pomodoro-timer/theme4.webp";
import theme8Img from "@/assets/images/aesthetic-pomodoro-timer/theme5.webp";
import theme1Img from "@/assets/images/aesthetic-pomodoro-timer/theme6.jpg";
import theme7Img from "@/assets/images/aesthetic-pomodoro-timer/theme7.jpg";
import theme5Img from "@/assets/images/aesthetic-pomodoro-timer/theme8.jpg";
import theme6Img from "@/assets/images/aesthetic-pomodoro-timer/theme9.jpg";

export const aestheticPomodoroTimerThemes = [
  // -------- New themes --------
  {
    name: "Theme 1",
    backgroundImage: theme1Img,
    primaryColor: "#ff6b6b",
    textColor: "#ffffff",
  },
  {
    name: "Theme 2",
    backgroundImage: theme2Img,
    primaryColor: "#ffd93d",
    textColor: "#000000",
  },
  {
    name: "Theme 3",
    backgroundImage: theme3Img,
    primaryColor: "#6bcffd",
    textColor: "#ffffff",
  },
  {
    name: "Theme 4",
    backgroundImage: theme4Img,
    primaryColor: "#7d5fff",
    textColor: "#ffffff",
  },
  {
    name: "Theme 5",
    backgroundImage: theme5Img,
    primaryColor: "#20bf6b",
    textColor: "#ffffff",
  },
  {
    name: "Theme 6",
    backgroundImage: theme6Img,
    primaryColor: "#ff9f1c",
    textColor: "#000000",
  },
  {
    name: "Theme 7",
    backgroundImage: theme7Img,
    primaryColor: "#2ec4b6",
    textColor: "#ffffff",
  },
  {
    name: "Theme 8",
    backgroundImage: theme8Img,
    primaryColor: "#ef476f",
    textColor: "#ffffff",
  },
  {
    name: "Theme 9",
    backgroundImage: theme9Img,
    primaryColor: "#118ab2",
    textColor: "#ffffff",
  },
];

export type AestheticPomodoroTimerTheme =
  (typeof aestheticPomodoroTimerThemes)[0];
