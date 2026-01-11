import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AnalystCard, Analyst } from "./AnalystCard";
import { AddAnalystModal } from "./AddAnalystModal";
import { DataTablePagination } from "@/components/ui/data-table-pagination";

const mockAnalysts: Analyst[] = Array(9).fill(null).map((_, i) => ({
  id: `analyst-${i + 1}`,
  name: "RBL Bank Call Update",
  category: "Trading Setup",
  timeframe: "Week 4",
  description: "Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It's also known as information technology security or",
  avatar: "/placeholder.svg",
  twitter: "https://twitter.com",
  linkedin: "https://linkedin.com"
}));

export function AnalystMaster() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Analyst Master</h1>
          <p className="text-muted-foreground mt-1">
            Manage visual banners that appear across the platform
          </p>
        </div>
        <Button 
          className="gap-2 bg-primary hover:bg-primary/90"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus className="h-4 w-4" />
          Add Analyst Master
        </Button>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {mockAnalysts.map((analyst) => (
          <AnalystCard
            key={analyst.id}
            analyst={analyst}
            onEdit={() => setIsModalOpen(true)}
            onDelete={() => console.log("Delete", analyst.id)}
          />
        ))}
      </div>

      {/* Pagination */}
      <DataTablePagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
      />

      {/* Modal */}
      <AddAnalystModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
