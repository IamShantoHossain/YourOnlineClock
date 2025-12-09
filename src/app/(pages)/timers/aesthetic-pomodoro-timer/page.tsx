import { PageContainer } from "@/components/global/Container";
import AstaticPomodoroTimer from "./components/AstaticPomodoroTimer";
import { TimerFAQ } from "./components/TimerFAQ";
import { PromoTimerProvider } from "./context/PromoTimerContext";

export const dynamic = "force-dynamic";

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
