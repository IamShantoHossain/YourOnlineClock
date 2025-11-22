import { H3, P } from "@/components/ui/typography";
import DashboardAnalytics from "@/features/dashboard/DashboardAnalytics";
import ProductsTable from "@/features/dashboard/products/ProductsTable";

const Page = async () => {
  return (
    <div className="space-y-3">
      <div className="flex justify-between">
        <div>
          <H3>Item Management</H3>
          <P className="text-muted-foreground">Manage items </P>
        </div>
      </div>

      <DashboardAnalytics />

      <ProductsTable />
    </div>
  );
};

export default Page;
