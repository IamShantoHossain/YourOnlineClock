"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./button";

interface PaginationProps {
  totalPages: number;
}

export function Pagination({ totalPages }: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const navigateToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  if (totalPages <= 1) return null;

  // Build page numbers
  const MAX_VISIBLE = 3;
  let startPage = Math.max(1, currentPage - Math.floor(MAX_VISIBLE / 2));
  const endPage = Math.min(totalPages, startPage + MAX_VISIBLE - 1);

  if (endPage - startPage + 1 < MAX_VISIBLE) {
    startPage = Math.max(1, endPage - MAX_VISIBLE + 1);
  }

  const pageNumbers: (number | string)[] = [];

  // First page + ellipsis
  if (startPage > 1) {
    pageNumbers.push(1);
    if (startPage > 2) pageNumbers.push("...");
  }

  // Middle pages
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // Ellipsis + last page
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) pageNumbers.push("...");
    pageNumbers.push(totalPages);
  }

  return (
    <div className="mx-auto flex w-fit items-center justify-end space-x-1.5 py-6">
      {/* Previous */}
      <Button
        variant={"secondary"}
        className={`group ${currentPage === 1 ? "cursor-not-allowed" : ""}`}
        disabled={currentPage === 1}
        onClick={() => navigateToPage(Math.max(currentPage - 1, 1))}
      >
        <ChevronLeft className="text-primary-foreground h-4 w-4 transition-all group-hover:-translate-x-0.5" />
      </Button>

      {/* Page numbers */}
      {pageNumbers.map((page, idx) =>
        page === "..." ? (
          <span key={`ellipsis-${idx}`} className="text-foreground px-2">
            ...
          </span>
        ) : (
          <Button
            key={page}
            onClick={() => navigateToPage(page as number)}
            variant={page === currentPage ? "default" : "secondary"}
          >
            {page}
          </Button>
        ),
      )}

      {/* Next */}
      <Button
        variant={"secondary"}
        disabled={currentPage === totalPages}
        onClick={() => navigateToPage(Math.min(currentPage + 1, totalPages))}
      >
        <ChevronRight className="text-primary-foreground h-4 w-4 transition-all group-hover:-translate-x-0.5" />
      </Button>
    </div>
  );
}
