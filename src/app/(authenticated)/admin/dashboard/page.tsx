import { SkeletonTable } from "@/components/shared/TableSkeleton";
import { H3, P } from "@/components/ui/typography";
import ProductSearch from "@/features/dashboard/products/ProductSearch";
import ProductsTable from "@/features/dashboard/products/ProductsTable";
import { Suspense } from "react";
import DashboardAnalytics from "./_components/DashboardAnalytics";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const params = (await searchParams) ?? {};
  const page = params.page ?? 1;
  const per_page = params.per_page ?? 1;
  const q = params.q ?? "";

  return (
    <div className="space-y-3">
      <div className="flex justify-between">
        <div>
          <H3>Item Management</H3>
          <P className="text-muted-foreground">Manage items </P>
        </div>
      </div>
      <DashboardAnalytics />

      <ProductSearch />

      <Suspense
        key={`${page} + ${per_page} + ${q}`}
        fallback={<SkeletonTable columns={6} rows={10} />}
      >
        <ProductsTable params={params} />
      </Suspense>
    </div>
  );
};

export default Page;
