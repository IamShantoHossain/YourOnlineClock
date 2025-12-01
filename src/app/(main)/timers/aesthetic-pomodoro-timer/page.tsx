import AstaticPomodoroTimer from "./components/AstaticPomodoroTimer";

export const dynamic = "force-dynamic";

const Page = () => {
  return (
    <div className="clock-astatic-theme bg-background text-foreground flex h-screen w-screen">
      <AstaticPomodoroTimer />
    </div>
  );
};

export default Page;
