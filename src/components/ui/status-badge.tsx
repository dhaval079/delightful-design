import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "active" | "inactive";
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div 
        className={cn(
          "h-2 w-2 rounded-full",
          status === "active" ? "bg-green-500" : "bg-muted-foreground"
        )}
      />
      <span 
        className={cn(
          "text-sm capitalize",
          status === "active" ? "text-green-600" : "text-muted-foreground"
        )}
      >
        {status}
      </span>
    </div>
  );
}
