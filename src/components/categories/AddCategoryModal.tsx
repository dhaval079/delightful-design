import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FileUpload } from "@/components/ui/file-upload";
import { Grid3X3, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface AddCategoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const iconTypes = [
  { id: "app-icon", label: "App Icon" },
  { id: "web-icon", label: "Web Icon" },
  { id: "featured-image", label: "Featured Image for web" },
  { id: "app-article", label: "App article image (500×500)" },
  { id: "web-article", label: "Web article image (500×500)" },
];

interface UploadedIcon {
  name: string;
  size: string;
  type: string;
}

export function AddCategoryModal({ open, onOpenChange }: AddCategoryModalProps) {
  const [selectedIconType, setSelectedIconType] = useState("app-icon");
  const [uploadedIcons, setUploadedIcons] = useState<Record<string, UploadedIcon>>({
    "app-icon": { name: "my-cv.ico", size: "60 KB of 120 KB", type: "JPEG" },
    "web-icon": { name: "my-cv.ico", size: "60 KB of 120 KB", type: "JPEG" },
  });

  const handleRemoveIcon = (iconType: string) => {
    setUploadedIcons(prev => {
      const newIcons = { ...prev };
      delete newIcons[iconType];
      return newIcons;
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center gap-3 pb-4">
          <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center">
            <Grid3X3 className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-xl font-semibold">Category Master</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Name</Label>
            <Input placeholder="Placeholder" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Parent Category</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Placeholder" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="trading">Trading</SelectItem>
                  <SelectItem value="research">Research</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Category Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Placeholder" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="main">Main</SelectItem>
                  <SelectItem value="sub">Sub</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Short Description</Label>
              <Textarea placeholder="Text" className="min-h-[100px] resize-none" />
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea placeholder="Text" className="min-h-[100px] resize-none" />
            </div>
            <div className="space-y-2">
              <Label>Slug</Label>
              <Textarea placeholder="Text" className="min-h-[100px] resize-none" />
            </div>
          </div>

          {/* Icon Type Selection */}
          <RadioGroup 
            value={selectedIconType} 
            onValueChange={setSelectedIconType}
            className="flex flex-wrap gap-4"
          >
            {iconTypes.map((type) => (
              <div key={type.id} className="flex items-center space-x-2">
                <RadioGroupItem value={type.id} id={type.id} />
                <Label htmlFor={type.id} className="text-sm font-normal cursor-pointer">
                  {type.label}
                </Label>
              </div>
            ))}
          </RadioGroup>

          {/* File Upload */}
          <FileUpload accept=".jpeg,.jpg,.png,.pdf" />

          {/* Uploaded Icons */}
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(uploadedIcons).map(([iconType, icon]) => (
              <div key={iconType} className="space-y-2">
                <Label className="text-sm">
                  {iconType === "app-icon" ? "App Icon" : "Web Icon"}
                </Label>
                <div className="bg-muted/50 rounded-xl p-4 flex items-center gap-3">
                  <div className="relative">
                    <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <span className="absolute -bottom-1 -right-1 bg-destructive text-destructive-foreground text-xs px-1.5 py-0.5 rounded font-medium">
                      {icon.type}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{icon.name}</p>
                    <p className="text-xs text-muted-foreground">{icon.size} •</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() => handleRemoveIcon(iconType)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
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
