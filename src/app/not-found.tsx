"use client";
import theme1Img from "@/assets/images/aesthetic-pomodoro-timer/theme6.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaClock, FaHome } from "react-icons/fa";
import { MdTimer } from "react-icons/md";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={theme1Img}
        alt="Background"
        fill
        placeholder="blur"
        className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen object-cover blur-2xl brightness-50 contrast-125"
        priority
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
        <Card className="border-border/50 bg-card/70 overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="p-8 sm:p-12">
            {/* 404 Animation */}
            <div className="mb-8 text-center">
              <div className="relative inline-block">
                <h1 className="from-primary via-primary/80 to-primary/60 bg-gradient-to-r bg-clip-text text-8xl font-black text-transparent sm:text-9xl">
                  404
                </h1>
                <div className="absolute -top-4 -right-4 animate-bounce">
                  <div className="bg-primary/20 rounded-full p-3 shadow-lg backdrop-blur-sm">
                    <MdTimer className="text-primary h-8 w-8 sm:h-10 sm:w-10" />
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mb-8 space-y-3 text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Page Not Found
              </h2>
              <p className="text-muted-foreground mx-auto max-w-md text-base sm:text-lg">
                Oops! The page you&apos;re looking for seems to have wandered
                off. It might have been moved, deleted, or never existed.
              </p>
            </div>

            {/* Divider */}
            <div className="bg-border/50 my-8 h-px w-full" />

            {/* Quick Links */}
            <div className="mb-8 space-y-3">
              <h3 className="text-muted-foreground text-center text-sm font-semibold tracking-wider uppercase">
                Popular Destinations
              </h3>
              <div className="grid gap-3 sm:grid-cols-3">
                <Link href="/" className="group">
                  <Card className="border-border/50 bg-card/40 hover:bg-card/60 hover:border-primary/50 cursor-pointer p-4 text-center transition-all hover:shadow-lg">
                    <FaClock className="text-primary mx-auto mb-2 h-6 w-6 transition-transform group-hover:scale-110" />
                    <p className="text-sm font-medium">Home</p>
                  </Card>
                </Link>
                <Link href="/timers/aesthetic-pomodoro-timer" className="group">
                  <Card className="border-border/50 bg-card/40 hover:bg-card/60 hover:border-primary/50 cursor-pointer p-4 text-center transition-all hover:shadow-lg">
                    <MdTimer className="text-primary mx-auto mb-2 h-6 w-6 transition-transform group-hover:scale-110" />
                    <p className="text-sm font-medium">Pomodoro</p>
                  </Card>
                </Link>
                <Link href="/timers/stopwatch" className="group">
                  <Card className="border-border/50 bg-card/40 hover:bg-card/60 hover:border-primary/50 cursor-pointer p-4 text-center transition-all hover:shadow-lg">
                    <FaClock className="text-primary mx-auto mb-2 h-6 w-6 transition-transform group-hover:scale-110" />
                    <p className="text-sm font-medium">Stopwatch</p>
                  </Card>
                </Link>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/">
                <Button
                  size="lg"
                  className="flex-1 shadow-lg transition-transform hover:scale-105"
                >
                  <FaHome className="mr-2 h-4 w-4" />
                  Go to Homepage
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-border/50 bg-background/50 hover:bg-background/70 flex-1 backdrop-blur-sm transition-transform hover:scale-105"
                onClick={() => window.history.back()}
              >
                <FaArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
            </div>

            {/* Help Text */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground text-xs sm:text-sm">
                If you believe this is an error, please contact support or try
                refreshing the page.
              </p>
            </div>
          </div>
        </Card>

        {/* Decorative Elements */}
        <div className="bg-primary/10 pointer-events-none absolute top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      </div>
    </div>
  );
}
