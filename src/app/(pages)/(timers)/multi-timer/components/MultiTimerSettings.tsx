"use client";

import { aestheticPomodoroTimerThemes } from "@/app/(pages)/(timers)/aesthetic-pomodoro-timer/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useTimersSettings } from "@/providers/TimersSettingsProvider";
import { Palette } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const MultiTimerSettings = () => {
  const { activeBackgroundTheme, setActiveBackgroundTheme } =
    useTimersSettings();
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  return (
    <div className="mx-auto w-full max-w-7xl space-y-4 p-4 sm:p-6 lg:px-8 lg:pt-8">
      {/* Theme Selector Button */}
      <div className="flex justify-end">
        <Button
          variant="outline"
          size="default"
          onClick={() => setShowThemeSelector(!showThemeSelector)}
          className="gap-2"
        >
          <Palette className="h-4 w-4" />
          {showThemeSelector ? "Hide Themes" : "Change Theme"}
        </Button>
      </div>

      {/* Theme Selector Grid */}
      {showThemeSelector && (
        <Card className="border-border/50 bg-card/80 backdrop-blur-lg">
          <CardHeader>
            <h3 className="text-lg font-semibold">Background Themes</h3>
            <p className="text-muted-foreground text-sm">
              Choose a background theme for your timers
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {aestheticPomodoroTimerThemes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => {
                    setActiveBackgroundTheme(theme);
                    setShowThemeSelector(false);
                  }}
                  className={cn(
                    "group relative aspect-video overflow-hidden rounded-lg border-2 transition-all hover:scale-105",
                    activeBackgroundTheme.name === theme.name
                      ? "ring-primary border-primary ring-2"
                      : "border-border hover:border-primary/50",
                  )}
                >
                  <Image
                    src={theme.backgroundImage}
                    alt={theme.name}
                    width={200}
                    height={112}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="absolute bottom-1 left-1 text-xs font-medium text-white">
                      {theme.name}
                    </span>
                  </div>
                  {activeBackgroundTheme.name === theme.name && (
                    <div className="bg-primary absolute top-1 right-1 rounded-full p-1">
                      <svg
                        className="h-3 w-3 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
