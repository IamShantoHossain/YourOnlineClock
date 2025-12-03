"use client";

import { Button } from "@/components/ui/button";
import { JSX } from "react";
import { FaGear } from "react-icons/fa6";

export const SettingsModal = ({}: {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSetting, setActiveSetting] = useState("Theme");

  const SIDEBAR_LIST = [
    {
      title: "Theme",
      component: <ThemesSettings />,
    },
    { title: "Sounds", component: <div>Sound Settings</div> },
    { title: "Notifications", component: <div>Notification Settings</div> },
  ];

  return (
    <>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant={"ghost"}>
              <FaGear className="size-8" />
            </Button>
          </DialogTrigger>
          <DialogContent className="flex">
            <DialogSidebar
              activeSetting={activeSetting}
              changePage={(page) => setActiveSetting(page)}
              SIDEBAR_LIST={SIDEBAR_LIST}
            />
            <div>
              {
                SIDEBAR_LIST.find((item) => item.title === activeSetting)
                  ?.component
              }
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};

const DialogSidebar = ({
  SIDEBAR_LIST,
  activeSetting,
  changePage,
}: {
  SIDEBAR_LIST: {
    title: string;
    component: JSX.Element;
  }[];
  activeSetting: string;
  changePage: (title: string) => void;
}) => {
  return (
    <div className="flex flex-col items-start gap-0">
      {SIDEBAR_LIST.map((item) => (
        <button
          key={item.title}
          className={cn(
            "py-1",
            activeSetting === item.title &&
              "underline-primary cursor-pointer underline underline-offset-2",
          )}
          onClick={() => changePage(item.title)}
        >
          <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
        </button>
      ))}
    </div>
  );
};

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams } from "@/hooks/useParams";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { aestheticPomodoroTimerThemes } from "../constants";

export const ThemesSettings = ({}: {}) => {
  const { setParam } = useParams();
  const themes = aestheticPomodoroTimerThemes;

  return (
    <div>
      <Select onValueChange={(value) => setParam("theme", value)}>
        <SelectTrigger className="w-max">
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Themes</SelectLabel>
            {themes.map((theme) => (
              <SelectItem key={theme.name} value={theme.name}>
                {theme.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
