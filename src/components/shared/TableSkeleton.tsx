import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

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

  // Fallback defaults for standard header and body skeletons
  const DEFAULT_HEADER_CLASS = "h-4 w-24";
  const DEFAULT_BODY_CLASS = "h-4 w-full";

  // Helper function to get the final class name for a given column index
  const getClassName = (colIndex: number, type: "header" | "body"): string => {
    // 1. Get the specific config for this column index (if provided)
    const specificConfig = columnConfigs[String(colIndex)];

    let className: string | undefined;

    if (type === "header") {
      // 2. Prioritize: Specific > Default > Global Fallback
      className =
        specificConfig?.headerClassName ||
        defaultColumnConfig?.headerClassName ||
        DEFAULT_HEADER_CLASS;
    } else {
      // 2. Prioritize: Specific > Default > Global Fallback
      className =
        specificConfig?.bodyClassName ||
        defaultColumnConfig?.bodyClassName ||
        DEFAULT_BODY_CLASS;
    }

    return className;
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-muted/30">
            {skeletonColumns.map((_, colIndex) => (
              <th key={colIndex} className="p-2">
                <Skeleton className={getClassName(colIndex, "header")} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {skeletonRows.map((_, rowIndex) => (
            <tr key={rowIndex} className="border-border border-b">
              {skeletonColumns.map((_, colIndex) => (
                <td key={colIndex} className="p-2">
                  <Skeleton className={getClassName(colIndex, "body")} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
