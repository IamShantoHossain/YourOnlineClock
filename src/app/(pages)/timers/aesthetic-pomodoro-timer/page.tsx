import AstaticPomodoroTimer from "./components/AstaticPomodoroTimer";
import { PromoTimerProvider } from "./context/PromoTimerContext";

export const dynamic = "force-dynamic";

const Page = () => {
  return (
    <div className="relative flex h-full flex-1">
      <PromoTimerProvider>
        <AstaticPomodoroTimer />
      </PromoTimerProvider>
    </div>
  );
};

export default Page;
