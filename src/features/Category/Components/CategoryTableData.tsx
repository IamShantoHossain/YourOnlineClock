"use client";
import { SkeletonTable } from "@/components/shared/TableSkeleton";
import { TableCell, TableRow } from "@/components/ui/table";
import { P } from "@/components/ui/typography";
import { Category_T } from "@/types/category.types";
import Image from "next/image";

const CategoryTableData = ({
  categories,
  isLoading,
}: {
  categories: Category_T[];
  isLoading?: boolean;
}) => {
  if (isLoading) {
    return <SkeletonTable rows={10} columns={4} />;
  }

  return (
    <>
      {categories.map((category) => (
        <TableRow key={category.id}>
          <TableCell className="">
            <div className="flex items-center gap-0.5">
              <span className="text-primary">#</span>
              <P>{category.id}</P>
            </div>
          </TableCell>

          <TableCell className="flex items-center gap-2">
            <Image
              unoptimized
              height={900}
              width={900}
              src={category.image?.src ?? ""}
              alt={category.name}
              className="size-12 rounded-md border-2 object-cover"
            />
            <div>
              <P className="">{category.name}</P>
            </div>
          </TableCell>

          <TableCell className="pl-12">
            <P>{category.count}</P>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-0.5">
              <span className="text-primary">#</span>
              <P>{category.parent ?? "_"}</P>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default CategoryTableData;
