import { H3 } from "@/components/ui/typography";
import CategorySearch from "@/features/Category/Components/CategorySearch";
import CategoryTables from "@/features/Category/Components/CategoryTables";
import DashboardAnalytics from "@/features/dashboard/DashboardAnalytics";

const Page = async () => {
  return (
    <div className="space-y-3">
      <div className="flex justify-between">
        <div>
          <H3>Analytic</H3>
        </div>
      </div>

      <DashboardAnalytics />

      <CategorySearch />

      <CategoryTables />
    </div>
  );
};

export default Page;
