"use client";

import Container from "@/components/global/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

/* =========================
   STATIC CONTENT (ONLY)
========================= */

const hero = {
  title: "Aesthetic Pomodoro Timer - YourOnlineClock",
  description:
    "Boost your productivity with YourOnlineClock's beautiful, distraction-free Pomodoro timer. Perfect for students, professionals, and anyone looking to improve focus and time management with our free online timer at youronlineclock.com.",
};

const whyUseTitle = "Why Use YourOnlineClock’s Multi-Timer?";

const whyUse = [
  {
    title: "🎨 Beautiful Design",
    description:
      "Enjoy a visually appealing interface with carefully designed aesthetic themes that make controlling multiple timers enjoyable. Our elegant backgrounds help you stay organized and concentrated.",
  },
  {
    title: "⏳ Multiple Timers",
    description:
      "Run countless timers simultaneously! Great for preparing several dishes, organizing different tasks, interval exercise, or any situation where you need to monitor many countdowns together.",
  },
  {
    title: "⚙️ Preset & Custom",
    description:
      "Begin with preset timers (Quick Break, Pomodoro, Long Focus) or make custom timers for any length of time. Add labels to each timer to remain organized and manage your schedule efficiently.",
  },
  {
    title: "🎵 Customizable Experience",
    description:
      "Pick from various aesthetic themes, activate sound alerts for completed timers, and customize your experience. Make it completely personal with settings that fit your workflow at youronlineclock.com.",
  },
];

const faqTitle = "Frequently Asked Questions";

const faqs = [
  {
    q: "What is the Pomodoro Technique?",
    a: 'The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a "pomodoro", from the Italian word for tomato.',
  },
  {
    q: "How do I use the YourOnlineClock Pomodoro timer?",
    a: "Simply click the start button on youronlineclock.com to begin your 25-minute focus session. When the timer completes, you'll hear an alert sound. Take a break, then repeat. After 4 sessions, take a longer break.",
  },
  {
    q: "Can I customize the timer duration?",
    a: "Yes! You can adjust work duration, break length, and long break duration in settings.",
  },
  {
    q: "Does the YourOnlineClock timer work offline?",
    a: "Yes! Once loaded, it works completely offline and saves your settings in your browser.",
  },
  {
    q: "What are the benefits of using a Pomodoro timer?",
    a: "It helps improve focus, reduce burnout, increase productivity, and better manage time.",
  },
  {
    q: "Can I use this timer for studying?",
    a: "Absolutely! It is highly effective for studying and improving concentration and retention.",
  },
  {
    q: "How is YourOnlineClock different from other timers?",
    a: "It combines aesthetic design, distraction-free UI, offline support, and customizable productivity tools.",
  },
  {
    q: "Is YourOnlineClock really free?",
    a: "Yes, it is completely free with no hidden costs or subscriptions.",
  },
];

const footer = {
  title: "YourOnlineClock – Ideal for Managing Multiple Tasks",
  paragraphs: [
    "Whether you're a chef handling several dishes at once, a fitness lover doing interval training, a busy professional organizing different tasks, or anyone needing to track multiple countdowns, YourOnlineClock's multi-timer is built for you. The combination of unlimited simultaneous timers and attractive design at youronlineclock.com creates the perfect tool for advanced time management.",

    "Start using YourOnlineClock's free multi-timer today at youronlineclock.com and experience the difference that structured, elegant time tracking can make. Join thousands of users who efficiently manage multiple tasks with YourOnlineClock's stylish, powerful, and user-friendly aesthetic multi-timer tool.",
  ],
};

/* =========================
        COMPONENT
========================= */

export const TimerFAQ = () => {
  return (
    <Container className="w-full space-y-8 pt-16">
      {/* SEO-Friendly Introduction */}
      <section className="space-y-4">
        <h1 className="text-center text-3xl font-bold md:text-4xl">
          {hero.title}
        </h1>
        <p className="text-muted-foreground text-center text-lg">
          {hero.description}
        </p>
      </section>

      {/* Why Use This Timer */}
      <Card className="p-6">
        <h2 className="mb-4 text-2xl font-bold">{whyUseTitle}</h2>

        <div className="space-y-4">
          {whyUse.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* FAQ Section */}
      <section className="space-y-4">
        <h2 className="text-center text-2xl font-bold">{faqTitle}</h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* SEO Footer Content */}
      <section className="space-y-4">
        <Card className="p-6">
          <h2 className="mb-4 text-xl font-bold">{footer.title}</h2>

          <div className="space-y-4">
            {footer.paragraphs.map((text, idx) => (
              <p key={idx} className="text-muted-foreground">
                {text}
              </p>
            ))}
          </div>
        </Card>
      </section>
    </Container>
  );
};

export default TimerFAQ;
