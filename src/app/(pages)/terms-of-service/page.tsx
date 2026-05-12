"use client";

import Footer from "@/components/shared/Footer";
import { Card } from "@/components/ui/card";
import { SITE_DATA } from "@/constant";
import { TimersSettingsProvider } from "@/providers/TimersSettingsProvider";
import { useEffect, useState } from "react";
import TimersHeader from "../(timers)/components/TimersHeader";

// Note: This is a client component, so metadata should be added via next/head or moved to a parent server component
// For now, adding a comment for SEO metadata that should be handled differently
// Title: "Terms of Service | YourOnlineClock"
// Description: "Read the Terms of Service for YourOnlineClock. Understand the terms and conditions for using our free online timers, stopwatches, and productivity tools."

export default function TermsOfServicePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <TimersSettingsProvider>
      <TimersHeader />
      <div className="relative min-h-screen">
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="from-primary via-primary/80 to-primary/60 mb-4 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
              Terms of Service
            </h1>
            <p className="text-muted-foreground text-sm">
              Last updated: December 7, 2025
            </p>
          </div>

          {/* Content Card */}
          <Card className="border-border/50 bg-card/70 shadow-2xl backdrop-blur-lg">
            <article className="prose prose-invert max-w-none p-6 sm:p-8 lg:p-12">
              <div className="text-foreground space-y-8">
                <section>
                  <h2 className="mb-4 text-2xl font-bold">
                    Agreement to Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using YourOnlineClock, you accept and agree
                    to be bound by the terms and provision of this agreement. If
                    you do not agree to these Terms of Service, please do not
                    use our service.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Use License</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Permission is granted to temporarily use YourOnlineClock for
                    personal, non-commercial transitory viewing only. This is
                    the grant of a license, not a transfer of title, and under
                    this license you may not:
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                    <li>Modify or copy the materials</li>
                    <li>
                      Use the materials for any commercial purpose or for any
                      public display
                    </li>
                    <li>
                      Attempt to reverse engineer any software contained on
                      YourOnlineClock
                    </li>
                    <li>
                      Remove any copyright or other proprietary notations from
                      the materials
                    </li>
                    <li>
                      Transfer the materials to another person or
                      &quot;mirror&quot; the materials on any other server
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">User Accounts</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    When you create an account with us, you must provide
                    accurate, complete, and current information. Failure to do
                    so constitutes a breach of the Terms, which may result in
                    immediate termination of your account.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    You are responsible for safeguarding the password that you
                    use to access the service and for any activities or actions
                    under your password. You agree not to disclose your password
                    to any third party.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Acceptable Use</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    You agree to use YourOnlineClock only for lawful purposes
                    and in a way that does not infringe the rights of, restrict
                    or inhibit anyone else&apos;s use of the service. Prohibited
                    behavior includes:
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                    <li>
                      Harassing or causing distress or inconvenience to any
                      person
                    </li>
                    <li>Transmitting obscene or offensive content</li>
                    <li>
                      Disrupting the normal flow of dialogue within our service
                    </li>
                    <li>
                      Violating any applicable local, national or international
                      law
                    </li>
                    <li>
                      Using the service to send spam or other unsolicited
                      messages
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">
                    Intellectual Property
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The service and its original content, features, and
                    functionality are and will remain the exclusive property of
                    YourOnlineClock and its licensors. The service is protected
                    by copyright, trademark, and other laws. Our trademarks and
                    trade dress may not be used in connection with any product
                    or service without prior written consent.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Disclaimer</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The materials on YourOnlineClock are provided on an &apos;as
                    is&apos; basis. YourOnlineClock makes no warranties,
                    expressed or implied, and hereby disclaims and negates all
                    other warranties including, without limitation, implied
                    warranties or conditions of merchantability, fitness for a
                    particular purpose, or non-infringement of intellectual
                    property or other violation of rights.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">
                    Limitations of Liability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In no event shall YourOnlineClock or its suppliers be liable
                    for any damages (including, without limitation, damages for
                    loss of data or profit, or due to business interruption)
                    arising out of the use or inability to use the materials on
                    YourOnlineClock, even if YourOnlineClock or a
                    YourOnlineClock authorized representative has been notified
                    orally or in writing of the possibility of such damage.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Termination</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may terminate or suspend your account and bar access to
                    the service immediately, without prior notice or liability,
                    under our sole discretion, for any reason whatsoever and
                    without limitation, including but not limited to a breach of
                    the Terms. If you wish to terminate your account, you may
                    simply discontinue using the service.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms shall be governed and construed in accordance
                    with the laws of the jurisdiction in which YourOnlineClock
                    operates, without regard to its conflict of law provisions.
                    Our failure to enforce any right or provision of these Terms
                    will not be considered a waiver of those rights.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right, at our sole discretion, to modify or
                    replace these Terms at any time. If a revision is material,
                    we will provide at least 30 days&apos; notice prior to any
                    new terms taking effect. What constitutes a material change
                    will be determined at our sole discretion.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms of Service,
                    please contact us:
                  </p>
                  <div className="bg-muted/20 mt-4 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-foreground font-medium">
                      Email: {SITE_DATA.CONTACT_EMAIL}
                    </p>
                    <p className="text-foreground font-medium">
                      Phone: {SITE_DATA.CONTACT_PHONE}
                    </p>
                  </div>
                </section>
              </div>
            </article>
          </Card>
        </div>
        <Footer />
      </div>
    </TimersSettingsProvider>
  );
}
