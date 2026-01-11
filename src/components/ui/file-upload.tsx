import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Cloud, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface FileUploadProps {
  onFileSelect?: (file: File) => void;
  accept?: string;
  maxSize?: number;
  className?: string;
}

interface UploadedFile {
  name: string;
  size: number;
  progress: number;
  type: string;
}

export function FileUpload({ 
  onFileSelect, 
  accept = ".jpeg,.jpg,.png,.pdf,.mp4",
  maxSize = 50,
  className 
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    setUploadedFile({
      name: file.name,
      size: file.size,
      progress: 50,
      type: file.type.includes("mp4") ? "MP4" : "JPEG"
    });
    onFileSelect?.(file);
    
    // Simulate upload progress
    setTimeout(() => {
      setUploadedFile(prev => prev ? { ...prev, progress: 100 } : null);
    }, 1000);
  };

  const handleRemove = () => {
    setUploadedFile(null);
  };

  const formatSize = (bytes: number) => {
    const kb = bytes / 1024;
    return `${kb.toFixed(0)} KB`;
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* Drop Zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "border-2 border-dashed rounded-xl p-8 text-center transition-colors duration-200 cursor-pointer",
          isDragging 
            ? "border-primary bg-accent" 
            : "border-muted-foreground/25 hover:border-primary/50"
        )}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFile(file);
          }}
        />
        
        <div className="flex flex-col items-center gap-3">
          <Cloud className="h-10 w-10 text-muted-foreground" />
          <div>
            <p className="text-foreground font-medium">
              Choose a file or drag & drop it here
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              JPEG, PNG, PDG, and MP4 formats, up to {maxSize}MB
            </p>
          </div>
          <Button variant="outline" className="mt-2 rounded-full px-6">
            Browse File
          </Button>
        </div>
      </div>

      {/* Uploaded File */}
      {uploadedFile && (
        <div className="bg-muted/50 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-muted-foreground" />
              </div>
              <span className="absolute -bottom-1 -right-1 bg-destructive text-destructive-foreground text-xs px-1.5 py-0.5 rounded font-medium">
                {uploadedFile.type}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{uploadedFile.name}</p>
              <p className="text-xs text-muted-foreground">
                {formatSize(uploadedFile.size * uploadedFile.progress / 100)} of {formatSize(uploadedFile.size)} •
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={handleRemove}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-3 flex gap-1">
            <div 
              className="h-1.5 rounded-full bg-primary transition-all duration-300"
              style={{ width: `${uploadedFile.progress}%` }}
            />
            <div 
              className="h-1.5 rounded-full bg-muted-foreground/20 flex-1"
            />
          </div>
        </div>
      )}
    </div>
  );
}
