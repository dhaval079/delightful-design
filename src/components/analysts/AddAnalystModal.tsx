import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { FileUpload } from "@/components/ui/file-upload";
import { Users } from "lucide-react";

interface AddAnalystModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddAnalystModal({ open, onOpenChange }: AddAnalystModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center gap-3 pb-4">
          <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-xl font-semibold">Analyst Master</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <FileUpload accept=".jpeg,.jpg,.png,.pdf" />

          <div className="space-y-2">
            <Label>Name</Label>
            <Input placeholder="Placeholder" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Short description</Label>
              <Textarea placeholder="Text" className="min-h-[80px] resize-none" />
            </div>
            <div className="space-y-2">
              <Label>Full Description</Label>
              <Textarea placeholder="Text" className="min-h-[80px] resize-none" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 items-end">
            <div className="space-y-2">
              <Label>Twitter</Label>
              <Input placeholder="https://www.youtube.com/results?se" />
            </div>
            <div className="space-y-2">
              <Label>linkedin</Label>
              <Input placeholder="https://www.youtube.com/results?se" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="recent-publications" />
            <Label htmlFor="recent-publications" className="text-sm font-normal cursor-pointer">
              Recent Publications
            </Label>
          </div>

          <div className="flex gap-3 pt-4">
            <Button 
              variant="outline" 
              className="flex-1" 
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button className="flex-1 bg-primary hover:bg-primary/90">
              Update
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
