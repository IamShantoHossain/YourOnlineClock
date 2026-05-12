import Footer from "@/components/shared/Footer";
import { Card } from "@/components/ui/card";
import { SITE_DATA } from "@/constant";
import { TimersSettingsProvider } from "@/providers/TimersSettingsProvider";
import TimersHeader from "../(timers)/components/TimersHeader";

export const metadata = {
  title: "Privacy Policy | YourOnlineClock",
  description:
    "Read YourOnlineClock's Privacy Policy. Learn how we protect your privacy and handle your data while using our online timers, stopwatches, and Pomodoro tools.",
};

export default function PrivacyPolicyPage() {
  return (
    <TimersSettingsProvider>
      <TimersHeader />
      <div className="relative min-h-screen">
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="from-primary via-primary/80 to-primary/60 mb-4 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
              Privacy Policy
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
                  <h2 className="mb-4 text-2xl font-bold">Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to YourOnlineClock. We respect your privacy and are
                    committed to protecting your personal data. This privacy
                    policy will inform you about how we look after your personal
                    data when you visit our website and tell you about your
                    privacy rights and how the law protects you.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">
                    Information We Collect
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    We may collect, use, store and transfer different kinds of
                    personal data about you:
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                    <li>
                      <strong>Identity Data:</strong> includes first name, last
                      name, username or similar identifier
                    </li>
                    <li>
                      <strong>Contact Data:</strong> includes email address and
                      telephone numbers
                    </li>
                    <li>
                      <strong>Technical Data:</strong> includes internet
                      protocol (IP) address, browser type and version, time zone
                      setting, browser plug-in types and versions, operating
                      system and platform
                    </li>
                    <li>
                      <strong>Usage Data:</strong> includes information about
                      how you use our website, products and services
                    </li>
                    <li>
                      <strong>Marketing and Communications Data:</strong>{" "}
                      includes your preferences in receiving marketing from us
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">
                    How We Use Your Information
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    We use your personal data for the following purposes:
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                    <li>To provide and maintain our service</li>
                    <li>To notify you about changes to our service</li>
                    <li>To provide customer support</li>
                    <li>
                      To gather analysis or valuable information so that we can
                      improve our service
                    </li>
                    <li>To monitor the usage of our service</li>
                    <li>To detect, prevent and address technical issues</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">
                    Cookies and Tracking
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar tracking technologies to track
                    activity on our service and hold certain information.
                    Cookies are files with a small amount of data which may
                    include an anonymous unique identifier. You can instruct
                    your browser to refuse all cookies or to indicate when a
                    cookie is being sent.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The security of your data is important to us. We implement
                    appropriate technical and organizational security measures
                    to protect your personal data. However, please note that no
                    method of transmission over the Internet or method of
                    electronic storage is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Your Rights</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Under data protection laws, you have rights including:
                  </p>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                    <li>
                      <strong>Right to access:</strong> You have the right to
                      request copies of your personal data
                    </li>
                    <li>
                      <strong>Right to rectification:</strong> You have the
                      right to request correction of inaccurate or incomplete
                      data
                    </li>
                    <li>
                      <strong>Right to erasure:</strong> You have the right to
                      request deletion of your personal data
                    </li>
                    <li>
                      <strong>Right to restrict processing:</strong> You have
                      the right to request restriction of processing your
                      personal data
                    </li>
                    <li>
                      <strong>Right to data portability:</strong> You have the
                      right to request transfer of your data to another
                      organization
                    </li>
                    <li>
                      <strong>Right to object:</strong> You have the right to
                      object to our processing of your personal data
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Third-Party Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our service may contain links to third-party websites. We
                    have no control over and assume no responsibility for the
                    content, privacy policies or practices of any third-party
                    sites or services.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">
                    Changes to This Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update our Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy
                    on this page and updating the &quot;Last updated&quot; date
                    at the top of this policy.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy, please
                    contact us at:
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
