import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { BannerTable, Banner } from "./BannerTable";
import { BannerFilters } from "./BannerFilters";
import { AddBannerModal } from "./AddBannerModal";
import { DataTablePagination } from "@/components/ui/data-table-pagination";

const mockBanners: Banner[] = [
  {
    id: "1",
    image: "/placeholder.svg",
    name: "All Categories",
    displayIn: "Dashboard",
    status: "active",
    displayTo: "Dashboard",
    displayToStatus: "active",
    navigationOnClick: "All Categories",
    externalLinks: "https://www.youtube.com/results?search_query=india"
  },
  {
    id: "2",
    image: "/placeholder.svg",
    name: "Subscription",
    displayIn: "Research",
    status: "active",
    displayTo: "Research",
    displayToStatus: "active",
    navigationOnClick: "Subscription",
    externalLinks: "https://www.youtube.com/results?search_query=india"
  },
  {
    id: "3",
    image: "/placeholder.svg",
    name: "Paid Users",
    displayIn: "Research",
    status: "inactive",
    displayTo: "Research",
    displayToStatus: "inactive",
    navigationOnClick: "Paid Users",
    externalLinks: "https://www.youtube.com/results?search_query=india"
  },
  {
    id: "4",
    image: "/placeholder.svg",
    name: "Paid Users",
    displayIn: "Dashboard",
    status: "active",
    displayTo: "Dashboard",
    displayToStatus: "active",
    navigationOnClick: "Paid Users",
    externalLinks: "https://www.youtube.com/results?search_query=india"
  },
  {
    id: "5",
    image: "/placeholder.svg",
    name: "Free Users",
    displayIn: "Research",
    status: "active",
    displayTo: "Research",
    displayToStatus: "active",
    navigationOnClick: "Free Users",
    externalLinks: "https://www.youtube.com/results?search_query=india"
  },
  {
    id: "6",
    image: "/placeholder.svg",
    name: "28 Jan 2022",
    displayIn: "Dashboard",
    status: "active",
    displayTo: "Dashboard",
    displayToStatus: "active",
    navigationOnClick: "28 Jan 2022",
    externalLinks: "https://www.youtube.com/results?search_query=india"
  },
  {
    id: "7",
    image: "/placeholder.svg",
    name: "16 Jan 2022",
    displayIn: "Dashboard",
    status: "inactive",
    displayTo: "Dashboard",
    displayToStatus: "inactive",
    navigationOnClick: "16 Jan 2022",
    externalLinks: "https://www.youtube.com/results?search_query=india"
  },
];

export function HomePageBanners() {
  const [activeFilter, setActiveFilter] = useState("View all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold">Home Page Banners</h1>
            <span className="text-primary text-sm font-medium">240 Active Banner</span>
          </div>
          <p className="text-muted-foreground mt-1">
            Manage visual banners that appear across the platform
          </p>
        </div>
        <Button 
          className="gap-2 bg-primary hover:bg-primary/90"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus className="h-4 w-4" />
          Add Banner
        </Button>
      </div>

      {/* Filters */}
      <BannerFilters
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Table */}
      <BannerTable banners={mockBanners} />

      {/* Pagination */}
      <DataTablePagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
      />

      {/* Modal */}
      <AddBannerModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
