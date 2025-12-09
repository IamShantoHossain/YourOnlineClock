"use client";

import Container from "@/components/global/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export const TimerFAQ = () => {
  return (
    <Container className="w-full space-y-8 pt-16">
      {/* SEO-Friendly Introduction */}
      <section className="space-y-4">
        <h1 className="text-center text-3xl font-bold md:text-4xl">
          Aesthetic Pomodoro Timer - YourOnlineClock
        </h1>
        <p className="text-muted-foreground text-center text-lg">
          Boost your productivity with YourOnlineClock&apos;s beautiful,
          distraction-free Pomodoro timer. Perfect for students, professionals,
          and anyone looking to improve focus and time management with our free
          online timer at youronlineclock.com.
        </p>
      </section>

      {/* Why Use This Timer */}
      <Card className="p-6">
        <h2 className="mb-4 text-2xl font-bold">
          Why Use YourOnlineClock&apos;s Aesthetic Pomodoro Timer?
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">🎨 Beautiful Design</h3>
            <p className="text-muted-foreground">
              Enjoy a visually stunning interface with carefully crafted themes
              that make time management a pleasure. Our aesthetic backgrounds
              create a calming environment that helps you stay focused.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">⚡ Boost Productivity</h3>
            <p className="text-muted-foreground">
              The Pomodoro Technique is scientifically proven to enhance focus
              and productivity. Work in focused 25-minute intervals with short
              breaks to maintain peak performance throughout your day.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">🔕 Distraction-Free</h3>
            <p className="text-muted-foreground">
              Fullscreen mode eliminates distractions, allowing you to immerse
              yourself completely in your work. Perfect for deep work sessions,
              studying, or creative projects.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">
              🎵 Customizable Experience
            </h3>
            <p className="text-muted-foreground">
              Choose from multiple themes, toggle sounds, and personalize your
              timer experience. Make it truly yours with settings that match
              your workflow and preferences.
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
            <AccordionTrigger>What is the Pomodoro Technique?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              The Pomodoro Technique is a time management method developed by
              Francesco Cirillo in the late 1980s. It uses a timer to break work
              into intervals, traditionally 25 minutes in length, separated by
              short breaks. Each interval is known as a &quot;pomodoro&quot;,
              from the Italian word for tomato, after the tomato-shaped kitchen
              timer Cirillo used as a university student.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              How do I use the YourOnlineClock Pomodoro timer?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Simply click the start button on youronlineclock.com to begin your
              25-minute focus session. When the timer completes, you&apos;ll
              hear an alert sound. Take a 5-minute break, then start another
              pomodoro. After completing 4 pomodoros, take a longer 15-30 minute
              break. You can customize the timer duration, choose different
              aesthetic themes, and toggle sound notifications in the settings.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can I customize the timer duration?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes! Click on the timer to open the settings dialog where you can
              adjust the work duration, break length, and long break duration to
              fit your needs. While the traditional Pomodoro is 25 minutes, you
              can customize it to any duration that works best for your
              productivity style.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Does the YourOnlineClock timer work offline?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes! Once you load youronlineclock.com, the timer works completely
              offline. Your settings and aesthetic theme preferences are saved
              locally in your browser, so they&apos;ll persist even after you
              close the tab or refresh the page. This makes YourOnlineClock
              perfect for working anywhere.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              What are the benefits of using a Pomodoro timer?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Using a Pomodoro timer helps you: manage distractions and stay
              focused, avoid burnout with regular breaks, improve time
              estimation skills, maintain high energy levels throughout the day,
              create a sense of urgency that boosts motivation, and track your
              productivity more effectively. It&apos;s especially helpful for
              students, remote workers, and anyone who struggles with
              procrastination.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              Can I use this timer for studying?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Absolutely! The Pomodoro Technique is excellent for studying. It
              helps break down study sessions into manageable chunks, prevents
              mental fatigue, and improves retention. Students often find that
              studying in 25-minute intervals with short breaks helps them stay
              focused and absorb information more effectively than marathon
              study sessions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>
              How is YourOnlineClock different from other timers?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              YourOnlineClock&apos;s aesthetic Pomodoro timer combines
              functionality with beautiful design. Unlike basic timers,
              youronlineclock.com offers: stunning visual themes that create an
              inspiring work environment, fullscreen mode for immersive focus
              sessions, customizable settings for personalized productivity,
              browser-based convenience with no downloads required, and a clean,
              ad-free interface that respects your focus time. Experience the
              difference at youronlineclock.com.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>Is YourOnlineClock really free?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes, YourOnlineClock&apos;s aesthetic Pomodoro timer is completely
              free to use with no hidden costs, subscriptions, or premium
              features. We believe everyone deserves access to beautiful,
              effective productivity tools at youronlineclock.com. All aesthetic
              themes, customization options, and features are available to
              everyone at no cost.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* SEO Footer Content */}
      <section className="space-y-4">
        <Card className="p-6">
          <h2 className="mb-4 text-xl font-bold">
            YourOnlineClock - Perfect for Every Productivity Need
          </h2>
          <p className="text-muted-foreground mb-4">
            Whether you&apos;re a student preparing for exams, a professional
            working on important projects, a writer battling writer&apos;s
            block, or anyone looking to improve time management,
            YourOnlineClock&apos;s aesthetic Pomodoro timer is designed to help
            you achieve your goals. The combination of proven time management
            techniques and beautiful design at youronlineclock.com creates an
            optimal environment for productivity and focus.
          </p>
          <p className="text-muted-foreground">
            Start using YourOnlineClock&apos;s free Pomodoro timer today at
            youronlineclock.com and experience the difference that focused work
            sessions can make in your productivity, work quality, and overall
            well-being. Join thousands of users who have transformed their work
            habits with YourOnlineClock&apos;s elegant, easy-to-use aesthetic
            timer.
          </p>
        </Card>
      </section>
    </Container>
  );
};
