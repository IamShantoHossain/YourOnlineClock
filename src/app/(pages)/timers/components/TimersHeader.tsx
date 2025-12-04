"use client";

import Container from "@/components/global/Container";
import { H2 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const TimersHeader = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { title: "Pomodoro", href: "aesthetic-pomodoro-timer" },
    { title: "Countdown", href: "countdown" },
    { title: "Timer", href: "stopwatch" },
  ];

  const isActiveLink = (href: string) => {
    return pathname.includes(href);
  };

  return (
    <div className="animate-in fade-in-40 fixed top-0 left-0 z-20 m-auto flex w-full items-center justify-between from-35% p-4 duration-500">
      <Container className="flex items-center justify-between">
        <H2 className="from-primary to-primary/95 bg-linear-to-r bg-clip-text font-black text-transparent">
          YourClockOnline
        </H2>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-4">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);
              return (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-foreground text-lg font-medium underline-offset-2 transition-all duration-200 hover:underline",
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="text-foreground md:hidden"
        >
          <Menu size={28} />
        </button>

        {/* Mobile Drawer */}
        {open && (
          <div className="md:hidden">
            <div className="bg-background/20 fixed top-0 right-0 flex h-screen w-screen flex-col items-center justify-center text-center shadow-xl backdrop-blur-lg">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-7 right-7"
              >
                <X size={50} />
              </button>

              <nav>
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link) => {
                    const isActive = isActiveLink(link.href);
                    return (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "text-4xl font-medium transition-colors",
                            isActive
                              ? "font-semibold underline underline-offset-4"
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
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default TimersHeader;
