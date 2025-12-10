import { PageContainer } from "@/components/global/Container";
import StopwatchContainer from "./components/StopwatchContainer";
import { StopwatchFAQ } from "./components/StopwatchFAQ";
import { StopwatchProvider } from "./context/StopwatchContext";

const Page = () => {
  return (
    <>
      <StopwatchProvider>
        <PageContainer className="relative pb-20">
          <StopwatchContainer />
        </PageContainer>
      </StopwatchProvider>
      <StopwatchFAQ />
    </>
  );
};

export default Page;
