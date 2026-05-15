import Container from "@/components/global/Container";
import Footer from "@/components/shared/Footer";
import { Card } from "@/components/ui/card";
import { TimersSettingsProvider } from "@/providers/TimersSettingsProvider";
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaRegClock, FaStopwatch } from "react-icons/fa";
import { aestheticPomodoroTimerThemes } from "./(timers)/aesthetic-pomodoro-timer/constants";
import TimersHeader from "./(timers)/components/TimersHeader";

const timers = [
  {
    title: "Aesthetic Pomodoro Timer",
    description:
      "Boost productivity with the proven Pomodoro Technique. Work in focused 25-minute intervals with beautiful themes.",
    icon: FaClock,
    href: "/aesthetic-pomodoro-timer",
    features: [
      "25-minute focus sessions",
      "Customizable breaks",
      "Multiple aesthetic themes",
      "Sound notifications",
    ],
    color: "text-red-500",
  },
  {
    title: "Stopwatch",
    description:
      "Track time with millisecond precision. Perfect for workouts, cooking, studying, and sports.",
    icon: FaStopwatch,
    href: "/stopwatch",
    features: [
      "Millisecond precision",
      "Start/Pause/Reset",
      "Beautiful themes",
      "Works offline",
    ],
    color: "text-blue-500",
  },
  {
    title: "Multi-Timer",
    description:
      "Run unlimited timers simultaneously. Ideal for managing multiple tasks, cooking, and interval training.",
    icon: FaRegClock,
    href: "/multi-timer",
    features: [
      "Unlimited timers",
      "Custom durations",
      "Preset timers",
      "Individual controls",
    ],
    color: "text-purple-500",
  },
];

const Page = () => {
  return (
    <TimersSettingsProvider>
      <div className="relative space-y-3">
        <TimersHeader />
        <Container className="z-10 min-h-screen space-y-12 py-16">
          <Image
            src={aestheticPomodoroTimerThemes[2].backgroundImage}
            height={1000}
            width={1000}
            placeholder="blur"
            alt={aestheticPomodoroTimerThemes[2].name}
            className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-screen object-cover"
          />
          {/* Hero Section */}
          <section className="space-y-4 text-center">
            <h1 className="text-4xl font-bold md:text-6xl">YourOnlineClock</h1>
            <p className="mx-auto max-w-2xl text-lg opacity-90 md:text-xl">
              Beautiful, free online timers for every need. Track time with
              style using our aesthetic Pomodoro timer, precision stopwatch, and
              powerful multi-timer at youronlineclock.com.
            </p>
          </section>

          {/* Timers Grid */}
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {timers.map((timer) => {
              const Icon = timer.icon;
              return (
                <Link key={timer.href} href={timer.href}>
                  <Card className="group h-full cursor-pointer p-6 transition-all hover:scale-105 hover:shadow-lg">
                    <div className="space-y-4">
                      {/* Icon */}
                      <div className={`${timer.color} text-5xl`}>
                        <Icon />
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold group-hover:underline">
                          {timer.title}
                        </h2>
                        <p className="text-muted-foreground">
                          {timer.description}
                        </p>
                      </div>

                      {/* Features */}
                      <ul className="space-y-1.5">
                        {timer.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-muted-foreground flex items-center gap-2 text-sm"
                          >
                            <span className={`${timer.color}`}>✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </section>

          <section className="space-y-6">
            <h2 className="text-center text-3xl font-bold">
              Why Choose YourOnlineClock?
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="p-6 text-center">
                <div className="space-y-2">
                  <div className="text-4xl">🎨</div>
                  <h3 className="text-lg font-semibold">Beautiful Design</h3>
                  <p className="text-muted-foreground text-sm">
                    Stunning aesthetic themes that make time tracking enjoyable
                  </p>
                </div>
              </Card>

              <Card className="p-6 text-center">
                <div className="space-y-2">
                  <div className="text-4xl">⚡</div>
                  <h3 className="text-lg font-semibold">Fast & Free</h3>
                  <p className="text-muted-foreground text-sm">
                    No downloads, no signup. Start timing instantly at
                    youronlineclock.com
                  </p>
                </div>
              </Card>

              <Card className="p-6 text-center">
                <div className="space-y-2">
                  <div className="text-4xl">📱</div>
                  <h3 className="text-lg font-semibold">Works Everywhere</h3>
                  <p className="text-muted-foreground text-sm">
                    Use on any device - desktop, tablet, or mobile. Works
                    offline too
                  </p>
                </div>
              </Card>

              <Card className="p-6 text-center">
                <div className="space-y-2">
                  <div className="text-4xl">🎵</div>
                  <h3 className="text-lg font-semibold">Fully Customizable</h3>
                  <p className="text-muted-foreground text-sm">
                    Multiple themes, sound options, and personalized settings
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* Why Choose YourOnlineClock */}
        </Container>
        <div>
          <div className="bg-background py-10">
            <Container className="space-y-6">
              {/* SEO Content */}
              <section className="space-y-4">
                <Card className="p-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">
                      Free Online Timers for Every Need
                    </h2>
                    <p className="text-muted-foreground">
                      YourOnlineClock offers a suite of beautiful, free online
                      timers designed for productivity, fitness, cooking,
                      studying, and more. Whether you need a Pomodoro timer to
                      boost focus, a stopwatch for precise timing, or a
                      multi-timer to juggle multiple tasks, we&apos;ve got you
                      covered.
                    </p>
                    <p className="text-muted-foreground">
                      Our timers feature stunning aesthetic themes, work offline
                      after loading, and are completely free with no hidden
                      costs or subscriptions. Join thousands of users who trust
                      youronlineclock.com for their daily timing needs.
                      Experience the perfect blend of functionality and
                      beautiful design today.
                    </p>
                  </div>
                </Card>
              </section>
            </Container>
          </div>

          <Footer />
        </div>
      </div>
    </TimersSettingsProvider>
  );
};

export default Page;
