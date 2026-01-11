import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function DataTablePagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1, 2, 3);
      if (currentPage > 4) {
        pages.push("...");
      }
      if (currentPage > 3 && currentPage < totalPages - 2) {
        pages.push(currentPage);
      }
      if (currentPage < totalPages - 3) {
        pages.push("...");
      }
      pages.push(totalPages - 1, totalPages);
    }
    
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-1 mt-6">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="gap-1 text-muted-foreground"
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>

      {getVisiblePages().map((page, idx) => (
        <Button
          key={idx}
          variant={page === currentPage ? "default" : "ghost"}
          size="sm"
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={typeof page !== "number"}
          className={cn(
            "min-w-9",
            page === currentPage && "bg-primary text-primary-foreground"
          )}
        >
          {page}
        </Button>
      ))}

      <Button
        variant="ghost"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="gap-1 text-muted-foreground"
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
