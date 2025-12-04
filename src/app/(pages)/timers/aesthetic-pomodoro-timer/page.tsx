import AstaticPomodoroTimer from "./components/AstaticPomodoroTimer";
import { PromoTimerProvider } from "./context/PromoTimerContext";

export const dynamic = "force-dynamic";

const Page = () => {
  return (
    <div className="flex h-full min-h-dvh">
      <PromoTimerProvider>
        <AstaticPomodoroTimer />;
      </PromoTimerProvider>
    </div>
  );
};

export default Page;
