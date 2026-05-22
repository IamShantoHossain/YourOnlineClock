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
      "Boost productivity with the tested Pomodoro technique. Work in focused 25-minute intervals with attractive themes.",
    icon: FaClock,
    href: "/aesthetic-pomodoro-timer",
    features: [
      "25-minute concentration intervals",
      "Adjustable breaks",
      "Various stylish themes",
      "Audio alerts",
    ],
    color: "text-red-500",
  },
  {
    title: "Stopwatch",
    description:
      "Track time with millisecond accuracy. Ideal for workouts, cooking, studying, and sports.",
    icon: FaStopwatch,
    href: "/stopwatch",
    features: [
      "Millisecond accuracy",
      "Start / Pause / Reset",
      "Works without internet",
    ],
    color: "text-blue-500",
  },
  {
    title: "Multi-Timer",
    description:
      "Run unlimited timers simultaneously. Suitable for managing multiple tasks, cooking, and interval training.",
    icon: FaRegClock,
    href: "/multi-timer",
    features: [
      "Unlimited timers",
      "Adjustable time settings",
      "Pre-made timers",
      "Separate controls",
    ],
    color: "text-purple-500",
  },
];

const features = [
  {
    icon: "🎨",
    title: "Pretty Design",
    description: "Beautiful stylish designs that make time tracking pleasant.",
  },
  {
    icon: "⚡",
    title: "Fast & Free",
    description:
      "Download-free, registration-free. Start timing immediately at youronlineclock.com.",
  },
  {
    icon: "📱",
    title: "Works Everywhere",
    description:
      "Use on every device - computer, tablet, or smartphone. Functions without internet.",
  },
  {
    icon: "🎵",
    title: "Fully Customizable",
    description: "Many visual styles, sound choices, and custom settings.",
  },
];

const seoContent = {
  title: "Free Online Timers for Every Need",
  paragraphs: [
    "YourOnlineClock provides a suite of attractive, free online timers designed for efficiency, fitness training, cooking, studying, and more. A Pomodoro timer for boosting focus, a stopwatch for precise timing, and a multi-timer for handling multiple tasks are all available.",

    "Our timers include stylish visual designs, work without internet after loading, and are completely free with no extra charges or memberships. Join thousands of users who rely on youronlineclock.com for their daily time needs. Experience the ideal combination of performance and attractive design today.",
  ],
};

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
              Attractive,free online timers for every need.Time is tracked with
              style by its aesthetic Pomodoro timer,precision stopwatch,and
              strong multi-timer at youronlineclock.com.
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
              {features.map((item, idx) => (
                <Card key={idx} className="p-6 text-center">
                  <div className="space-y-2">
                    <div className="text-4xl">{item.icon}</div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
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
                      Free Online for Every Need
                    </h2>
                    <p className="text-muted-foreground">{seoContent.title}</p>
                    <p className="text-muted-foreground">
                      {seoContent.paragraphs}
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
