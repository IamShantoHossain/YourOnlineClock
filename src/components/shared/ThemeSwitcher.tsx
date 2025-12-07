"use client";

import { useTheme } from "next-themes";
import { IoMoon, IoSunny } from "react-icons/io5";
import { Button } from "../ui/button";

export default function ThemeSwitcher() {
  const { setTheme, theme, resolvedTheme } = useTheme();

  const handleThemeSwitch = () => {
    // Use resolvedTheme as fallback for initial render
    const currentTheme = theme || resolvedTheme || "dark";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  // Use resolvedTheme to determine which icon to show
  const currentTheme = theme || resolvedTheme;

  return (
    <div>
      <Button
        size={"icon-sm"}
        variant={"outline"}
        className=""
        onClick={handleThemeSwitch}
      >
        {currentTheme === "light" ? <IoMoon /> : <IoSunny />}
      </Button>
    </div>
  );
}
