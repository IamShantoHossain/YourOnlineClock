"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { SkeletonTable } from "@/components/shared/TableSkeleton";
import { Badge } from "@/components/ui/badge";
import { Pagination } from "@/components/ui/pagination";
import { Muted, P } from "@/components/ui/typography";
import { useQueryBuilder } from "@/hooks/useQueryBuilder";
import { useGetProductsQuery } from "@/redux/api/products.api";
import { format } from "date-fns";
import Image from "next/image";

const ProductsTable = () => {
  const { paramsArray } = useQueryBuilder();
  const { data, isLoading, isFetching } = useGetProductsQuery(paramsArray);

  const products = data?.products || [];
  const meta = data?.meta;

  return (
    <div className="space-y-3">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Product ID</TableHead>
            <TableHead>Product</TableHead>
            <TableHead className="pl-10">Category</TableHead>
            <TableHead className="text-center">Brand</TableHead>
            <TableHead>Created At</TableHead>
            {/* <TableHead className="text-center">Actions</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading || isFetching ? (
            <SkeletonTable columns={5} rows={10} />
          ) : (
            products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="">
                  <div className="flex items-center gap-0.5">
                    <span className="text-primary">#</span>
                    <p>{product.id}</p>
                  </div>
                </TableCell>
                <TableCell className="flex items-center gap-2">
                  <Image
                    unoptimized
                    height={900}
                    width={900}
                    src={product.images[0].src}
                    alt={product.name}
                    className="h-8 w-8 rounded-sm object-cover"
                  />
                  <div>
                    <P className="max-w-xl truncate">{product.name}</P>
                    <div className="flex gap-1">
                      <span className="text-muted-foreground text-sm">
                        ${product.price.toLocaleString() || "_"}
                      </span>
                    </div>
                  </div>
                </TableCell>

                <TableCell className="pl-10">
                  <div className="flex max-w-sm flex-col gap-2">
                    {product.categories.map((category) => (
                      <Badge
                        key={category.id}
                        className="bg-primary/40 text-primary-foreground"
                        variant={"secondary"}
                      >
                        {category.name}
                      </Badge>
                    ))}
                  </div>
                </TableCell>

                <TableCell className="">
                  <div className="flex max-w-sm flex-col gap-2">
                    {product.brands.length > 0 ? (
                      product.brands.map((brand) => (
                        <Badge
                          key={brand.id}
                          className="bg-primary/40 text-primary-foreground"
                          variant={"secondary"}
                        >
                          {brand.name}
                        </Badge>
                      ))
                    ) : (
                      <span className="text-muted-foreground text-center text-sm">
                        __
                      </span>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <P className="text-muted-foreground text-center text-sm">
                    {format(new Date(product.date_created), "PPp")}
                  </P>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <div className="flex justify-between">
        <Muted className="text-muted-foreground">Total: {meta?.total}</Muted>

        <Muted>
          Page: {meta?.page} / {meta?.totalPages}
        </Muted>
      </div>
      <Pagination totalPages={meta?.totalPages ?? 1} />
    </div>
  );
};

export default ProductsTable;
