"use client";

import Container from "@/components/global/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export const StopwatchFAQ = () => {
  return (
    <Container className="w-full space-y-8 pt-16">
      {/* SEO-Friendly Introduction */}
      <section className="space-y-4">
        <h1 className="text-center text-3xl font-bold md:text-4xl">
          Aesthetic Stopwatch - YourOnlineClock
        </h1>
        <p className="text-muted-foreground text-center text-lg">
          Track time with precision using YourOnlineClock&apos;s beautiful,
          feature-rich stopwatch. Perfect for workouts, cooking, studying,
          sports, and any activity that requires accurate time tracking at
          youronlineclock.com.
        </p>
      </section>

      {/* Why Use This Stopwatch */}
      <Card className="p-6">
        <h2 className="mb-4 text-2xl font-bold">
          Aesthetic Stopwatch – YourOnlineClock
        </h2>

        <p className="text-muted-foreground mb-6">
          Measure time accurately with YourOnlineClock’s attractive,
          feature-packed stopwatch. Perfect for exercise, cooking, learning,
          sports, and any activity that needs exact time tracking at
          youronlineclock.com.
        </p>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">🎨 Beautiful Design</h3>
            <p className="text-muted-foreground">
              Enjoy a visually attractive interface with carefully designed
              aesthetic themes that make time tracking enjoyable. Our elegant
              backgrounds create a motivating environment for every activity.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">⏱️ Precise Timing</h3>
            <p className="text-muted-foreground">
              Measure time with millisecond accuracy. Ideal for sports practice,
              cooking, interval exercise, studying, or any activity where exact
              time measurement is important.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">📱 Works Everywhere</h3>
            <p className="text-muted-foreground">
              Use YourOnlineClock on any device—desktop, tablet, or mobile. No
              application installation is needed. Simply visit
              youronlineclock.com and begin timing instantly.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">
              🎵 Customizable Experience
            </h3>
            <p className="text-muted-foreground">
              Select from different aesthetic themes, switch milliseconds
              display on or off, activate sound alerts, and personalize your
              stopwatch experience. Make it completely your own with settings
              that suit your preferences.
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
              How do I use the YourOnlineClock stopwatch?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Simply click the &quot;Start&quot; button to begin timing. Click
              &quot;Pause&quot; to stop the timer temporarily, and
              &quot;Reset&quot; to return to zero. You can toggle milliseconds
              display in the settings for even more precise timing. The
              stopwatch at youronlineclock.com works instantly with no setup
              required.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Does the stopwatch show milliseconds?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes! YourOnlineClock&apos;s stopwatch can display milliseconds for
              precise timing. Toggle the milliseconds display in the settings
              (gear icon) to show or hide them based on your needs. This is
              perfect for sports, fitness training, or any activity requiring
              precise measurements.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can I use this stopwatch for workouts?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Absolutely! YourOnlineClock&apos;s stopwatch is perfect for
              fitness and workouts. Use it for interval training, timing
              exercises, tracking rest periods, running sprints, or any athletic
              activity. The fullscreen mode and aesthetic backgrounds make it
              ideal for keeping visible during workouts.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Does the YourOnlineClock stopwatch work offline?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes! Once you load youronlineclock.com, the stopwatch works
              completely offline. Your settings and aesthetic theme preferences
              are saved locally, so they persist even after closing your
              browser. This makes it reliable for any situation, even without
              internet connection.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              What can I use this stopwatch for?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              YourOnlineClock&apos;s stopwatch is versatile: track workout
              intervals, time cooking and baking, measure study sessions, time
              presentations or speeches, track sports performance, monitor
              productivity tasks, time meditation sessions, and much more. Any
              activity requiring accurate time measurement benefits from our
              precise, easy-to-use stopwatch.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              Is YourOnlineClock&apos;s stopwatch accurate?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes! Our stopwatch at youronlineclock.com provides highly accurate
              timing with millisecond precision. It uses your device&apos;s
              system clock to ensure reliable measurements. While not certified
              for official competitions, it&apos;s more than accurate enough for
              personal training, cooking, studying, and everyday timing needs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>
              How is YourOnlineClock different from other stopwatches?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              YourOnlineClock combines functionality with beautiful design.
              Unlike basic stopwatches, youronlineclock.com offers: stunning
              aesthetic themes that make timing more enjoyable, fullscreen mode
              for better visibility, millisecond precision when you need it,
              customizable settings for personalized experience, browser-based
              convenience with no app downloads, and a clean, ad-free interface
              that doesn&apos;t distract you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>Is this stopwatch really free?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes, YourOnlineClock&apos;s aesthetic stopwatch is completely free
              to use with no hidden costs, subscriptions, or premium features.
              We believe everyone deserves access to beautiful, effective timing
              tools at youronlineclock.com. All aesthetic themes, millisecond
              display, and customization options are available to everyone at no
              cost.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* SEO Footer Content */}
      <section className="space-y-4">
        <Card className="p-6">
          <h2 className="mb-4 text-xl font-bold">
            YourOnlineClock - Perfect for Every Timing Need
          </h2>

          <p className="text-muted-foreground mb-4">
            Whether you&apos;re an athlete tracking performance, a chef timing
            recipes, a student measuring study efficiency, or anyone who needs
            precise time measurement, YourOnlineClock’s aesthetic stopwatch is
            designed for you. The combination of accurate timing and beautiful
            design at youronlineclock.com creates an optimal experience for any
            timing activity.
          </p>

          <p className="text-muted-foreground">
            Begin using YourOnlineClock’s free stopwatch today at
            youronlineclock.com and feel the difference that accurate timing
            with attractive design can create. Join thousands of users who rely
            on YourOnlineClock for their daily timing needs with our elegant,
            precise, and easy-to-use aesthetic stopwatch.
          </p>
        </Card>
      </section>
    </Container>
  );
};
