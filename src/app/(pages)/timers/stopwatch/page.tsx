import StopwatchContainer from "./components/StopwatchContainer";
import { StopwatchProvider } from "./context/StopwatchContext";

export const dynamic = "force-dynamic";

const Page = () => {
  return (
    <div className="relative flex flex-1">
      <StopwatchProvider>
        <StopwatchContainer />
      </StopwatchProvider>
    </div>
  );
};

export default Page;
