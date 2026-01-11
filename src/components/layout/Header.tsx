import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-end px-6">
      <Avatar className="h-9 w-9 bg-muted">
        <AvatarFallback className="bg-muted text-muted-foreground text-sm font-medium">
          S
        </AvatarFallback>
      </Avatar>
    </header>
  );
}
