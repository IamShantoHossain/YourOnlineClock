import Footer from "@/components/shared/Footer";

import { Card } from "@/components/ui/card";
import { SITE_DATA } from "@/constant";
import { TimersSettingsProvider } from "@/providers/TimersSettingsProvider";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import TimersHeader from "../(timers)/components/TimersHeader";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us | YourOnlineClock",
  description:
    "Get in touch with YourOnlineClock. Have questions or feedback about our timers and tools? We'd love to hear from you. Contact us today.",
};

export default function ContactPage() {
  return (
    <TimersSettingsProvider>
      <TimersHeader />
      <div className="relative min-h-screen">
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="from-primary via-primary/80 to-primary/60 mb-4 bg-linear-to-r bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
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
                        {SITE_DATA.CONTACT_EMAIL}
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
                        {SITE_DATA.CONTACT_PHONE}
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
                        Gazipur, Dhaka
                        <br />
                        Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="border-border/50 bg-card/70 p-6 shadow-2xl backdrop-blur-lg">
                <h2 className="mb-4 text-xl font-bold">Quick Links</h2>
                <div className="space-y-2">
                  <Link
                    href="/aesthetic-pomodoro-timer"
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
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </TimersSettingsProvider>
  );
}
