import { PageContainer } from "@/components/global/Container";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import AstaticPomodoroTimer from "../aesthetic-pomodoro-timer/components/AstaticPomodoroTimer";
import { TimerFAQ } from "../aesthetic-pomodoro-timer/components/TimerFAQ";
import { PromoTimerProvider } from "../aesthetic-pomodoro-timer/context/PromoTimerContext";

function formatCountdownHumanReadable(duration: string): string | null {
  const regex = /^(\d+)-(hour|minute|second)s?(-countdown)?$/i;
  const match = duration.match(regex);

  if (!match) return null;

  const value = parseInt(match[1], 10);
  const unit = match[2].toLowerCase();

  if (isNaN(value) || value < 0) return null;

  // Capitalize unit for readability
  const capitalizedUnit = unit.charAt(0).toUpperCase() + unit.slice(1);

  return `${value} ${capitalizedUnit} Timer`;
}

type Props = {
  params: Promise<{ duration: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const { duration } = await params;

  // fetch data

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  const formattedTitle = `Custom Countdown Timer – ${
    formatCountdownHumanReadable(duration) || "Countdown Timer"
  }`;
  const formattedDescription = `Create a custom countdown timer for ${
    formatCountdownHumanReadable(duration) || "your desired duration"
  }. Perfect for managing tasks, workouts, or study sessions. Enjoy a simple and effective online timer that helps you stay on track and boost productivity.`;

  const humanReadable =
    formatCountdownHumanReadable(duration) || "Countdown Timer";

  const title = `${humanReadable} – Custom Online Timer for Productivity`;
  const description = `Set up your ${humanReadable} online. Perfect for study sessions, workouts, or task management. Boost your productivity with this simple and effective countdown timer.`;
  return {
    title,
    description,
    keywords: `Countdown Timer, Online Timer, ${duration}, ${humanReadable}, Study Timer, Task Timer, Workout Timer, Productivity Timer, Time Management`,
    openGraph: {
      images: [...previousImages],
    },
  };
}

function validateCountdown(duration: string): boolean {
  // Regex to match valid formats like "30-minute", "2-hour", "45-second"
  // and also "30-minute-countdown"
  const regex = /^(\d+)-(hour|minute|second)s?(-countdown)?$/i;

  const match = duration.match(regex);
  if (!match) {
    return false; // Invalid format
  }

  const value = parseInt(match[1], 10);
  if (isNaN(value) || value < 0) {
    return false; // Not a valid number or negative
  }

  // If we reach here, it's valid
  return true;
}

function getTimerInMinutes(duration: string): number | null {
  const regex = /^(\d+)-(hour|minute|second)s?(-countdown)?$/i;
  const match = duration.match(regex);

  if (!match) return null;

  const value = parseInt(match[1], 10);
  const unit = match[2].toLowerCase();

  if (isNaN(value) || value < 0) return null;

  switch (unit) {
    case "hour":
      return value * 60; // convert hours to minutes
    case "minute":
      return value; // already in minutes
    case "second":
      return Math.ceil(value / 60); // convert seconds to minutes (round up)
    default:
      return null;
  }
}

const Page = async ({ params }: { params: Promise<{ duration: string }> }) => {
  const { duration } = await params;

  console.log(duration);

  if (!validateCountdown(duration)) {
    // Handle invalid duration format, e.g., show an error or redirect
    return notFound();
  }

  const timer = duration.split("-")[0];
  const staticTimer = getTimerInMinutes(duration) ?? 5;

  return (
    <>
      <PromoTimerProvider>
        <PageContainer className="pb-20">
          <AstaticPomodoroTimer staticTimer={staticTimer} />
        </PageContainer>
      </PromoTimerProvider>
      <TimerFAQ />
    </>
  );
};

export default Page;
