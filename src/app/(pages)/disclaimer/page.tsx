import Container from "@/components/global/Container";
import Footer from "@/components/shared/Footer";
import { H1, H2, P } from "@/components/ui/typography";
import { TimersSettingsProvider } from "@/providers/TimersSettingsProvider";
import Link from "next/link";
import TimersHeader from "../(timers)/components/TimersHeader";

export const metadata = {
  title: "Disclaimer | YourOnlineClock",
  description:
    "Read the disclaimer for YourOnlineClock. Important information about the use of our online timers, stopwatches, and Pomodoro tools.",
};

export default function DisclaimerPage() {
  return (
    <TimersSettingsProvider>
      <TimersHeader />
      <div className="min-h-screen py-12">
        <Container className="max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <H1 className="mb-4">Disclaimer</H1>
            <P className="text-muted-foreground">
              Last Updated: December 9, 2025
            </P>
          </div>

          {/* General Disclaimer */}
          <section className="mb-10">
            <H2 className="mb-4">General Information</H2>
            <P className="text-muted-foreground mb-4 leading-relaxed">
              The information and tools provided by{" "}
              <strong>YourOnlineClock</strong> (accessible at{" "}
              <strong>youronlineclock.com</strong>) are for general
              informational and time management purposes only. While we strive
              to provide accurate and reliable timing tools, we make no
              representations or warranties of any kind, express or implied,
              about the completeness, accuracy, reliability, suitability, or
              availability of the website or the information, products,
              services, or related graphics contained on the website for any
              purpose.
            </P>
          </section>

          {/* Accuracy Disclaimer */}
          <section className="mb-10">
            <H2 className="mb-4">Timing Accuracy</H2>
            <P className="text-muted-foreground mb-4 leading-relaxed">
              While YourOnlineClock employs modern web technologies to provide
              accurate timing functionality, we cannot guarantee absolute
              precision in all circumstances. Timer accuracy may be affected by
              various factors including but not limited to:
            </P>
            <ul className="text-muted-foreground mb-4 list-inside list-disc space-y-2 pl-4">
              <li>Your device's hardware and performance capabilities</li>
              <li>Browser performance and background processes</li>
              <li>System resource availability and CPU load</li>
              <li>Internet connection stability (for initial loading)</li>
              <li>Operating system scheduling and power management settings</li>
              <li>Browser tab suspension or device sleep mode</li>
            </ul>
            <P className="text-muted-foreground leading-relaxed">
              For critical timing needs requiring high precision (such as
              scientific experiments, competitive sports timing, medical
              procedures, or safety-critical applications), we strongly
              recommend using dedicated hardware timers or certified timing
              equipment.
            </P>
          </section>

          {/* Use at Your Own Risk */}
          <section className="mb-10">
            <H2 className="mb-4">Use at Your Own Risk</H2>
            <P className="text-muted-foreground mb-4 leading-relaxed">
              Any reliance you place on the timing tools and information
              provided by YourOnlineClock is strictly at your own risk. We shall
              not be liable for any loss or damage, including without
              limitation, indirect or consequential loss or damage, or any loss
              or damage whatsoever arising from:
            </P>
            <ul className="text-muted-foreground mb-4 list-inside list-disc space-y-2 pl-4">
              <li>
                Loss of data or profits arising out of, or in connection with,
                the use of this website
              </li>
              <li>
                Missed deadlines, appointments, or time-sensitive activities due
                to timer inaccuracy
              </li>
              <li>
                Overcooked food, missed meetings, or any consequences of timer
                failure or inaccuracy
              </li>
              <li>
                Device battery drain or performance issues while using our tools
              </li>
              <li>Browser crashes or compatibility issues</li>
              <li>Any technical malfunctions or service interruptions</li>
            </ul>
          </section>

          {/* Browser Notifications */}
          <section className="mb-10">
            <H2 className="mb-4">Browser Notifications and Alerts</H2>
            <P className="text-muted-foreground mb-4 leading-relaxed">
              YourOnlineClock offers optional browser notification features for
              timer alerts. Please note:
            </P>
            <ul className="text-muted-foreground mb-4 list-inside list-disc space-y-2 pl-4">
              <li>
                Notifications require explicit permission from you and may not
                work if permission is denied
              </li>
              <li>
                Notification delivery is controlled by your browser and
                operating system and may be delayed or blocked
              </li>
              <li>
                Sound alerts may not play if your device is muted or in Do Not
                Disturb mode
              </li>
              <li>
                We are not responsible for missed notifications due to browser
                settings or system configurations
              </li>
              <li>
                Background tab notifications may be throttled or suspended by
                your browser
              </li>
            </ul>
          </section>

          {/* External Links */}
          <section className="mb-10">
            <H2 className="mb-4">External Links</H2>
            <P className="text-muted-foreground leading-relaxed">
              Our website may contain links to external websites that are not
              provided or maintained by YourOnlineClock. We have no control over
              the content, privacy policies, or practices of any third-party
              sites or services and assume no responsibility for them. We
              strongly advise you to review the terms and conditions and privacy
              policies of any external sites you visit.
            </P>
          </section>

          {/* No Professional Advice */}
          <section className="mb-10">
            <H2 className="mb-4">Not Professional Advice</H2>
            <P className="text-muted-foreground leading-relaxed">
              The information on YourOnlineClock is provided for general
              educational and time management purposes only. Nothing on this
              website constitutes professional advice, including but not limited
              to medical, psychological, therapeutic, fitness, nutritional, or
              productivity advice. The Pomodoro Technique and other time
              management methods mentioned are productivity tools and should not
              be considered as treatment for any medical or psychological
              conditions. Always consult qualified professionals for specific
              advice related to your individual circumstances.
            </P>
          </section>

          {/* Service Availability */}
          <section className="mb-10">
            <H2 className="mb-4">Service Availability</H2>
            <P className="text-muted-foreground leading-relaxed">
              While we strive to maintain continuous availability,
              YourOnlineClock is provided "as is" without any warranties. We do
              not guarantee that the website will be uninterrupted, timely,
              secure, or error-free. The service may be temporarily unavailable
              due to maintenance, updates, server issues, or circumstances
              beyond our control. We reserve the right to modify, suspend, or
              discontinue any part of the service at any time without prior
              notice.
            </P>
          </section>

          {/* Data and Privacy */}
          <section className="mb-10">
            <H2 className="mb-4">Data Storage and Privacy</H2>
            <P className="text-muted-foreground mb-4 leading-relaxed">
              YourOnlineClock stores your settings and preferences locally in
              your browser using localStorage. This data remains on your device
              and is not transmitted to our servers. However:
            </P>
            <ul className="text-muted-foreground mb-4 list-inside list-disc space-y-2 pl-4">
              <li>
                Clearing your browser data will delete your saved settings
              </li>
              <li>Settings are not synchronized across devices or browsers</li>
              <li>
                We are not responsible for loss of settings due to browser
                issues, device changes, or data deletion
              </li>
            </ul>
            <P className="text-muted-foreground leading-relaxed">
              For more information, please review our{" "}
              <Link
                href="/privacy-policy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </P>
          </section>

          {/* Device Compatibility */}
          <section className="mb-10">
            <H2 className="mb-4">Device and Browser Compatibility</H2>
            <P className="text-muted-foreground leading-relaxed">
              YourOnlineClock is designed to work with modern web browsers.
              However, we cannot guarantee compatibility with all browsers,
              devices, or operating systems. Some features may not be available
              or may function differently on older browsers or devices. We
              recommend using the latest version of major browsers (Chrome,
              Firefox, Safari, or Edge) for the best experience.
            </P>
          </section>

          {/* Changes to Disclaimer */}
          <section className="mb-10">
            <H2 className="mb-4">Changes to This Disclaimer</H2>
            <P className="text-muted-foreground leading-relaxed">
              We reserve the right to update, modify, or replace this disclaimer
              at any time without prior notice. Changes will be effective
              immediately upon posting to this page. Your continued use of
              YourOnlineClock after any changes constitutes acceptance of those
              changes. We encourage you to review this disclaimer periodically
              for updates.
            </P>
          </section>

          {/* Contact Section */}
          <section className="mb-10">
            <H2 className="mb-4">Questions About This Disclaimer</H2>
            <P className="text-muted-foreground mb-4 leading-relaxed">
              If you have any questions or concerns about this disclaimer,
              please feel free to contact us:
            </P>
            <Link
              href="/contact"
              className="text-primary font-semibold hover:underline"
            >
              Contact YourOnlineClock
            </Link>
          </section>

          {/* Acceptance Notice */}
          <section className="bg-muted/50 rounded-lg border p-6">
            <P className="text-muted-foreground text-sm leading-relaxed">
              <strong>By using YourOnlineClock</strong>, you acknowledge that
              you have read, understood, and agree to be bound by this
              disclaimer. If you do not agree with any part of this disclaimer,
              please discontinue use of our website and services immediately.
            </P>
          </section>

          {/* Footer Links */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="/about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About Us
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
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </Container>
      </div>
      <Footer />
    </TimersSettingsProvider>
  );
}
