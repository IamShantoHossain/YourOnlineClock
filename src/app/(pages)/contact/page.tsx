"use client";

import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen">
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="from-primary via-primary/80 to-primary/60 mb-4 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Contact Us
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Have a question or feedback? We&apos;d love to hear from you. Send
            us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="space-y-6 lg:col-span-1">
            <Card className="border-border/50 bg-card/70 p-6 shadow-2xl backdrop-blur-lg">
              <h2 className="mb-6 text-xl font-bold">Get in Touch</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                    <FaEnvelope className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground text-sm">
                      support@youronlineclock.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                    <FaPhone className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground text-sm">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                    <FaMapMarkerAlt className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Office</h3>
                    <p className="text-muted-foreground text-sm">
                      123 Clock Street
                      <br />
                      Time Zone City, TC 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-border/50 bg-card/70 p-6 shadow-2xl backdrop-blur-lg">
              <h2 className="mb-4 text-xl font-bold">Quick Links</h2>
              <div className="space-y-2">
                <Link
                  href="/timers/aesthetic-pomodoro-timer"
                  className="text-muted-foreground hover:text-primary block text-sm transition-colors"
                >
                  Back to Timers
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-primary block text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-muted-foreground hover:text-primary block text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 bg-card/70 p-6 shadow-2xl backdrop-blur-lg sm:p-8">
              <h2 className="mb-6 text-2xl font-bold">Send us a Message</h2>

              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    placeholder="What is this about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more..."
                    rows={8}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full shadow-lg sm:w-auto"
                >
                  <FaPaperPlane className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
