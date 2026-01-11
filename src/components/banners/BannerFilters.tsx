import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface BannerFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const filters = ["View all", "Dashboard", "Research"];

export function BannerFilters({ 
  activeFilter, 
  onFilterChange, 
  searchQuery, 
  onSearchChange 
}: BannerFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      {/* Filter Tabs */}
      <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "default" : "ghost"}
            size="sm"
            onClick={() => onFilterChange(filter)}
            className={cn(
              "rounded-md px-4",
              activeFilter === filter 
                ? "bg-card text-foreground shadow-sm" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {filter}
          </Button>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="relative flex-1 sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9 bg-card border-border"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </Button>
      </div>
    </div>
  );
}
