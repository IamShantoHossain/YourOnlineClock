import { PageContainer } from "@/components/global/Container";
import MultiTimerContainer from "./components/MultiTimerContainer";
import { MultiTimerFAQ } from "./components/MultiTimerFAQ";
import { MultiTimerProvider } from "./context/MultiTimerContext";

const Page = () => {
  return (
    <>
      <MultiTimerProvider>
        <PageContainer className="relative">
          <MultiTimerContainer />
        </PageContainer>
      </MultiTimerProvider>
      <div className="bg-background w-full">
        <MultiTimerFAQ />
      </div>
    </>
  );
};

export default Page;
