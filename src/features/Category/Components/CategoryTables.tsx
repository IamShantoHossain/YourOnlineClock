"use client";

import { Pagination } from "@/components/ui/pagination";
import TableBody, {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Muted } from "@/components/ui/typography";
import { useQueryBuilder } from "@/hooks/useQueryBuilder";
import { useGetCategoriesQuery } from "@/redux/api/categoryApi";
import CategoryTableData from "./CategoryTableData";

const CategoryTable = () => {
  const { paramsArray } = useQueryBuilder();

  const { data, isLoading, isFetching } = useGetCategoriesQuery(paramsArray);

  const categories = data?.categories;
  const meta = data?.meta;

  return (
    <div className="space-y-3">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Category ID</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="pl-12">Sub Category Count</TableHead>
            <TableHead>Parent ID</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <CategoryTableData
            categories={categories ?? []}
            isLoading={isLoading || isFetching}
          />
        </TableBody>
      </Table>
      <div className="flex justify-between">
        <Muted className="text-muted-foreground">
          Total: {meta?.total ?? 0}
        </Muted>

        <Muted>
          Page: {meta?.page ?? 0} / {meta?.totalPages ?? 0}
        </Muted>
      </div>
      <Pagination totalPages={meta?.totalPages ?? 0} />
    </div>
  );
};

export default CategoryTable;
