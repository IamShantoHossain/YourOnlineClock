import { PageContainer } from "@/components/global/Container";
import { Metadata } from "next";
import AstaticPomodoroTimer from "./components/AstaticPomodoroTimer";
import { TimerFAQ } from "./components/TimerFAQ";
import { PromoTimerProvider } from "./context/PromoTimerContext";

export const metadata: Metadata = {
  title: "Aesthetic Pomodoro Timer – Boost Focus & Productivity Online",
  description:
    "Use our Aesthetic Pomodoro Timer to stay focused and productive. Customize work and break sessions, select beautiful timer themes, and track your progress. Perfect for students and professionals looking to improve time management and concentration.",
};

const Page = () => {
  return (
    <>
      <PromoTimerProvider>
        <PageContainer className="pb-20">
          <AstaticPomodoroTimer />
        </PageContainer>
      </PromoTimerProvider>
      <TimerFAQ />
    </>
  );
};

export default Page;
