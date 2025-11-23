"use client";

import { useTheme } from "next-themes";
import { IoMoon, IoSunny } from "react-icons/io5";
import { Button } from "../ui/button";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  const handleThemeSwitch = () => {
    const newTheme = theme == "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div>
      <Button
        size={"icon-sm"}
        variant={"outline"}
        className=""
        onClick={handleThemeSwitch}
      >
        {theme == "light" ? <IoMoon /> : <IoSunny />}
      </Button>
    </div>
  );
}
