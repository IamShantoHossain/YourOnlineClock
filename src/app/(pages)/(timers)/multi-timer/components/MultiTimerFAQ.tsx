"use client";

import Container from "@/components/global/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export const MultiTimerFAQ = () => {
  return (
    <Container className="w-full space-y-8 pt-16">
      {/* SEO-Friendly Introduction */}
      <section className="space-y-4">
        <h1 className="text-center text-3xl font-bold md:text-4xl">
          Multi-Timer - YourOnlineClock
        </h1>
        <p className="text-muted-foreground text-center text-lg">
          Run multiple timers simultaneously with YourOnlineClock&apos;s
          beautiful multi-timer tool. Perfect for managing multiple tasks,
          interval training, cooking multiple dishes, and juggling various
          activities at youronlineclock.com.
        </p>
      </section>

      {/* Why Use This Multi-Timer */}
      <Card className="p-6">
        <h2 className="mb-4 text-2xl font-bold">
          Why Use YourOnlineClock&apos;s Multi-Timer?
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">🎨 Beautiful Design</h3>
            <p className="text-muted-foreground">
              Enjoy a visually stunning interface with carefully crafted
              aesthetic themes that make managing multiple timers a pleasure.
              Our beautiful backgrounds keep you organized and focused.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">⏲️ Multiple Timers</h3>
            <p className="text-muted-foreground">
              Run unlimited timers simultaneously! Perfect for cooking multiple
              dishes, managing various tasks, interval training, or any
              situation where you need to track multiple countdowns at once.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">🚀 Preset & Custom</h3>
            <p className="text-muted-foreground">
              Start with preset timers (Quick Break, Pomodoro, Long Focus) or
              create custom timers for any duration. Label each timer to stay
              organized and manage your time effectively.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">
              🎵 Customizable Experience
            </h3>
            <p className="text-muted-foreground">
              Choose from multiple aesthetic themes, enable sound notifications
              for completed timers, and personalize your experience. Make it
              truly yours with settings that match your workflow at
              youronlineclock.com.
            </p>
          </div>
        </div>
      </Card>

      {/* FAQ Section */}
      <section className="space-y-4">
        <h2 className="text-center text-2xl font-bold">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How do I use the YourOnlineClock multi-timer?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Click any preset timer (Quick Break, Pomodoro, Long Focus) to
              start, or create a custom timer by clicking &quot;Add Custom
              Timer&quot; and entering your desired duration and label. You can
              run multiple timers at the same time on youronlineclock.com. Each
              timer operates independently with its own start, pause, and reset
              controls.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              How many timers can I run at once?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              YourOnlineClock&apos;s multi-timer has no limit! You can run as
              many timers as you need simultaneously. Whether it&apos;s 2 timers
              or 20, our tool at youronlineclock.com handles them all smoothly.
              Perfect for complex cooking, multi-task management, or elaborate
              interval training routines.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can I customize timer durations?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Absolutely! While YourOnlineClock provides preset timers (5
              minutes, 25 minutes, 50 minutes), you can create custom timers for
              any duration you need. Click &quot;Add Custom Timer&quot; to set
              hours, minutes, and seconds. You can also label each timer to keep
              track of what each one is for.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Does the YourOnlineClock multi-timer work offline?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes! Once you load youronlineclock.com, the multi-timer works
              completely offline. Your active timers, settings, and aesthetic
              theme preferences are saved locally. This means you can rely on it
              anywhere, even without internet connection. Perfect for outdoor
              activities or areas with poor connectivity.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              What can I use the multi-timer for?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              YourOnlineClock&apos;s multi-timer is incredibly versatile: cook
              multiple dishes simultaneously, manage different work tasks, run
              complex interval training workouts, track various study subjects,
              time multiple laundry loads, manage meeting segments, coordinate
              team activities, and much more. Any scenario requiring multiple
              simultaneous countdowns benefits from our multi-timer at
              youronlineclock.com.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Can I save my custom timers?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Custom timers you create are saved in your browser automatically
              on youronlineclock.com. Your timer presets and preferences persist
              across sessions, making it easy to reuse your favorite timer
              configurations. Whether it&apos;s your workout intervals or
              cooking timings, they&apos;re ready when you need them.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>
              How is YourOnlineClock different from other multi-timers?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              YourOnlineClock combines powerful functionality with beautiful
              design. Unlike basic multi-timers, youronlineclock.com offers:
              stunning aesthetic themes that make time management enjoyable,
              unlimited simultaneous timers, preset and custom timer options,
              individual controls for each timer, browser-based convenience with
              no app installation, sound notifications, and a clean, ad-free
              interface that keeps you focused.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>
              Is this multi-timer really free?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes, YourOnlineClock&apos;s multi-timer is completely free to use
              with no hidden costs, subscriptions, or premium features. We
              believe everyone deserves access to beautiful, effective time
              management tools at youronlineclock.com. All aesthetic themes,
              unlimited timers, custom timer creation, and customization options
              are available to everyone at no cost.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* SEO Footer Content */}
      <section className="space-y-4">
        <Card className="p-6">
          <h2 className="mb-4 text-xl font-bold">
            YourOnlineClock - Perfect for Managing Multiple Tasks
          </h2>
          <p className="text-muted-foreground mb-4">
            Whether you&apos;re a chef juggling multiple dishes, a fitness
            enthusiast running complex interval training, a busy professional
            managing various tasks, or anyone who needs to track multiple
            countdowns, YourOnlineClock&apos;s multi-timer is designed for you.
            The combination of unlimited simultaneous timers and beautiful
            design at youronlineclock.com creates the ultimate tool for complex
            time management.
          </p>
          <p className="text-muted-foreground">
            Start using YourOnlineClock&apos;s free multi-timer today at
            youronlineclock.com and experience the difference that organized,
            beautiful time tracking can make. Join thousands of users who manage
            their multiple tasks efficiently with YourOnlineClock&apos;s
            elegant, powerful, and easy-to-use aesthetic multi-timer tool.
          </p>
        </Card>
      </section>
    </Container>
  );
};
