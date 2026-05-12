"use client";

import Link from "next/link";
import Container from "../global/Container";

const footerBlockedPaths = ["/timers/"];

export default function Footer() {
  return (
    <footer className="border-border/50 bg-background mt-auto border-t">
      <Container className="mx-auto py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="from-primary to-primary/80 bg-gradient-to-r bg-clip-text text-lg font-bold text-transparent">
              YourOnlineClock
            </h3>
            <p className="text-muted-foreground text-sm">
              Your essential time management tools - Pomodoro timers,
              stopwatches, and more.
            </p>
          </div>

          {/* Timers */}
          <div className="space-y-3">
            <h4 className="font-semibold">Timers</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/aesthetic-pomodoro-timer"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Pomodoro Timer
                </Link>
              </li>
              <li>
                <Link
                  href="/stopwatch"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Stopwatch
                </Link>
              </li>
              <li>
                <Link
                  href="/multi-timer"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Multi Timer
                </Link>
              </li>
              <li>
                <Link
                  href="/5-minute"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  5-Minute Timer
                </Link>
              </li>
              <li>
                <Link
                  href="/10-minute"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  10-Minute Timer
                </Link>
              </li>
              <li>
                <Link
                  href="/15-minute"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  15-Minute Timer
                </Link>
              </li>
              <li>
                <Link
                  href="/30-minute"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  30-Minute Timer
                </Link>
              </li>
              <li>
                <Link
                  href="/1-hour"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  1-Hour Timer
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          {/* <div className="space-y-3">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${SITE_DATA.CONTACT_EMAIL}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
            </div>
          </div> */}
        </div>

        {/* Bottom */}
        <div className="border-border/50 mt-8 border-t pt-6">
          <p className="text-muted-foreground text-center text-sm">
            © {new Date().getFullYear()} YourOnlineClock. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
