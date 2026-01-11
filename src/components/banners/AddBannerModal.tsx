import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileUpload } from "@/components/ui/file-upload";
import { LayoutDashboard } from "lucide-react";

interface AddBannerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddBannerModal({ open, onOpenChange }: AddBannerModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center gap-3 pb-4">
          <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center">
            <LayoutDashboard className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-xl font-semibold">Home Page Banners</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <FileUpload />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input placeholder="" />
            </div>
            <div className="space-y-2">
              <Label>Display In</Label>
              <Select defaultValue="dashboard">
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dashboard">Dashboard</SelectItem>
                  <SelectItem value="research">Research</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Display To</Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="subscription">Subscription</SelectItem>
                  <SelectItem value="paid">Paid Users</SelectItem>
                  <SelectItem value="free">Free Users</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Navigation (upon click)</Label>
            <Select defaultValue="dashboard">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dashboard">Dashboard</SelectItem>
                <SelectItem value="research">Research</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>External Links</Label>
              <Input placeholder="https://www.youtube.com/results?search_query=indiacharts" />
            </div>
            <div className="space-y-2">
              <Label>Active/Inactive</Label>
              <Select defaultValue="active">
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
