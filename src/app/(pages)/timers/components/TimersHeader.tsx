"use client";

import Container from "@/components/global/Container";
import CurrentTime from "@/components/shared/Timers/CurrentTime";
import { H2 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import {
  requestNotificationPermission,
  showNotification,
} from "@/lib/timerNotifications";
import { useTimersSettings } from "@/providers/TimersSettingsProvider";
import {
  Bell,
  BellOff,
  Menu,
  Settings,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
// import { useTheme } from "next-themes"; // Kept for future use
import Image from "next/image";
import { useEffect, useState } from "react";
// import { IoMoon, IoSunny } from "react-icons/io5"; // Kept for future use
import { aestheticPomodoroTimerThemes } from "../aesthetic-pomodoro-timer/constants";

const TimersHeader = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Use the unified settings provider
  const {
    notifications,
    sound,
    setNotifications,
    setSound,
    showMilliseconds,
    setShowMilliseconds,
    activeBackgroundTheme,
    setActiveBackgroundTheme,
  } = useTimersSettings();

  // Check which page is active
  const isStopwatchPage = pathname.includes("stopwatch");
  const isPomodoroPage = pathname.includes("aesthetic-pomodoro-timer");

  // Test notification function
  const handleTestNotification = async () => {
    const hasPermission = await requestNotificationPermission();
    if (hasPermission) {
      if (notifications) {
        showNotification("Test Notification", {
          body: "Your notifications are working perfectly! 🎉",
          tag: "test-notification",
        });
      }
    } else {
      alert(
        "Please allow notifications in your browser settings to use this feature.",
      );
    }
  };

  // Scroll effect for header blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Pomodoro", href: "aesthetic-pomodoro-timer" },
    { title: "Stopwatch", href: "stopwatch" },
    { title: "Timer", href: "multi-timer" },
  ];

  const utilityLinks = [{ title: "Contact", href: "/contact" }];

  const isActiveLink = (href: string) => {
    return pathname.includes(href);
  };

  return (
    <div
      className={cn(
        "animate-in fade-in-40 sticky top-0 left-0 z-20 m-auto flex w-full items-center justify-between p-4 transition-all duration-300",
        isScrolled ? "backdrop-blur" : "",
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Left Side: Logo + Nav Links */}
        <div className="flex items-center gap-4 sm:gap-8">
          <Link href="/timers/aesthetic-pomodoro-timer">
            <H2 className="from-primary to-primary/95 bg-linear-to-r bg-clip-text text-base font-black text-transparent sm:text-xl md:text-2xl">
              YourClockOnline
            </H2>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex gap-6">
              {navLinks.map((link) => {
                const isActive = isActiveLink(link.href);
                return (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-foreground text-base font-medium underline-offset-2 transition-all duration-200 hover:underline",
                        isActive && "text-primary font-semibold underline",
                      )}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Right Side: Utility Links, Current Time & Settings */}
        <div className="hidden items-center gap-4 md:flex">
          <CurrentTime />

          {/* Settings Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Settings className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[95vw] sm:w-[400px] sm:max-w-md">
              <SheetHeader>
                <SheetTitle>
                  {isStopwatchPage ? "Stopwatch" : "Timer"} Settings
                </SheetTitle>
                <SheetDescription>
                  Customize your {isStopwatchPage ? "stopwatch" : "timer"}{" "}
                  experience
                </SheetDescription>
              </SheetHeader>

              <div className="mt-4 max-h-[calc(100vh-120px)] space-y-6 overflow-y-auto px-4 pr-2">
                {/* Pomodoro Timer Settings */}
                {isPomodoroPage && (
                  <>
                    {/* Notifications */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold">Notifications</h3>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-2">
                          {notifications ? (
                            <Bell className="h-4 w-4 shrink-0" />
                          ) : (
                            <BellOff className="h-4 w-4 shrink-0" />
                          )}
                          <Label
                            htmlFor="notifications"
                            className="cursor-pointer text-sm leading-tight"
                          >
                            Enable Notifications
                          </Label>
                        </div>
                        <Switch
                          id="notifications"
                          checked={notifications}
                          onCheckedChange={setNotifications}
                        />
                      </div>
                    </div>

                    <Separator />

                    {/* Sound */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold">Sound</h3>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-2">
                          {sound ? (
                            <Volume2 className="h-4 w-4 shrink-0" />
                          ) : (
                            <VolumeX className="h-4 w-4 shrink-0" />
                          )}
                          <Label
                            htmlFor="sound"
                            className="cursor-pointer text-sm leading-tight"
                          >
                            Enable Sound Alerts
                          </Label>
                        </div>
                        <Switch
                          id="sound"
                          checked={sound}
                          onCheckedChange={setSound}
                        />
                      </div>
                    </div>

                    <Separator />

                    {/* Test Notification */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold">Test Settings</h3>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={handleTestNotification}
                      >
                        🔔 Test Notification
                      </Button>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        Click to test your notification and sound settings. Make
                        sure to allow notifications when prompted.
                      </p>
                    </div>
                  </>
                )}

                {/* Stopwatch Settings */}
                {isStopwatchPage && (
                  <>
                    {/* Background Themes */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold">
                        Background Theme
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {[...aestheticPomodoroTimerThemes.slice(0, 6)].map(
                          (theme) => (
                            <Button
                              key={theme.name}
                              variant="ghost"
                              className={cn(
                                "h-28 overflow-hidden rounded-md p-0",
                                theme.name === activeBackgroundTheme.name
                                  ? "ring-primary ring-2"
                                  : "",
                              )}
                              onClick={() => {
                                setActiveBackgroundTheme(theme);
                                console.log("Selected theme:", theme.name);
                              }}
                            >
                              <Image
                                src={theme.backgroundImage}
                                height={200}
                                width={200}
                                alt={theme.name}
                                className="h-28 object-cover"
                              />
                            </Button>
                          ),
                        )}
                      </div>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        Choose a background theme for your stopwatch
                      </p>
                    </div>

                    <Separator />

                    {/* Show Milliseconds */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold">Display</h3>
                      <div className="flex items-start justify-between gap-4">
                        <Label
                          htmlFor="show-milliseconds"
                          className="cursor-pointer text-sm leading-tight"
                        >
                          Show Milliseconds
                        </Label>
                        <Switch
                          id="show-milliseconds"
                          checked={showMilliseconds}
                          onCheckedChange={setShowMilliseconds}
                        />
                      </div>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        Toggle millisecond precision in the stopwatch display
                      </p>
                    </div>
                  </>
                )}

                <Separator />

                {/* Theme Mode - Kept for future use */}
                {/* <div className="space-y-3">
                  <h3 className="text-sm font-semibold">Appearance</h3>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <Label htmlFor="theme-mode" className="cursor-pointer text-sm leading-tight">
                        Theme Mode
                      </Label>
                      <p className="text-muted-foreground text-xs">
                        Currently using <span className="font-semibold capitalize">{currentTheme}</span> mode
                      </p>
                    </div>
                    <Button id="theme-mode" size="icon" variant="outline" onClick={handleThemeSwitch}>
                      {currentTheme === "light" ? <IoMoon className="h-4 w-4" /> : <IoSunny className="h-4 w-4" />}
                    </Button>
                  </div>
                </div> */}

                <Separator />

                {/* Website Links */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold">Resources</h3>
                  <div className="space-y-2">
                    <Link
                      href="/contact"
                      className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
                    >
                      <span>📧</span>
                      Contact Us
                    </Link>
                    <Link
                      href="/privacy-policy"
                      className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
                    >
                      <span>🔒</span>
                      Privacy Policy
                    </Link>
                    <Link
                      href="/terms-of-service"
                      className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
                    >
                      <span>📜</span>
                      Terms of Service
                    </Link>
                  </div>
                </div>

                <Separator />

                {/* Info */}
                <div className="bg-muted text-muted-foreground rounded-lg p-4 text-sm">
                  Settings are saved automatically and will persist across
                  sessions.
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Mobile Menu Button and Theme Switcher */}
        <div className="flex items-center gap-2 sm:gap-3 md:hidden">
          <button
            onClick={() => setOpen(true)}
            className="text-foreground hover:bg-muted rounded-md p-1 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} className="sm:h-7 sm:w-7" />
          </button>
        </div>

        {/* Mobile Drawer */}
        {open && (
          <div className="md:hidden">
            <div className="bg-background/90 fixed inset-0 z-100 flex h-screen flex-col shadow-xl backdrop-blur-lg">
              <button
                onClick={() => setOpen(false)}
                className="hover:bg-muted absolute top-4 right-4 z-10 rounded-full p-2 transition-colors sm:top-6 sm:right-6"
                aria-label="Close menu"
              >
                <X size={28} className="sm:h-8 sm:w-8" />
              </button>

              {/* Mobile Menu Content */}
              <div className="flex h-full flex-col justify-between overflow-y-auto p-4 pt-16 sm:p-6 sm:pt-20">
                {/* Navigation Links */}
                <nav className="shrink-0">
                  <ul className="flex flex-col gap-4 sm:gap-5">
                    {navLinks.map((link) => {
                      const isActive = isActiveLink(link.href);
                      return (
                        <li key={link.title}>
                          <Link
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "hover:text-primary text-xl font-medium transition-colors sm:text-2xl md:text-3xl",
                              isActive
                                ? "text-primary font-semibold underline underline-offset-4"
                                : "",
                            )}
                          >
                            {link.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Mobile Utilities */}
                <div className="shrink-0 space-y-4 border-t pt-5 sm:space-y-5 sm:pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Current Time</span>
                    <CurrentTime />
                  </div>

                  {/* Mobile Settings */}
                  <Separator />
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold">Settings</h3>

                    {/* Theme Mode - Kept for future use */}
                    {/* <div className="flex items-center justify-between gap-4">
                      <Label htmlFor="mobile-theme" className="cursor-pointer text-sm">Theme Mode ({currentTheme})</Label>
                      <Button id="mobile-theme" size="icon" variant="outline" onClick={handleThemeSwitch}>
                        {currentTheme === "light" ? <IoMoon className="h-4 w-4" /> : <IoSunny className="h-4 w-4" />}
                      </Button>
                    </div> */}

                    {isPomodoroPage && (
                      <>
                        <div className="flex items-center justify-between gap-4">
                          <Label
                            htmlFor="mobile-notifications"
                            className="cursor-pointer text-sm"
                          >
                            Notifications
                          </Label>
                          <Switch
                            id="mobile-notifications"
                            checked={notifications}
                            onCheckedChange={setNotifications}
                          />
                        </div>

                        <div className="flex items-center justify-between gap-4">
                          <Label
                            htmlFor="mobile-sound"
                            className="cursor-pointer text-sm"
                          >
                            Sound Alerts
                          </Label>
                          <Switch
                            id="mobile-sound"
                            checked={sound}
                            onCheckedChange={setSound}
                          />
                        </div>
                      </>
                    )}

                    {isStopwatchPage && (
                      <div className="flex items-center justify-between gap-4">
                        <Label
                          htmlFor="mobile-milliseconds"
                          className="cursor-pointer text-sm"
                        >
                          Show Milliseconds
                        </Label>
                        <Switch
                          id="mobile-milliseconds"
                          checked={showMilliseconds}
                          onCheckedChange={setShowMilliseconds}
                        />
                      </div>
                    )}
                  </div>

                  {/* Website Links */}
                  <Separator />
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold">Resources</h3>
                    <div className="space-y-2">
                      <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
                      >
                        <span>📧</span>
                        Contact Us
                      </Link>
                      <Link
                        href="/privacy-policy"
                        onClick={() => setOpen(false)}
                        className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
                      >
                        <span>🔒</span>
                        Privacy Policy
                      </Link>
                      <Link
                        href="/terms-of-service"
                        onClick={() => setOpen(false)}
                        className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
                      >
                        <span>📜</span>
                        Terms of Service
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default TimersHeader;
