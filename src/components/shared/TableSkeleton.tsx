import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { TableCell, TableRow } from "../ui/table";

// --- Updated Types for Sparse Configuration ---

interface ColumnConfig {
  /**
   * Defines the width and height for the skeleton in the header cell.
   * Example: "h-4 w-32"
   */
  headerClassName?: string;
  /**
   * Defines the width and height for the skeleton in the body cells for this column.
   * Example: "h-4 w-full"
   */
  bodyClassName?: string;
}

interface SkeletonTableProps {
  rows: number;
  columns: number;
  /**
   * Default configuration applied to ALL columns unless overridden by 'columnConfigs'.
   * This drastically reduces the necessary config for large tables.
   */
  defaultColumnConfig?: ColumnConfig;
  /**
   * A sparse map-like object where keys are the 0-based column index (as strings)
   * and the values are the specific configuration for that column.
   * Example: { "1": { bodyClassName: "h-4 w-80" } }
   */
  columnConfigs?: { [key: string]: ColumnConfig };
}
// ---------------------------------

export const SkeletonTable: React.FC<SkeletonTableProps> = ({
  rows,
  columns,
  defaultColumnConfig = {}, // Default to an empty object
  columnConfigs = {},
}) => {
  const skeletonRows = Array.from({ length: rows });
  const skeletonColumns = Array.from({ length: columns });

  return (
    <>
      {skeletonRows.map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {skeletonColumns.map((_, colIndex) => (
            <TableCell key={colIndex}>
              <Skeleton className={"h-4"} />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};
