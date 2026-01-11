import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AddCategoryModal } from "./AddCategoryModal";

export function CategoryMaster() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Category Master</h1>
          <p className="text-muted-foreground mt-1">
            Manage categories that appear across the platform
          </p>
        </div>
        <Button 
          className="gap-2 bg-primary hover:bg-primary/90"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus className="h-4 w-4" />
          Add Category
        </Button>
      </div>

      {/* Empty State or Table would go here */}
      <div className="bg-card rounded-xl border border-border p-12 text-center">
        <p className="text-muted-foreground">No categories yet. Click "Add Category" to create one.</p>
      </div>

      {/* Modal */}
      <AddCategoryModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
