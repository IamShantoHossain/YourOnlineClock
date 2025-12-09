import Container from "@/components/global/Container";
import Footer from "@/components/shared/Footer";
import { H1, H2, P } from "@/components/ui/typography";
import { TimersSettingsProvider } from "@/providers/TimersSettingsProvider";
import { Clock, Heart, Users, Zap } from "lucide-react";
import Link from "next/link";
import TimersHeader from "../timers/components/TimersHeader";

export const metadata = {
  title: "About Us | YourOnlineClock",
  description:
    "Learn about YourOnlineClock - your free online tool for timers, stopwatches, and Pomodoro technique. Discover our mission to help you manage time better.",
};

export default function AboutPage() {
  return (
    <TimersSettingsProvider>
      <TimersHeader />
      <div className="min-h-screen py-12">
        <Container className="max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <H1 className="mb-4">About YourOnlineClock</H1>
            <P className="text-muted-foreground text-lg">
              Your trusted companion for time management and productivity
            </P>
          </div>

          {/* Mission Section */}
          <section className="mb-12">
            <H2 className="mb-4">Our Mission</H2>
            <P className="text-muted-foreground mb-4 leading-relaxed">
              At <strong>YourOnlineClock</strong>, we believe that effective
              time management is the key to productivity and success. Our
              mission is to provide simple, beautiful, and powerful timing tools
              that help people around the world manage their time better,
              whether they're studying, working, exercising, or cooking.
            </P>
            <P className="text-muted-foreground leading-relaxed">
              We're committed to offering completely free, accessible tools that
              work seamlessly across all devices without requiring registration
              or downloads. Your time is valuable, and we're here to help you
              make the most of it.
            </P>
          </section>

          {/* Features Grid */}
          <section className="mb-12">
            <H2 className="mb-6">What We Offer</H2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border-border rounded-lg border p-6">
                <div className="bg-primary/10 text-primary mb-4 inline-flex rounded-full p-3">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  Aesthetic Pomodoro Timer
                </h3>
                <P className="text-muted-foreground text-sm">
                  Beautiful Pomodoro timer with customizable backgrounds, break
                  intervals, and notification support to boost your productivity
                  using the proven Pomodoro Technique.
                </P>
              </div>

              <div className="border-border rounded-lg border p-6">
                <div className="bg-primary/10 text-primary mb-4 inline-flex rounded-full p-3">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  Precision Stopwatch
                </h3>
                <P className="text-muted-foreground text-sm">
                  High-precision stopwatch with lap tracking and millisecond
                  accuracy, perfect for timing workouts, races, cooking, or any
                  activity requiring accurate time measurement.
                </P>
              </div>

              <div className="border-border rounded-lg border p-6">
                <div className="bg-primary/10 text-primary mb-4 inline-flex rounded-full p-3">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Multi-Timer</h3>
                <P className="text-muted-foreground text-sm">
                  Run multiple countdown timers simultaneously with customizable
                  durations and beautiful themes, ideal for managing multiple
                  tasks or cooking complex recipes.
                </P>
              </div>

              <div className="border-border rounded-lg border p-6">
                <div className="bg-primary/10 text-primary mb-4 inline-flex rounded-full p-3">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  User-Friendly Design
                </h3>
                <P className="text-muted-foreground text-sm">
                  Clean, intuitive interface with aesthetic backgrounds,
                  dark/light mode support, and responsive design that works
                  perfectly on all devices from mobile to desktop.
                </P>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-12">
            <H2 className="mb-4">Why Choose YourOnlineClock?</H2>
            <ul className="text-muted-foreground space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 font-bold">✓</span>
                <span>
                  <strong>100% Free:</strong> All features are completely free
                  with no hidden costs or premium tiers
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 font-bold">✓</span>
                <span>
                  <strong>No Registration Required:</strong> Start using our
                  tools immediately without creating an account
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 font-bold">✓</span>
                <span>
                  <strong>Works Offline:</strong> Once loaded, our timers work
                  even without an internet connection
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 font-bold">✓</span>
                <span>
                  <strong>Privacy Focused:</strong> No tracking, no data
                  collection, your settings stay local
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 font-bold">✓</span>
                <span>
                  <strong>Cross-Device Compatibility:</strong> Works seamlessly
                  on desktop, tablet, and mobile devices
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 font-bold">✓</span>
                <span>
                  <strong>Beautiful Aesthetics:</strong> Multiple theme options
                  with stunning backgrounds to enhance your experience
                </span>
              </li>
            </ul>
          </section>

          {/* Our Story */}
          <section className="mb-12">
            <H2 className="mb-4">Our Story</H2>
            <P className="text-muted-foreground mb-4 leading-relaxed">
              YourOnlineClock was created out of a simple need: accessible,
              beautiful timing tools that actually work. We noticed that many
              online timers were cluttered with ads, required downloads, or
              lacked essential features. We wanted to build something different.
            </P>
            <P className="text-muted-foreground leading-relaxed">
              Since our launch, we've helped thousands of users manage their
              time better, whether they're students using the Pomodoro Technique
              to study, professionals tracking work intervals, athletes timing
              their workouts, or home cooks managing multiple dishes in the
              kitchen.
            </P>
          </section>

          {/* Technology */}
          <section className="mb-12">
            <H2 className="mb-4">Built with Modern Technology</H2>
            <P className="text-muted-foreground mb-4 leading-relaxed">
              YourOnlineClock is built using cutting-edge web technologies
              including Next.js, React, and TypeScript to ensure a fast,
              reliable, and smooth user experience. We continuously update our
              platform to incorporate the latest web standards and best
              practices.
            </P>
          </section>

          {/* Contact CTA */}
          <section className="bg-primary/5 border-primary/20 rounded-lg border p-8 text-center">
            <H2 className="mb-3">Get in Touch</H2>
            <P className="text-muted-foreground mb-6">
              Have feedback, suggestions, or questions? We'd love to hear from
              you!
            </P>
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex rounded-lg px-6 py-3 font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </section>

          {/* Footer Links */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="/disclaimer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Disclaimer
            </Link>
            <Link
              href="/privacy-policy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
      <Footer />
    </TimersSettingsProvider>
  );
}
