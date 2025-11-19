import { H3, P } from "@/components/ui/typography";
import CategoryAnalytic from "@/features/Category/Components/CategoryAnalytic";
import CategoryTables from "@/features/Category/Components/CategoryTables";

const Page = async () => {
  return (
    <div className="space-y-3">
      <div className="flex justify-between">
        <div>
          <H3>Item Management</H3>
          <P className="text-muted-foreground">Manage items </P>
        </div>
      </div>

      <CategoryAnalytic />

      <CategoryTables />
    </div>
  );
};

export default Page;
