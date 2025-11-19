"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";

function Table({ className, ...props }: React.ComponentProps<"table"> & {}) {
  return (
    <div
      data-slot="table-container"
      className="bg-background border-border/40 relative w-full overflow-x-auto rounded-md border"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot=""
      className={cn("bg-secondary hover:bg-secondary/90", className)}
      {...props}
    />
  );
}

type TableBodyProps = React.ComponentProps<"tbody"> & {
  isLoading?: boolean; // Make optional for the default case
  skeletonRowCount?: number;
  skeletonColCount?: number; // Added: Essential to know how many columns to span/render
};

function TableBody({
  className,
  isLoading = false,
  skeletonRowCount = 8,
  skeletonColCount = 7, // Default to 1, but should be set by the caller
  children,
  ...props
}: TableBodyProps) {
  // Check if children exist and if the array of children is empty
  const hasChildren = React.Children.count(children) > 0;
  const noData = !isLoading && !hasChildren;

  // --- 1. Loading State ---
  if (isLoading)
    return (
      <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props}>
        {/* Correctly generate a specified number of rows */}
        {Array.from({ length: skeletonRowCount }).map((_, rowIndex) => (
          <tr key={rowIndex} className="border-b">
            {/* Correctly generate a specified number of cells in each row */}
            {Array.from({ length: skeletonColCount }).map((_, colIndex) => (
              <td key={colIndex} className="p-3">
                {/* Apply the skeleton component with appropriate styling */}
                <Skeleton
                  // Use a random width to make the skeleton look more organic
                  className={cn(
                    "h-5",
                    `w-[${Math.floor(Math.random() * 50) + 50}%]`,
                  )}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );

  // --- 2. No Data State ---
  if (noData)
    return (
      <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props}>
        <tr className="h-20">
          {/* Use a single <td> and colspan to center the message */}
          <td
            colSpan={skeletonColCount}
            className="text-muted-foreground p-4 text-center text-sm"
          >
            No data found
          </td>
        </tr>
      </tbody>
    );

  // --- 3. Default (Data Loaded) State ---
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    >
      {children}
    </tbody>
  );
}

export default TableBody;

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className,
      )}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-secondary/60 even:bg-secondary/40 data-[state=selected]:bg-muted border-card border-b transition-colors",
        className,
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground p-3 px-5 text-left align-middle font-medium whitespace-nowrap first:pl-5 last:pr-5 [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-0.5",
        className,
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-3 px-5 align-middle whitespace-nowrap first:pl-5 last:pr-5 [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-0.5",
        className,
      )}
      {...props}
    />
  );
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  );
}

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
