import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import GlobalProvider from "@/providers/GlobalProvider";
import "@/styles/globals.css";

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YourOnlineClock - Free Online Timers, Stopwatch & Pomodoro Timer",
  description:
    "Free online timing tools for productivity and time management. Features aesthetic Pomodoro timer, precision stopwatch, and multi-timer. No registration required. Works offline with beautiful themes.",
  keywords: [
    "online timer",
    "stopwatch",
    "pomodoro timer",
    "countdown timer",
    "free timer",
    "online stopwatch",
    "productivity timer",
    "time management",
    "pomodoro technique",
    "aesthetic timer",
    "multi timer",
    "youronlineclock",
  ],
  authors: [{ name: "YourOnlineClock" }],
  creator: "YourOnlineClock",
  publisher: "YourOnlineClock",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://youronlineclock.com",
    siteName: "YourOnlineClock",
    title: "YourOnlineClock - Free Online Timers, Stopwatch & Pomodoro Timer",
    description:
      "Free online timing tools for productivity. Pomodoro timer, stopwatch, and multi-timer with beautiful themes. No registration required.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // icons: {
  //   icon: "/favicon.ico",
  //   apple: "/apple-touch-icon.png",
  // },
  // manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${grotesk.className} antialiased`}>
        <GlobalProvider>
          <main className="flex h-full min-h-dvh flex-col">{children}</main>
        </GlobalProvider>
      </body>
    </html>
  );
}
